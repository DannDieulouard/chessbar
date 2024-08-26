import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'

const LogoutForm = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://chessbar-7ee82a4295af.herokuapp.com/api/users/logout", {
      method: "POST",
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        navigate('/chessbar/')
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });
    
        Toast.fire({
          icon: 'success',
          title: 'Déconnexion réussie !'
        });
      } else {
        setMessage("Une erreur est survenue");
      }
    });
}, []);

  return (
    <>
    <p></p>
    </>
  );
};

export default LogoutForm;