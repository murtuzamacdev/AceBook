import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../store/errorSlice.js";

const ErrorMessage = () => {
  const errorSelector = useSelector((state) => state.error);
  const dispatch = useDispatch();

  window.addEventListener("error", (event) => {
    console.log(
      "Error handled from centralized location - error",
      event.message
    );
    dispatch(
      setMessage({
        showError: true,
        errorMessage: event.message,
      })
    );
  });

  window.addEventListener("unhandledrejection", (event) => {
    console.log(
      "Error handled from centralized location - unhandledrejection",
      event.message
    );
  });

  const hideMessage = () => {
    dispatch(
        setMessage({
          showError: false,
          errorMessage: "",
        })
      );
  }

  return (
    <>
      {errorSelector.showError && (
        <div className="error-message">
          {errorSelector.errorMessage} <button className="close" onClick={hideMessage}>Hide</button>
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
