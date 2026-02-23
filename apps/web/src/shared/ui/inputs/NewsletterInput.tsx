"use client";

import React, { memo, useCallback, useId, useRef, useState, useTransition } from "react";
import { cn } from "@/shared/lib/cn";
import { Button } from "../button";

type NewsletterStatus = "idle" | "error" | "success";

export interface NewsletterInputProps {
  onSubmit: (email: string) => Promise<void> | void;

  placeholder?: string;
  buttonLabel?: string;
  successLabel?: string;
  errorLabel?: string;

  className?: string;
  inputClassName?: string;
  buttonClassName?: string;

  validateOnBlur?: boolean; // default true
  resetOnSuccess?: boolean; // default false
  disabled?: boolean;
  name?: string; // default "email"
}

function isValidEmail(value: string) {
  const v = value.trim();
  if (!v) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function NewsletterInputComponent({
  onSubmit,
  placeholder = "What’s your email?",
  buttonLabel = "Submit",
  successLabel = "See you soon!",
  errorLabel = "Please enter correct email address",
  className,
  inputClassName,
  buttonClassName,
  validateOnBlur = true,
  resetOnSuccess = false,
  disabled = false,
  name = "email",
}: NewsletterInputProps) {
  const reactId = useId();
  const errorId = `${reactId}-error`;
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<NewsletterStatus>("idle");

  const setError = useCallback(() => setStatus("error"), []);
  const clearError = useCallback(() => setStatus("idle"), []);

  const validateCurrentValue = useCallback(() => {
    const value = inputRef.current?.value ?? "";
    const ok = isValidEmail(value);

    if (!ok) {
      setError();
      return false;
    }

    clearError();
    return true;
  }, [clearError, setError]);

  const handleBlur = useCallback(() => {
    if (!validateOnBlur) return;

    const value = inputRef.current?.value ?? "";
    if (!value.trim() && status !== "error") return;

    validateCurrentValue();
  }, [status, validateOnBlur, validateCurrentValue]);

  const handleSubmit = useCallback(() => {
    const value = (inputRef.current?.value ?? "").trim();

    if (!isValidEmail(value)) {
      setError();
      return;
    }

    startTransition(async () => {
      try {
        await onSubmit(value);
        setStatus("success");

        if (resetOnSuccess && inputRef.current) {
          inputRef.current.value = "";
        }
      } catch {
        setStatus("error");
      }
    });
  }, [onSubmit, resetOnSuccess, setError, startTransition]);

  const isDisabled = disabled || isPending;

  /**
   * ✅ Figma-like pill:
   * - outer container has border + bg + rounded-full
   * - small inner padding so button sits "inside" the pill
   * - input has its own padding/height
   */
  const rowBase =
    "w-full inline-flex items-center rounded-full " +
    "border border-border-default bg-bg-page text-text-primary " +
    "p-1.5 " +
    "focus-within:ring-2 focus-within:ring-action-primary focus-within:ring-offset-2 focus-within:ring-offset-bg-page";

  const inputBase =
    "min-w-0 flex-1 bg-transparent outline-none " +
    "px-4 py-3 " +
    "text-sm leading-5 placeholder:text-text-muted";

  // Button: force height + padding so it matches the pill visually even if Button presets changed
  const buttonBase =
    "h-10 px-6 text-sm leading-5 font-medium " +
    "shrink-0";

  const errorText = "text-red-600 text-xs leading-4";

  if (status === "success") {
    return (
      <div className={cn("w-full", className)}>
        <div
          className={cn(
            "w-full inline-flex items-center justify-center rounded-full",
            "p-1.5 border border-border-default bg-bg-page text-text-primary",
            "text-sm leading-5"
          )}
          role="status"
          aria-live="polite"
        >
          {successLabel}
        </div>
      </div>
    );
  }

  return (
    <form
      className={cn("w-full flex flex-col gap-2", className)}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      noValidate
    >
      <div
        className={cn(rowBase, status === "error" && "border-red-500/60")}
        aria-invalid={status === "error"}
      >
        <input
          ref={inputRef}
          id={reactId}
          name={name}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={placeholder}
          className={cn(inputBase, inputClassName)}
          onBlur={handleBlur}
          aria-describedby={status === "error" ? errorId : undefined}
        />

        <Button
          variant="primary"
          size="md"
          rounded="full"
          disabled={isDisabled}
          className={cn(buttonBase, buttonClassName)}
          type="submit"
        >
          {isPending ? "..." : buttonLabel}
        </Button>
      </div>

      {status === "error" ? (
        <div id={errorId} className={errorText}>
          {errorLabel}
        </div>
      ) : null}
    </form>
  );
}

export const NewsletterInput = memo(NewsletterInputComponent);
NewsletterInput.displayName = "NewsletterInput";