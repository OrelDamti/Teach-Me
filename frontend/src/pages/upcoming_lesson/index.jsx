import React, { useState } from "react";
import { Day, Text, Time, Wrapper } from "./styles";
import { CustomSelect, Modal } from "../../components";
import { Flex, Form } from "antd";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalLoader } from "../../store/slices/globalLoader";
import { ConvertToLocal } from "../../helpers/time";
import { EditOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import config from "../../../services/config";

const weekDays = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  0: "Sunday",
};
const UpcomingLesson = ({ isTeacher = false }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { token } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [lesson, setLesson] = useState([]);
  const [lessonTime, setLessonTime] = useState("");
  const [option, setOption] = useState("");
  const [data, setData] = useState("");
  const [day, setDay] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isTeacher) {
      dispatch(setGlobalLoader(true));
      axios({
        url: config.SERVER_API + "enroll-course",
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setLesson(res?.data);
        })
        .finally(() => {
          dispatch(setGlobalLoader(false));
        });
    } else {
      dispatch(setGlobalLoader(true));
      axios({
        url: config.SERVER_API + "enroll-course/teacher",
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setLesson(res?.data);
        })
        .finally(() => {
          dispatch(setGlobalLoader(false));
        });
    }
  }, []);
  const handleClick = () => {
    if (option !== "") {
      const days = new dayjs().day();
      if (lessonTime) {
        const currentTime = new dayjs();
        const scheduledTime = dayjs(lessonTime, "hh:mm a");
        const timeDiffInMilliseconds = scheduledTime - currentTime;
        const timeDiffInHours = timeDiffInMilliseconds / (1000 * 60 * 60);
        if (timeDiffInHours >= 1 || day !== weekDays[`${days}`]) {
          if (isTeacher) {
            dispatch(setGlobalLoader(true));
            axios({
              url: config.SERVER_API + "enroll-course/course",
              method: "POST",
              headers: {
                authorization: `Bearer ${token}`,
              },
              data,
            })
              .then(() => {
                setData("");
                setOption("");
                setLessonTime("");
                toast.success("Class Cancel Successfully!");
                setOpen(false);
                navigate('/')
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
              url: config.SERVER_API + "enroll-course/student",
              method: "POST",
              headers: {
                authorization: `Bearer ${token}`,
              },
              data,
            })
              .then(() => {
                setData("");
                setOption("");
                setLessonTime("");
                toast.success("Class Cancel Successfully!");
                setOpen(false);
                navigate('/')
              })
              .catch((err) => {
                toast.error(err?.response?.data?.message);
              })
              .finally(() => {
                dispatch(setGlobalLoader(false));
              });
          }
        } else {
          toast.error("It's too late to cancel the class.");
        }
      } else {
      }
    } else {
      toast.error("Kindly Select Options!");
    }
  };
  const editHandler = (item) => {
    setOpen(true);
    setData({
      ...data,
      teacherCourseId: item.teacherCourseId._id,
      slot_id: item.slot_id,
    });
    setLessonTime(item.slot.startTime);
    setDay(item.slot.day);
  };
  return (
    <Wrapper>
      <Text>Upcoming Lesson</Text>
      <>
        {lesson?.length > 0 ? (
          lesson?.map((item) => (
            <Flex gap={10} style={{ paddingTop: "10px" }}>
              <Day>{item.day}</Day>
              <Flex vertical style={{ paddingTop: "4px" }}>
                {item?.entries.map((entries) => (
                  <Flex gap={5}>
                    <Time>{ConvertToLocal(entries.slot.startTime)}</Time>
                    <Time>-</Time>
                    <Time>{ConvertToLocal(entries.slot.endTime)}</Time>
                    <Time>({entries?.teacherCourseId?.courseId?.name})</Time>
                    <EditOutlined
                      style={{ cursor: "pointer" }}
                      onClick={() => editHandler(entries)}
                    />
                  </Flex>
                ))}
              </Flex>
            </Flex>
          ))
        ) : (
          <Day>No Lesson</Day>
        )}
      </>
      <Modal
        open={open}
        setOpen={setOpen}
        handleClick={handleClick}
        title={"Lesson Schedule"}
      >
        <Form layout="vertical" form={form}>
          <CustomSelect
            required
            message={"Select Options"}
            placeholder="Select"
            onChange={(value) => setOption(value)}
            options={[
              {
                label: "cancel",
                value: "cancel",
              },
            ]}
            autoComplete="off"
          />
        </Form>
      </Modal>
    </Wrapper>
  );
};

export default UpcomingLesson;
