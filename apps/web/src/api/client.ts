import { env } from '@/env';

type Query = Record<string, string | number | boolean | null | undefined>;

type RequestOptions = Omit<RequestInit, 'headers'> & {
  headers?: Record<string, string>;
  query?: Query;
};

function buildUrl(path: string, query?: Query) {
  const url = new URL(path, env.NEXT_PUBLIC_DIRECTUS_URL);
  if (query) {
    for (const [k, v] of Object.entries(query)) {
      if (v === undefined || v === null) continue;
      url.searchParams.set(k, String(v));
    }
  }
  return url.toString();
}

export async function apiFetch<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const url = buildUrl(path, options.query);

  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.DIRECTUS_TOKEN}`,
      ...options.headers,
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`API ${res.status} ${res.statusText}: ${text}`);
  }

  return (await res.json()) as T;
}
