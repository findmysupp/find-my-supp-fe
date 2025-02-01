import useStore from '../utils/store';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  const { setJwtToken, apiHost } = useStore();

  return useMutation({
    mutationKey: ['login'], // Add a mutationKey
    mutationFn: async ({ username, password }) => {
      try {
        console.log(apiHost);
        const response = await fetch(`${apiHost}/api/accounts/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        const data = await response.json();
        console.log(response);
        setJwtToken(data.token); // Store JWT token in Zustand
        return data;
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    },
  });
};