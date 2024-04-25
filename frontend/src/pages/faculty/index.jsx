import React, { useState } from "react";
import { Button, CustomSelect, Modal, UserTable } from "../../components";
import { Text, Wrapper } from "./styles";
import { Flex, Form } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalLoader } from "../../store/slices/globalLoader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import config from "../../../services/config";
const column = ["ID", "Role", "Name", "Actions"];
const rolesOptions = [
  {
    label: "Dean",
    value: "DEAN",
  },
  {
    label: "Vice Chancellor",
    value: "VC",
  },
  {
    label: "Director",
    value: "DIRECTOR",
  },
  {
    label: "Lecturer",
    value: "LECTURER",
  },
  {
    label: "Visiting Faculty",
    value: "VF",
  },
];

const Faculty = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [faculty, setFaculty] = useState([]);
  const [teacherOptions, setTeacherOptions] = useState([]);

  useEffect(() => {
    dispatch(setGlobalLoader(true));
    axios({
      url: config.SERVER_API + "teachers",
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res?.data?.length > 0) {
          setTeacherOptions(
            res?.data?.map((item) => {
              const obj = {
                label: item?.user?.name,
                value: item?.user?.name,
              };
              return obj;
            })
          );
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      })
      .finally(() => {
        dispatch(setGlobalLoader(false));
      });
  }, []);

  useEffect(() => {
    if (!open) {
      dispatch(setGlobalLoader(true));
      axios({
        url: config.SERVER_API + "faculty/admin",
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setFaculty(res?.data);
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        })
        .finally(() => {
          dispatch(setGlobalLoader(false));
        });
    }
  }, [open]);

  const deleteHandler = (item) => {
    dispatch(setGlobalLoader(true));
    axios({
      url: config.SERVER_API + `faculty/${item._id}`,
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        const filterfaculty = faculty.filter(({ _id }) => _id !== item._id);
        setFaculty(filterfaculty);
        toast.success("Course deleted Successfully");
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      })
      .finally(() => {
        dispatch(setGlobalLoader(false));
      });
  };

  const handleClick = () => {
    const value = form.getFieldsValue();
    if (value.name !== "" && value.role !== "") {
      dispatch(setGlobalLoader(true));
      axios({
        url: config.SERVER_API + `faculty`,
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: value,
      })
        .then(() => {
          toast.success("Faculty created Successfully!");
          setOpen(false);
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        })
        .finally(() => {
          dispatch(setGlobalLoader(false));
        });
    }
  };
  // console.log(teacherOptions, "teacherOptions", form.getFieldsValue());
  return (
    <Wrapper>
      <Flex justify={"space-between"}>
        <Text>Faculty</Text>
        <Button type="primary" onClick={() => setOpen(true)}>
          Add Faculty
        </Button>
      </Flex>
      <UserTable column={column}>
        <>
          {Object.keys(faculty).length > 0 &&
            faculty.map((item, index) => (
              <tr key={index}>
                <td className="p-3">{item._id}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.role}</td>
                <td className="p-3">
                  <Flex gap="20px">
                    <DeleteOutlined
                      onClick={() => deleteHandler(item)}
                      style={{ color: "red" }}
                    />
                  </Flex>
                </td>
              </tr>
            ))}
        </>
      </UserTable>
      <Modal
        open={open}
        setOpen={setOpen}
        handleClick={handleClick}
        title={"New Faculty"}
      >
        <Form layout="vertical" form={form}>
          <CustomSelect
            required
            message=" Role is Required!"
            placeholder="Enter your Role"
            label="Role"
            name="role"
            options={rolesOptions}
            autoComplete="off"
          />
          <CustomSelect
            required
            message=" Teacher is Required!"
            placeholder="Enter your Teacher"
            label="Teacher"
            name="name"
            options={teacherOptions.length > 0 && teacherOptions}
            autoComplete="off"
          />
        </Form>
      </Modal>
    </Wrapper>
  );
};

export default Faculty;
