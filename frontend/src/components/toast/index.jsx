import {
  CheckCircleTwoTone,
  InfoCircleTwoTone,
  QuestionCircleTwoTone,
  WarningTwoTone,
} from "@ant-design/icons";
import { ToastWrapper, TextWrapper } from "./styles";
import { ToastContainer } from "react-toastify";

const Toast = ({ message, type, title }) => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default Toast;
