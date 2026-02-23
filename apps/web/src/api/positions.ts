import { apiFetch } from './client';
import { DirectusListResponseSchema, PositionSchema, type Position } from '@/types/positions';

export async function getPositions(): Promise<Position[]> {
  const json = await apiFetch<unknown>('/items/positions');
  const parsed = DirectusListResponseSchema(PositionSchema).parse(json);
  return parsed.data;
}
