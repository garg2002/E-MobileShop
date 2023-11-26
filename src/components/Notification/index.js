import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 function Notification() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      rtl={false}
    ></ToastContainer>
  );
}

export default Notification