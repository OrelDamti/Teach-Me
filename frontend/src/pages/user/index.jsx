import React, { useState } from "react";
import { CustomSelect, Modal, TextField, UserTable } from "../../components";
import { Text, Wrapper } from "./styles";
import { Flex, Form } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalLoader } from "../../store/slices/globalLoader";
import { toast } from "react-toastify";
import config from "../../../services/config";

const column = ["ID", "Name", "Email", "Admin"];
const rolesOptions = [
  {
    label: "admin",
    value: "admin",
  },
  {
    label: "student",
    value: "student",
  },
  {
    label: "teacher",
    value: "teacher",
  },
];
const User = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState("");
  const [id, setId] = useState("");

  const handleClick = () => {
    const value = form.getFieldsValue();
    if (value.name !== "" && value.email !== "" && value.role !== "") {
      dispatch(setGlobalLoader(true));
      axios({
        url: config.SERVER_API + `users/profile/${id}`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: value,
      })
        .then(() => {
          toast.success("Profile Updated Successfully!");
          setId("");
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
  const editHandler = (item) => {
    setOpen(true);
    form.setFieldsValue(item);
    setId(item._id);
  };

  const deleteHandler = (item) => {
    dispatch(setGlobalLoader(true));
    axios({
      url: config.SERVER_API + `users/${item._id}`,
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        const filterUser = users.filter(({ _id }) => _id !== item._id);
        setUsers(filterUser);
        toast.success("User deleted Successfully");
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      })
      .finally(() => {
        dispatch(setGlobalLoader(false));
      });
  };
  useEffect(() => {
    dispatch(setGlobalLoader(true));
    axios({
      url: config.SERVER_API + "users",
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setUsers(res.data);
      })
      .finally(() => {
        dispatch(setGlobalLoader(false));
      });
  }, []);

  return (
    <Wrapper>
      <Text>Users</Text>
      <UserTable column={column}>
        <>
          {Object.keys(users).length > 0 &&
            users.map((item, index) => (
              <tr key={index}>
                <td className="p-3">{item._id}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3">
                  <Flex justify="space-between">
                    {item.role === "admin" ? (
                      <CheckOutlined style={{ color: "green" }} />
                    ) : (
                      <CloseOutlined style={{ color: "red" }} />
                    )}
                    <Flex gap="10px">
                      <EditOutlined
                        onClick={() => editHandler(item)}
                        style={{ color: "blue" }}
                      />
                      <DeleteOutlined
                        onClick={() => deleteHandler(item)}
                        style={{ color: "red" }}
                      />
                    </Flex>
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
        title={"Edit User"}
      >
        <Form layout="vertical" form={form}>
          <TextField
            required
            message="Name  is Required!"
            placeholder="Enter your Name"
            label="Name"
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
          <CustomSelect
            required
            message=" Role is Required!"
            placeholder="Enter your Role"
            label="Role"
            name="role"
            options={rolesOptions}
            autoComplete="off"
          />
        </Form>
      </Modal>
    </Wrapper>
  );
};

export default User;
