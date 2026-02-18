const base = process.env.NEXT_PUBLIC_DIRECTUS_URL;

if (!base) throw new Error("NEXT_PUBLIC_DIRECTUS_URL is missing");

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

  if (!res.ok) throw new Error(`Directus ${res.status}: ${await res.text()}`);

  const json = (await res.json()) as DirectusListResponse<Position>;
  return json.data;
}
