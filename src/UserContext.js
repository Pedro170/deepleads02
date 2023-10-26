import React from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_POST } from "./utils/Api";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const imgusuario = "https://source.unsplash.com/random/200x200/?lion"

  const navigate = useNavigate();

  const userLogin = async (login, senha) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ login, senha });
      const response = await fetch(url, options);

      if (response.ok) {
        const usuario = await response.json();
        window.localStorage.setItem("usuario", JSON.stringify(usuario));
        navigate("/cliente/inicio");
        window.location.reload();
        
      } else {
        setError("Email ou senha inválido")
      }
      
    } catch (err) {
      setError(err);
      setLogin(false);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    setData(JSON.parse(window.localStorage.getItem("usuario")));
    //const usuario = JSON.parse(window.localStorage.getItem("usuario")) 
  }, []);

  const userLogout = async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("usuario");
    navigate("/");
    window.location.reload();
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        loading,
        data,
        error,
        login,
        imgusuario
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
