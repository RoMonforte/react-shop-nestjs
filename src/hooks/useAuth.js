import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '../services/api';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const options = {
    Headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  const signIn = async (username, password) => {
    const { data: access_token } = await axios.post(endPoints.auth.login, { username, password }, options);
    console.log(access_token);
  };

  return {
    user,
    signIn,
  };
}
