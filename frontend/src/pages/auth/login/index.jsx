import { Flex, Form } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  MessageContainer,
  LoginForm,
  SubmitButton,
  Title,
  Text,
} from "./styles";
import { useEffect, useState } from "react";
import { Helmet, Toast, TextField } from "../../../components";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/auth";
import { toast } from "react-toastify";
import axios from "axios";
import { setGlobalLoader } from "../../../store/slices/globalLoader";
import config from "../../../../services/config";

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search.split("=");
  const [form] = Form.useForm();
  const [error, setError] = useState(false);
  useEffect(() => {
    if (error) {
      setInterval(() => setError(false), 5000);
    }
  }, [error]);
  const handleSubmit = (values) => {
    if (values.email !== "" && values.password !== "") {
      dispatch(setGlobalLoader(true));
      axios({
        url: config.SERVER_API + "users/login",
        method: "POST",
        headers: {},
        data: values,
      })
        .then((res) => {
          form.resetFields();
          toast.success("Login Successfully!");
          dispatch(
            setUser({
              token: res.data.token,
              user: res.data,
            })
          );
          navigate(redirect[1] == null ? "/" : redirect[1]);
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        })
        .finally(() => {
          dispatch(setGlobalLoader(false));
        });
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    form.submit();
  }, []);

  return (
    <div>
      <Helmet title="Teach Me" />
      <Title level={1}>Log In</Title>
      <LoginForm layout="vertical" form={form} onFinish={handleSubmit}>
        {error && (
          <MessageContainer>
            <Toast
              type="error"
              message="The info entered doesn't match our records. Please try again or select Forget Username or Password."
            />
          </MessageContainer>
        )}
        <TextField
          required
          message=" Email is Required!"
          placeholder="Enter your Email"
          label="Email"
          name="email"
          autoComplete="off"
        />
        <TextField
          required
          type="password"
          message="Password  is Required!"
          placeholder="Enter your Password"
          label="Password"
          name="password"
          autoComplete="off"
        />
        <SubmitButton block type="primary" htmlType="submit">
          Sign In
        </SubmitButton>
        <Text>
          Don&apos;t have an account?
          <Flex vertical>
            <Link to="/register/student">Sign Up as Student</Link>
            <Link to="/register/teacher">Sign Up as Teacher</Link>
          </Flex>
        </Text>
      </LoginForm>
    </div>
  );
};

export default Login;
