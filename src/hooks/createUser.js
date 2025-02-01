import useStore from '../utils/store';
import { useMutation } from '@tanstack/react-query';

export const useCreateUser = () => {
  const { jwtToken, setUser, apiHost } = useStore(); // Ensure apiHost is included

  return useMutation({
    mutationKey: ['createUser'], // Correctly define mutationKey
    mutationFn: async () => { // Correctly define mutationFn
      const response = await fetch(`${apiHost}/api/users/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({}), // Use the userData passed to the mutation
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const data = await response.json();
      setUser(data); // Store user in Zustand
      return data;
    },
  });
};