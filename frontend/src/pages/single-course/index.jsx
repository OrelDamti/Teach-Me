import React, { useEffect } from "react";
import {
  CourseName,
  Description,
  ImageProduct,
  ReviewWrapper,
  Text,
  Wrapper,
} from "./styles";
import { Col, Flex, Row } from "antd";
import { Button, CustomTextArea, Review, UserTable } from "../../components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalLoader } from "../../store/slices/globalLoader";
import { useState } from "react";
import axios from "axios";
import config from "../../../services/config";

const column = ["Pic", "Name", "Email", "Price"];

const SingleCourse = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [course, setCourse] = useState("");
  const [teachers, setTeachers] = useState([]);

  const params = useParams();
  // console.log(params);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGlobalLoader(true));
    axios({
      url: config.SERVER_API + `courses/${params?.id}`,
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setCourse(res?.data);
      })
      .finally(() => {
        dispatch(setGlobalLoader(false));
      });
  }, []);

  useEffect(() => {
    dispatch(setGlobalLoader(true));
    axios({
      url: config.SERVER_API + `teacher-Course/course/${params?.id}`,
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setTeachers(res?.data);
      })
      .finally(() => {
        dispatch(setGlobalLoader(false));
      });
  }, []);

  const clickHandler = (id) => {
    if (token === null) {
      navigate(`/login?redirectTo=/schedule/1`);
    } else {
      navigate(`/schedule/${id}`);
    }
  };
  return (
    <Wrapper>
      <Row>
        <Col span={12}>
          <ImageProduct>
            <img src={config.SERVER_IMAGE_API + `${course?.image}`} />
          </ImageProduct>
        </Col>
        <Col span={12}>
          <Flex gap="middle" vertical justify="center">
            <CourseName>{course?.name}</CourseName>
            <Description>{course?.description}</Description>
            <>
              {teachers?.length > 0 && (
                <UserTable column={column}>
                  <>
                    {teachers?.length > 0 &&
                      teachers?.map((item, index) => (
                        <tr
                          key={index}
                          style={{ cursor: "pointer", verticalAlign: "middle" }}
                          onClick={() => clickHandler(item?._id)}
                        >
                          <td className="p-1">
                            <img
                              height={70}
                              src={config.SERVER_IMAGE_API + `${item?.teacherId?.picture}`}
                            />
                          </td>
                          <td className="p-3">{item?.teacherId?.name}</td>
                          <td className="p-3">{item?.teacherId?.email}</td>
                          <td className="p-3">{item?.price}₪</td>
                        </tr>
                      ))}
                  </>
                </UserTable>
              )}
            </>
          </Flex>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default SingleCourse;
