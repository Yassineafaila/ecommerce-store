import { createContext, useContext, useEffect, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
  users: [],
  user: null,
  isAuthenticated: false,
};
function reducer(state, action) {
  switch (action.type) {
      case "users/loaded":
          return {...state,users:action.payload}

    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
  }
}
function AuthProvider({ children }) {
  const [{ users, user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
    );
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/users");
            const data = await response.json()
            dispatch({type:"users/loaded",payload:data})
            } catch (error) {
                console.log("there was an error durning loading the users");
            }
        }
        fetchUsers();
    },[])
    function login(email, password) {
        const user = users.find((user) => user.email === email);
        if (user.email === email && user.password === password) {
            dispatch({type:"login",payload:user})
        }
  }
    function logout() {
      dispatch({type:"logout"})
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext was used outside AuthProvider");
    }
    return context;
}
export {AuthProvider,useAuth}