import { UserOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { setGlobalLoader } from "../../store/slices/globalLoader";
import { CardWrapper, TextWrapper, Wrapper } from "./styles";
import config from "../../../services/config";

const Feedback = ({ isTeacher = false }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    if (!isTeacher) {
      dispatch(setGlobalLoader(true));
      axios({
        url: config.SERVER_API + `review-Course/${params.id}`,
        method: "GET",
      })
        .then((res) => {
          setFeedback(res?.data);
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        })
        .finally(() => {
          dispatch(setGlobalLoader(false));
        });
    } else {
      dispatch(setGlobalLoader(true));
      axios({
        url: config.SERVER_API + `review-teacher-course/${params.id}`,
        method: "GET",
      })
        .then((res) => {
          setFeedback(res?.data);
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        })
        .finally(() => {
          dispatch(setGlobalLoader(false));
        });
    }
  }, []);
  console.log("feedback=>", feedback);
  return (
    <Wrapper>
      <TextWrapper>Student Feedbacks</TextWrapper>
      <Flex wrap="wrap" gap={30}>
        {feedback.length > 0 &&
          feedback.map((item) => (
            <CardWrapper vertical gap={10}>
              <Flex align="center" gap={10}>
                <div
                  style={{
                    height: 30,
                    width: 30,
                    background: "whitesmoke",
                    borderRadius: 20,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <UserOutlined />
                </div>
                <p style={{ margin: 0 }}>{ !isTeacher && item?.reviewerId?.name}</p>
              </Flex>
              <p style={{ margin: 0 }}>{item?.comment}</p>
            </CardWrapper>
          ))}
      </Flex>
    </Wrapper>
  );
};

export default Feedback;
