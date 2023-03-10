import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '../services/api';
import jwt from 'jwt-decode';

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
    if (access_token) {
      const token = access_token.access_token;
      Cookie.set('token', token, { expires: 15 });

      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const jwtData = jwt(token);
      const id = await jwtData.sub;
      const { data: user } = await axios.get(endPoints.users.getSingleUser(id));
      setUser(user);
    }
  };

  const logOut = () => {
    Cookie.remove('token');
    setUser(null);
    delete axios.defaults.headers.Authorization;
    window.location.href = '/login';
  }

  return {
    user,
    signIn,
    logOut,
  };
}
