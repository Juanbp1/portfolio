import { useState } from "react";

const useFormStatus = () => {
    const [status, setStatus] = useState({
      isLoading: false,
      isSubmitted: false,
      statusMessage: "Enviar",
    });
  
    const resetStatus = () => {
      setStatus({
        isLoading: false,
        isSubmitted: false,
        statusMessage: "Enviar",
      });
    };
  
    const updateStatus = (loading, message) => {
      setStatus({
        isLoading: loading,
        isSubmitted: !loading,
        statusMessage: message,
      });
    };
  
    return { status, updateStatus, resetStatus };
  };

  export default useFormStatus