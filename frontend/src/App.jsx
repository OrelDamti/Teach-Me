import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import theme from "./theme.json";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
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
      <ConfigProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </ConfigProvider>
    </>
  );
}

export default App;
