import React from "react";
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST } from "./utils/Api";

export const UserContext = React.createContext();
export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const navigate = useNavigate();

  const getUser = (usuario) => {
    const usuarioToken = window.localStorage.getItem("token");
    if (usuario.token === usuarioToken) {
      setLogin(true);
      setData(usuario)

      navigate('/cliente/inicio');
    }
  };

  const userLogin = async (login, senha) => {
    const { url, options } = TOKEN_POST({ login, senha });
    const response = await fetch(url, options);
    const usuario = await response.json();
    window.localStorage.setItem("token", usuario.token);
    getUser(usuario);
    navigate('/cliente/inicio');
    console.log('caiu aqui')
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import { TOKEN_POST } from "./utils/Api";

// export const UserContext = React.createContext();

// export const UserStorage = ({ children }) => {
//   const [data, setData] = useState(null);
//   const [login, setLogin] = useState(null);
//   // const [loading, setLoading] = useState(false);
//   // const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   const getUser = (usuario) => {
//     const usuarioToken = window.localStorage.getItem("token");
//     if (usuario.token === usuarioToken) {
//       setLogin(true);
//       setData(usuario)
//       console.log(usuario);

//       navigate('/cliente/inicio');

//       console.log("data ->" +data)

//       console.log("login ->" + login)
//     }
//   };

//   const userLogin = async (login, senha) => {
//     const { url, options } = TOKEN_POST({ login, senha });
//     const response = await fetch(url, options);
//     const usuario = await response.json();
//     window.localStorage.setItem("token", usuario.token);
    

//     getUser(usuario);
//   };

//   return (
//     <UserContext.Provider
//       value={{
//         userLogin,
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContext;
