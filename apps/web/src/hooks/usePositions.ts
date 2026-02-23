import { useQuery } from '@tanstack/react-query';
import { getPositions } from '@/api/positions';

export function usePositions() {
  return useQuery({
    queryKey: ['positions'],
    queryFn: getPositions,
  });
}
