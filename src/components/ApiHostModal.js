import { useState } from 'react';
import useStore from '../utils/store';

const ApiHostModal = () => {
  const { apiHost, setApiHost } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [newHost, setNewHost] = useState(apiHost);

  const handleSave = () => {
    setApiHost(newHost);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      <button onClick={() => setIsOpen(!isOpen)}>Change API Host</button>
      {isOpen && (
        <div style={{ padding: '10px', backgroundColor: 'white', border: '1px solid #ccc' }}>
          <input
            type="text"
            value={newHost}
            onChange={(e) => setNewHost(e.target.value)}
            placeholder="Enter API host"
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
};

export default ApiHostModal;