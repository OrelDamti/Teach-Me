import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  CustomSelect,
  CustomTextArea,
  InputNumber,
  TextField,
} from "../../components";
import { setGlobalLoader } from "../../store/slices/globalLoader";
import { Image, LoginForm, Wrapper } from "./styles";
import { toast } from "react-toastify";
import { useEffect } from "react";
import config from "../../../services/config";

const departmentOptions = [
  { label: "Software", value: "Software" },
  { label: "Mathematics", value: "Mathematics" },
  { label: "Physics", value: "Physics" },
  { label: "Chemistry", value: "Chemistry" },
  { label: "Electrical", value: "Electrical" },
  { label: "Mechanical", value: "Mechanical" },
  { label: "Industrial Management", value: "Industrial Management" },
];

const EditCourse = ({ isAdd = false }) => {
  const params = useParams();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = LoginForm.useForm();
  const [image, setImage] = useState("");
  const [files, setFiles] = useState("");
  useEffect(() => {
    if (!isAdd) {
      dispatch(setGlobalLoader(true));
      axios({
        url: config.SERVER_API + `courses/${params?.id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          form.setFieldsValue(res.data);
          setImage(config.SERVER_API + `${res?.data?.image}`);
          form.setFieldValue("image", "");
        })
        .finally(() => {
          dispatch(setGlobalLoader(false));
        });
    }
  }, [isAdd]);

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
    if (isAdd) {
      if (
        value.name !== "" &&
        value.description !== "" &&
        value.faculty !== "" &&
        value.image !== ""
      ) {
        const formData = new FormData();
        formData.append("image", files);
        formData.append("name", value.name);
        formData.append("description", value.description);
        formData.append("faculty", value.faculty);
        dispatch(setGlobalLoader(true));
        axios({
          url: config.SERVER_API + "courses",
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        })
          .then(() => {
            toast.success("Course Added Successfully!");
            navigate("/courses");
          })
          .catch((err) => {
            toast.error(err?.response?.data?.message);
          })
          .finally(() => {
            dispatch(setGlobalLoader(false));
          });
      }
    } else {
      const formData = new FormData();
      if (files) formData.append("image", files);
      if (value.name) formData.append("name", value.name);
      if (value.description) formData.append("description", value.description);
      if (value.faculty) formData.append("faculty", value.faculty);
      dispatch(setGlobalLoader(true));
      axios({
        url: config.SERVER_API + `courses/${params?.id}`,
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      })
        .then(() => {
          toast.success("Course Added Successfully!");
          navigate("/courses");
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        })
        .finally(() => {
          dispatch(setGlobalLoader(false));
        });
    }
  };
  return (
    <Wrapper>
      <h1>{isAdd ? "New Course" : "Edit Course"}</h1>
      <LoginForm layout="vertical" form={form} onFinish={handleSubmit}>
        <>
          {image !== "" &&
            (isAdd ? (
              <Image src={image} alt="Uploaded" />
            ) : (
              <Image src={image} alt="Uploaded" />
            ))}
          <TextField
            required={isAdd}
            message=" Picture is Required!"
            placeholder="Enter your Picture"
            label="Course Picture"
            name="image"
            type="file"
            onChange={handleFileChange}
            autoComplete="off"
          />
        </>
        <TextField
          required={isAdd}
          message=" Name is Required!"
          placeholder="Enter your Name"
          label="Name"
          name="name"
          autoComplete="off"
        />
        <CustomSelect
          required={isAdd}
          message=" Faculty is Required!"
          placeholder="Enter your Faculty"
          label="Faculty"
          name="faculty"
          options={departmentOptions}
        />
        <CustomTextArea
          required={isAdd}
          message="Description is Required!"
          placeholder="Enter your Description"
          style={{ minHeight: "79px !important" }}
          minRow={3}
          maxRow={0}
          bgTransparent
          label="Description"
          name="description"
          autoComplete="off"
        />
        <Button type="primary" htmlType="submit">
          {isAdd ? "Add " : "  Update"}
        </Button>
      </LoginForm>
    </Wrapper>
  );
};

export default EditCourse;
