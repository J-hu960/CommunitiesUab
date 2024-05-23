import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const setAuthToken = async () => {
        const tokenStrorage = await AsyncStorage.getItem('token');
        if (tokenStrorage) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${tokenStrorage}`;
          setToken(tokenStrorage)
        } else {
          delete axios.defaults.headers.common['Authorization'];
        }
    
      };
      
      const loadUser = async (mail) => {
        try {
  
            const response = await axios.get(`http://localhost:8020/api/v1/users/${mail}`)
            setUser(response.data);
          
        } catch (error) {
          console.log(error);
        }
      };
    
    return (
        <UserContext.Provider value={{ user, setUser, token, setAuthToken,loadUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
export {UserContext}
