// apps/web/src/lib/directus.ts

const base = process.env.NEXT_PUBLIC_DIRECTUS_URL;
const hasBase = Boolean(base);

// Token nije public. Koristi se samo na serveru.
const token = process.env.DIRECTUS_TOKEN;

export type Position = {
  id: number;
  title: string;
  location: string;
  remote: boolean | null;
  technologies: string[] | null;
  employment_type: string;
  slug: string;
  apply_url: string;
};

type DirectusListResponse<T> = { data: T[] };

export async function getPositions(): Promise<Position[]> {
  // Allow deployment without Directus configured (e.g. first Vercel deploy)
  if (!hasBase) return [];

  const fields = [
    "id",
    "title",
    "location",
    "remote",
    "technologies",
    "employment_type",
    "slug",
    "apply_url",
  ].join(",");

  const url = `${base}/items/positions?fields=${encodeURIComponent(fields)}&sort=-id`;

  const res = await fetch(url, {
    cache: "no-store",
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });

  // In dev/prod: don't crash the whole page build/runtime if Directus is temporarily down
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.warn(`Directus error ${res.status}: ${text}`);
    return [];
  }

  const json = (await res.json()) as DirectusListResponse<Position>;
  return json.data ?? [];
}
