import React from "react";

const useForm = () => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  const validacao = (value) => {
    if (value.length === 0) {
      setError("Preecha um valor");
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    if (error) validacao(target.value);
    setValue(target.value);
  };

  return {
    value,
    error,
    setValue,
    onChange,
    validacao: () => validacao(value),
  };
};

export default useForm;