import useStore from '../utils/store';
import { useMutation } from '@tanstack/react-query';

export const useUpdateUser = () => {
    const { jwtToken, user, setUser } = useStore();
  
    return useMutation(async (updatedFields) => {
      const response = await fetch(`${apiHost}/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(updatedFields),
      });
      const data = await response.json();
      setUser({ ...user, ...data }); // Update user in Zustand
      return data;
    });
  };