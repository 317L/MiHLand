"use client";

import React, { useCallback } from "react";
import { NewsletterInput } from "@/shared/ui/inputs/NewsletterInput";

type Props = {
  placeholder?: string;
  buttonLabel?: string;
  successLabel?: string;
  errorLabel?: string;
  onSubmit?: (email: string) => Promise<void> | void;
};

export function FooterNewsletter({
  placeholder = "What’s your email?",
  buttonLabel = "Submit",
  successLabel = "See you soon!",
  errorLabel = "Please enter correct email address",
  onSubmit,
}: Props) {
  const submit = useCallback(
    async (email: string) => {
      if (onSubmit) return onSubmit(email);
      void email;
    },
    [onSubmit],
  );

  return (
    <NewsletterInput
      onSubmit={submit}
      placeholder={placeholder}
      buttonLabel={buttonLabel}
      successLabel={successLabel}
      errorLabel={errorLabel}
    />
  );
}