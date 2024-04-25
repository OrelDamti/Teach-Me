import { Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginForm,
  SubmitButton,
  Title,
  Text,
  Image,
} from "./styles";
import { useState } from "react";
import {
  Helmet,
  Toast,
  TextField,
  InputNumber,
  CustomSelect,
} from "../../../components";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setGlobalLoader } from "../../../store/slices/globalLoader";
import { setUser } from "../../../store/slices/auth";
import config from "../../../../services/config";

const departmentOptions = [
  { label: "Software", value: "Software" },
  { label: "Mathematics", value: "Mathematics" },
  { label: "Physics", value: "Physics" },
  { label: "Chemistry", value: "Chemistry" },
  { label: "Electrical", value: "Electrical" },
  { label: "Mechanical", value: "Mechanical" },
  { label: "Industrial Management", value: "Industrial Management" },
];

const Register = ({ isTeacher }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [image, setImage] = useState("");
  const [files, setFiles] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFiles(e.target.files[0]);
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (value) => {
    if (!isTeacher) {
      if (
        value.name !== "" &&
        value.email !== "" &&
        value.password !== "" &&
        value.studentId !== "" &&
        value.studentDepartment !== "" &&
        value.phone !== "" &&
        value.confirm_password !== ""
      ) {
        if (value.confirm_password == value.password) {
          dispatch(setGlobalLoader(true));
          axios({
            url: config.SERVER_API + "users/register/student",
            method: "POST",
            headers: {},
            data: value,
          })
            .then((res) => {
              form.resetFields();
              toast.success("Student Register Successfully!");
              dispatch(
                setUser({
                  token: res.data.token,
                  user: res.data,
                })
              );
              navigate("/");
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
    } else {
      if (
        value.name !== "" &&
        value.email !== "" &&
        value.password !== "" &&
        value.teacherId !== "" &&
        value.teacherDepartment !== "" &&
        value.phone !== "" &&
        value.confirm_password !== "" &&
        value.image !== ""
      ) {
        if (value.confirm_password == value.password) {
          const formData = new FormData();
          formData.append("image", files);
          formData.append("name", value.name);
          formData.append("email", value.email);
          formData.append("password", value.password);
          formData.append("teacherDepartment", value.teacherDepartment);
          formData.append("phone", value.phone);
          formData.append("teacherId", value.teacherId);
          dispatch(setGlobalLoader(true));
          axios({
            url: config.SERVER_API + "users/register/teacher",
            method: "POST",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            data: formData,
          })
            .then((res) => {
              form.resetFields();
              setFiles("");
              setImage("");
              toast.success("Teacher Register Successfully!");
              dispatch(
                setUser({
                  token: res.data.token,
                  user: res.data,
                })
              );
              navigate("/");
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
    }
  };
  return (
    <div>
      <Helmet title="Teach Me" />
      <Title level={1}>Sign Up</Title>
      <LoginForm layout="vertical" form={form} onFinish={handleSubmit}>
        {isTeacher && (
          <>
            {image !== "" && <Image src={image} alt="Uploaded" />}
            <TextField
              required
              message=" Profile Picture is Required!"
              placeholder="Enter your Profile Picture"
              label="Profile Picture"
              name="image"
              type="file"
              onChange={handleFileChange}
              autoComplete="off"
            />
          </>
        )}
        <TextField
          required
          message=" Name is Required!"
          placeholder="Enter your Name"
          label="Name"
          name="name"
          autoComplete="off"
        />
        <TextField
          required
          message=" Email is Required!"
          placeholder="Enter your Email"
          label="Email Address"
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
        <TextField
          required
          type="password"
          message="Confirm Password  is Required!"
          placeholder="Enter your Confirm Password"
          label="Confirm Password"
          name="confirm_password"
          autoComplete="off"
        />
        {isTeacher ? (
          <TextField
            required
            message=" Teacher ID is Required!"
            placeholder="Enter your Teacher ID"
            label="Teacher ID"
            name="teacherId"
            autoComplete="off"
            maxLength={9}
          />
        ) : (
          <TextField
            required
            message=" Student ID is Required!"
            placeholder="Enter your Student ID"
            label="Student ID"
            name="studentId"
            autoComplete="off"
            maxLength={9}
          />
        )}
        {isTeacher ? (
          <CustomSelect
            label="Department"
            placeholder="Enter your Department"
            name="teacherDepartment"
            options={departmentOptions}
            message="Department is Required!"
            required
          />
        ) : (
          <CustomSelect
            label="Department"
            placeholder="Enter your Department"
            name="studentDepartment"
            options={departmentOptions}
            message="Department is Required!"
            required
          />
        )}
        <TextField
          label="Phone No"
          placeholder="Enter your Phone Number"
          name="phone"
          maxLength={10}
          message="Phone Number is Required!"
          required
          isBorder
        />
        <SubmitButton block type="primary" htmlType="submit">
          Sign Up
        </SubmitButton>
        <Text>
          Already have an account?
          <Link to="/login"> Login</Link>
        </Text>
      </LoginForm>
    </div>
  );
};

export default Register;
