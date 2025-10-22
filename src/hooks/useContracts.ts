import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { Contract } from '@/types/contract';

// ✅ Fetch contracts list
export function useContracts() {
  return useQuery<Contract[], Error>({
    queryKey: ['contracts'],
    queryFn: async (): Promise<Contract[]> => {
      const res = await api.get<Contract[]>('/contracts');
      return res.data; // ✅ Type now known to be Contract[]
    },
  });
}

// ✅ Create a new contract
export function useCreateContract() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newContract: Contract) => {
      const res = await api.post<Contract>('/contracts', newContract);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contracts'] });
    },
  });
}
