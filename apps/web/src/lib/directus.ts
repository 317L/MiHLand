const base = process.env.NEXT_PUBLIC_DIRECTUS_URL ?? '';

export type Position = {
  id: number;
  title: string;
  location: string | boolean | null;
  remote: boolean | null;
  technologies: string[] | null;
  employment_type: string | string[] | null;
  slug: string | null;
  apply_url: string | null;
  is_active?: boolean | null;
};

type DirectusListResponse<T> = { data: T[] };

type GetPositionsOptions = { debug?: boolean };

type GetPositionsResult = {
  positions: Position[];
  debug: {
    base: string | null;
    hasBase: boolean;
    url: string | null;
    status?: number;
    responseSnippet?: string;
    headersSent?: Record<string, string>;
  };
};

export async function getPositions(options: GetPositionsOptions = {}): Promise<GetPositionsResult> {
  const hasBase = Boolean(base);

  const debug: GetPositionsResult['debug'] = {
    base: base || null,
    hasBase,
    url: null,
    status: undefined,
    responseSnippet: undefined,
    headersSent: {},
  };

  if (!hasBase) return { positions: [], debug };

  // MOŽEŠ i bez fields (kao tvoj incognito test)
  const url = `${base}/items/positions?sort=-id`;
  debug.url = url;

  // NAMJERNO: bez Authorization headera
  const res = await fetch(url, { cache: 'no-store' });

  debug.status = res.status;

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    debug.responseSnippet = text.slice(0, 900);
    if (options.debug) console.warn(`[Directus] error ${res.status}:`, debug.responseSnippet);
    return { positions: [], debug };
  }

  const json = (await res.json()) as DirectusListResponse<Position>;

  const positions = (json.data ?? []).map((p) => ({
    ...p,
    remote: p.remote ?? false,
    technologies: Array.isArray(p.technologies) ? p.technologies : [],
    apply_url: typeof p.apply_url === 'string' ? p.apply_url : null,
    slug: typeof p.slug === 'string' ? p.slug : null,
  }));

  return { positions, debug };
}
