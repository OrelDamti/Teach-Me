import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, TextField } from "../../../components";
import { setGlobalLoader } from "../../../store/slices/globalLoader";
import { LoginForm, Wrapper } from "./styles";
import config from "../../../../services/config";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [form] = LoginForm.useForm();

  useEffect(() => {
    dispatch(setGlobalLoader(false));
    axios({
      url: config.SERVER_API + "users/profile",
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        form.setFieldsValue(res.data);
      })
      .finally(() => {
        dispatch(setGlobalLoader(false));
      });
  }, []);

  const handleSubmit = (value) => {
    if (
      value.name !== "" &&
      value.email !== "" &&
      value.password !== "" &&
      value.confirm_password !== ""
    ) {
      if (value.confirm_password === value.password) {
        dispatch(setGlobalLoader(true));
        axios({
          url: config.SERVER_API + "users/profile",
          method: "PUT",
          headers: {
            authorization: `Bearer ${token}`,
          },
          data: value,
        })
          .then(() => {
            toast.success("Profile Updated Successfully!");
            dispatch(
              setUser({
                token: res.data.token,
                user: res.data,
              })
            );
          })
          .catch((err) => {
            toast.error(err?.response?.data?.message);
          })
          .finally(() => {
            dispatch(setGlobalLoader(false));
          });
      } else {
        toast.error("Password not Match!");
      }
    }
  };

  return (
    <Wrapper>
      <h1>UPDATE PROFILE</h1>
      <LoginForm layout="vertical" form={form} onFinish={handleSubmit}>
        <TextField
          required
          message=" Name is Required!"
          placeholder="Enter your Name"
          label="Username"
          name="name"
          autoComplete="off"
        />
        <TextField
          required
          message=" Email is Required!"
          placeholder="Enter your Email"
          label="Email"
          name="email"
          autoComplete="off"
        />
        <TextField
          type="password"
          required
          message=" Password is Required!"
          placeholder="Enter your Password"
          label="Password"
          name="password"
          autoComplete="off"
        />
        <TextField
          required
          type="password"
          message="Confirm Password is Required!"
          placeholder="Enter your Confirm Password"
          label="Confirm Password"
          name="confirm_password"
          autoComplete="off"
        />
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </LoginForm>
    </Wrapper>
  );
};

export default UpdateProfile;
