import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./reducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  // accessToken: JSON.parse(localStorage.getItem('accessToken')) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user))
    // localStorage.setItem('accessToken', JSON.stringify(state.accessToken))
},[state.user])
  return (
    <AuthContext.Provider value={{
        user: state.user,
        // accessToken: state.accessToken,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
