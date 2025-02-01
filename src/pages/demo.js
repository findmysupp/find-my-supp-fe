import ApiHostModal from '../components/ApiHostModal';
import {useLogin} from '../hooks/login';
import {useCreateUser} from '../hooks/createUser';
import {useUpdateUser} from '../hooks/updateUser';
import useStore from '../utils/store';

export default function Home() {
    const { user, setUser, apiHost, jwtToken } = useStore();
    console.log({ apiHost, jwtToken, user });
  const loginMutation = useLogin();
  const createUserMutation = useCreateUser();
  const updateUserMutation = useUpdateUser();

  const handleLogin = () => {
    console.log("login")
    loginMutation.mutate({ username: 'kewei', password: 'password123' });
  };

  const handleCreateUser = () => {
    createUserMutation.mutate();
  };

  const handleUpdateUser = () => {
    updateUserMutation.mutate({ name: 'Jane Doe' });
  };

  return (
    <div>
      <ApiHostModal />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleCreateUser}>Create User</button>
      <button onClick={handleUpdateUser}>Update User</button>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </div>
  );
}