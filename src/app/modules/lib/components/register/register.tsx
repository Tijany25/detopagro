import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const CreateSuperAdmin: React.FC = () => {
  const [isCreated, setIsCreated] = useState(false);
  const [error, setError] = useState(null);

  const handleCreate = async () => {
    try {
      const response = await axios.post('/api/register');
      setIsCreated(true);
      console.log(response);
      
      toast.success('Registration successfully');
    } catch (error) {
        console.log(error);
        
    }
  };

  return (
    <div>
      {!isCreated && <button onClick={handleCreate}>Create Super Admin</button>}
      {isCreated && <p>Super admin created successfully!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CreateSuperAdmin;
