import React, { useEffect } from "react";
import {
  CourseName,
  Description,
  FormWrapper,
  ImageProduct,
  TextWrapper,
  Wrapper,
} from "./styles";
import { Col, Flex, Row, Switch } from "antd";
import { Button, InputNumber, TimePicker } from "../../../components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalLoader } from "../../../store/slices/globalLoader";
import { useState } from "react";
import axios from "axios";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { ConvertIntoUTC, ConvertToLocalDate } from "../../../helpers/time";
import { toast } from "react-toastify";
import config from "../../../../services/config";

const initialSlot = [
  {
    day: "Sunday",
    timeSlots: [],
  },
  {
    day: "Monday",
    timeSlots: [],
  },
  {
    day: "Tuesday",
    timeSlots: [],
  },
  {
    day: "Wednesday",
    timeSlots: [],
  },
  {
    day: "Thursday",
    timeSlots: [],
  },
  {
    day: "Friday",
    timeSlots: [],
  },
  {
    day: "Saturday",
    timeSlots: [],
  },
];
const dataSlot = [
  {
    day: "Monday",
    timeSlots: [{ startTime: "16.00.00.000Z", endTime: "16.30.00.000Z" }],
  },
  {
    day: "Tuesday",
    timeSlots: [],
  },
  {
    day: "Wednesday",
    timeSlots: [],
  },
  {
    day: "Thursday",
    timeSlots: [],
  },
  {
    day: "Friday",
    timeSlots: [],
  },
  {
    day: "Saturday",
    timeSlots: [],
  },
];

const createCourse = ({ isUpdate = false }) => {
  const navigate = useNavigate();
  const [form] = FormWrapper.useForm();
  const { token } = useSelector((state) => state.auth);
  const [isTeaching, setIsTeaching] = useState(false);
  const [course, setCourse] = useState("");
  const [data, setData] = useState({
    price: "",
    grade: "",
    slots: initialSlot,
  });
  const [mondaySlot, setMondaySlot] = useState({
    startTime: "",
    endTime: "",
  });
  const [tuesdaySlot, setTuesdaySlot] = useState({
    startTime: "",
    endTime: "",
  });
  const [wednesdaySlot, setWednesdaySlot] = useState({
    startTime: "",
    endTime: "",
  });
  const [thursdaySlot, setThursdaySlot] = useState({
    startTime: "",
    endTime: "",
  });
  const [fridaySlot, setFridaySlot] = useState({ startTime: "", endTime: "" });
  const [saturdaySlot, setSaturdaySlot] = useState({
    startTime: "",
    endTime: "",
  });
  const [sundaySlot, setSundaySlot] = useState({ startTime: "", endTime: "" });
  const params = useParams();
  const dispatch = useDispatch();

  // console.log("create-course params=>", params);
  useEffect(() => {
    if (!isUpdate) {
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
    } else {
      dispatch(setGlobalLoader(true));
      axios({
        url: config.SERVER_API + `teacher-course/${params?.id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setCourse(res?.data?.teacherCourses[0]?.course?.populatedCourses[0]);
          setIsTeaching(res?.data?.teacherCourses[0]?.course?.isTeaching);
          setData({
            ...data,
            price: res?.data?.teacherCourses[0]?.course?.price,
            slots: res?.data?.teacherCourses[0]?.course?.slots,
          });
          form.setFieldsValue({
            price: res?.data?.teacherCourses[0]?.course?.price,
          });
        })
        .finally(() => {
          dispatch(setGlobalLoader(false));
        });
    }
  }, [isUpdate]);

  const handleChange = (value, type, slot) => {
    if (slot === "Monday") {
      setMondaySlot({
        ...mondaySlot,
        [type]: ConvertIntoUTC(value),
      });
    } else if (slot === "Tuesday") {
      setTuesdaySlot({
        ...tuesdaySlot,
        [type]: ConvertIntoUTC(value),
      });
    } else if (slot === "Wednesday") {
      setWednesdaySlot({
        ...wednesdaySlot,
        [type]: ConvertIntoUTC(value),
      });
    } else if (slot === "Thursday") {
      setThursdaySlot({
        ...thursdaySlot,
        [type]: ConvertIntoUTC(value),
      });
    } else if (slot === "Friday") {
      setFridaySlot({
        ...fridaySlot,
        [type]: ConvertIntoUTC(value),
      });
    } else if (slot === "Saturday") {
      setSaturdaySlot({
        ...saturdaySlot,
        [type]: ConvertIntoUTC(value),
      });
    } else {
      setSundaySlot({
        ...sundaySlot,
        [type]: ConvertIntoUTC(value),
      });
    }
  };
  const AddSlot = (type) => {
    if (type === "Monday") {
      if (mondaySlot.startTime !== "" && mondaySlot.endTime !== "") {
        setData({
          ...data,
          slots: data.slots.map((item) =>
            item.day === type
              ? {
                  ...item,
                  timeSlots: [
                    ...item.timeSlots,
                    {
                      startTime: mondaySlot.startTime,
                      endTime: mondaySlot.endTime,
                    },
                  ],
                }
              : item
          ),
        });
        setMondaySlot({ startTime: "", endTime: "" });
      }
    } else if (type === "Tuesday") {
      if (tuesdaySlot.startTime !== "" && tuesdaySlot.endTime !== "") {
        setData({
          ...data,
          slots: data.slots.map((item) =>
            item.day === type
              ? {
                  ...item,
                  timeSlots: [
                    ...item.timeSlots,
                    {
                      startTime: tuesdaySlot.startTime,
                      endTime: tuesdaySlot.endTime,
                    },
                  ],
                }
              : item
          ),
        });
        setTuesdaySlot({ startTime: "", endTime: "" });
      }
    } else if (type === "Wednesday") {
      if (wednesdaySlot.startTime !== "" && wednesdaySlot.endTime !== "") {
        setData({
          ...data,
          slots: data.slots.map((item) =>
            item.day === type
              ? {
                  ...item,
                  timeSlots: [
                    ...item.timeSlots,
                    {
                      startTime: wednesdaySlot.startTime,
                      endTime: wednesdaySlot.endTime,
                    },
                  ],
                }
              : item
          ),
        });
        setWednesdaySlot({ startTime: "", endTime: "" });
      }
    } else if (type === "Thursday") {
      if (thursdaySlot.startTime !== "" && thursdaySlot.endTime !== "") {
        setData({
          ...data,
          slots: data.slots.map((item) =>
            item.day === type
              ? {
                  ...item,
                  timeSlots: [
                    ...item.timeSlots,
                    {
                      startTime: thursdaySlot.startTime,
                      endTime: thursdaySlot.endTime,
                    },
                  ],
                }
              : item
          ),
        });
        setThursdaySlot({ startTime: "", endTime: "" });
      }
    } else if (type === "Friday") {
      if (fridaySlot.startTime !== "" && fridaySlot.endTime !== "") {
        setData({
          ...data,
          slots: data.slots.map((item) =>
            item.day === type
              ? {
                  ...item,
                  timeSlots: [
                    ...item.timeSlots,
                    {
                      startTime: fridaySlot.startTime,
                      endTime: fridaySlot.endTime,
                    },
                  ],
                }
              : item
          ),
        });
        setFridaySlot({ startTime: "", endTime: "" });
      }
    } else if (type === "Saturday") {
      if (saturdaySlot.startTime !== "" && saturdaySlot.endTime !== "") {
        setData({
          ...data,
          slots: data.slots.map((item) =>
            item.day === type
              ? {
                  ...item,
                  timeSlots: [
                    ...item.timeSlots,
                    {
                      startTime: saturdaySlot.startTime,
                      endTime: saturdaySlot.endTime,
                    },
                  ],
                }
              : item
          ),
        });
        setSaturdaySlot({ startTime: "", endTime: "" });
      }
    } else {
      if (sundaySlot.startTime !== "" && sundaySlot.endTime !== "") {
        setData({
          ...data,
          slots: data.slots.map((item) =>
            item.day === type
              ? {
                  ...item,
                  timeSlots: [
                    ...item.timeSlots,
                    {
                      startTime: sundaySlot.startTime,
                      endTime: sundaySlot.endTime,
                    },
                  ],
                }
              : item
          ),
        });
        setSundaySlot({ startTime: "", endTime: "" });
      }
    }
  };
  const RemoveSlot = (type, timeIndex) => {
    setData({
      ...data,
      slots: data.slots.map((item) =>
        item.day === type
          ? {
              ...item,
              timeSlots: item.timeSlots.filter((_, ind) => ind !== timeIndex),
            }
          : item
      ),
    });
  };
// console.log("create update cours=?", data);
  const handleSubmit = () => {
    form.validateFields().then(async (res) => {
      if (res) {
        if (data?.grade <= 85) {
          toast.error("Grade is not enough to teach the course");
        } else {
          try {
            dispatch(setGlobalLoader(true));
            axios({
              url: config.SERVER_API + `teacher-Course`,
              method: "POST",
              headers: {
                authorization: `Bearer ${token}`,
              },
              data: { ...data, courseId: params.id },
            })
              .then(() => {
                toast.success("Teacher Added Course Successfully!");
                dispatch(setGlobalLoader(false));
              })
              .catch(() => {
                dispatch(setGlobalLoader(false));
              });
          } catch (err) {
            //
          }
        }
      }
    });
  };
  const handleUpdate = () => {
    form.validateFields().then(async (res) => {
      if (res) {
        dispatch(setGlobalLoader(true));
        axios({
          url: config.SERVER_API + `teacher-Course/update`,
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
          },
          data: { ...data, courseId: course._id },
        })
          .then(() => {
            toast.success("Teacher Course Updated Successfully!");
            dispatch(setGlobalLoader(false));
          })
          .catch(() => {
            dispatch(setGlobalLoader(false));
          });
      }
    });
  };
  const handleSwitch = (value) => {
    setIsTeaching(value);
    dispatch(setGlobalLoader(true));
    axios({
      url: config.SERVER_API + `teacher-Course/status`,
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: { teacherCourseId: params.id },
    })
      .then((res) => {
        toast.success("Teacher Status Change Successfully!");
        dispatch(setGlobalLoader(false));
        setCourse(res?.data?.teacherCourses[0]?.course?.populatedCourses[0]);
        setIsTeaching(res?.data?.teacherCourses[0]?.course?.isTeaching);
        setData({
          ...data,
          price: res?.data?.teacherCourses[0]?.course?.price,
          slots: res?.data?.teacherCourses[0]?.course?.slots,
        });
        form.setFieldsValue({
          price: res?.data?.teacherCourses[0]?.course?.price,
        });
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
        dispatch(setGlobalLoader(false));
      });
  };

  return (
    <Wrapper>
      <TextWrapper>{!isUpdate ? "Create Course" : "Update Course"}</TextWrapper>
      <Row justify={"space-between"}>
        <Col span={8}>
          <ImageProduct>
            <img src={config.SERVER_IMAGE_API + `${course?.image}`} />
          </ImageProduct>
          <CourseName>{course?.name}</CourseName>
          <Description>{course?.description}</Description>
          <Flex vertical gap={10}>
            {/* <Review value={rating} disabled /> */}
            {isUpdate &&  (<Button
              type="link"
              onClick={() => {
                navigate(`/teacher-feedback/${params.id}`);
              }}
            >
              View Feedback
            </Button>)}
          </Flex>
        </Col>
        <Col span={10}>
          <Flex gap="middle" vertical justify="center">
            <FormWrapper layout="vertical" form={form}>
              {isUpdate && (
                <Flex gap={15}>
                  <p>Status</p>
                  <Switch
                    checked={isTeaching}
                    onChange={(value) => handleSwitch(value)}
                  />
                </Flex>
              )}
              <InputNumber
                required
                message=" Price is Required!"
                placeholder="Enter your Price"
                label="Course Price ₪"
                name="price"
                min={0}
                max={100}
                value={data.price}
                onChange={(value) => setData({ ...data, price: value })}
                autoComplete="off"
              />
              {!isUpdate && (
                <InputNumber
                  required
                  message=" Grade is Required!"
                  placeholder="Enter your Grade"
                  label="Course Grade"
                  name="grade"
                  min={0}
                  max={100}
                  value={data.grade}
                  onChange={(value) => setData({ ...data, grade: value })}
                  autoComplete="off"
                />
              )}
              <Flex vertical gap={15}>
                {data?.slots.length > 0 &&
                  data.slots.map((item, index) => {
                    if(index===0){
                      return (
                        <Flex align={"center"} gap={15}>
                          <p style={{ marginBottom: 0, width: "100px" }}>
                            {item.day}
                          </p>
                          <Flex vertical gap={10}>
                            <Flex gap={10}>
                              <TimePicker
                                floatLabel
                                label="start Time"
                                isBorder
                                value={
                                  sundaySlot?.startTime !== "" &&
                                  ConvertToLocalDate(sundaySlot?.startTime)
                                }
                                onChange={(value) =>
                                  handleChange(value, "startTime", item.day)
                                }
                              />
                              <TimePicker
                                floatLabel
                                label="end Time"
                                isBorder
                                value={
                                  sundaySlot?.endTime !== "" &&
                                  ConvertToLocalDate(sundaySlot?.endTime)
                                }
                                onChange={(value) =>
                                  handleChange(value, "endTime", item.day)
                                }
                              />
                              <PlusCircleOutlined
                                style={{ color: "blue", cursor: "pointer" }}
                                onClick={() => {
                                  AddSlot(item.day);
                                }}
                              />
                            </Flex>
                            {/* map */}
                            <>
                              {item?.timeSlots.length > 0 &&
                                item?.timeSlots?.map((time, timeIndex) => (
                                  <Flex gap={10}>
                                    <TimePicker
                                      floatLabel
                                      label="start Time"
                                      isBorder
                                      value={
                                        time?.startTime !== "" &&
                                        ConvertToLocalDate(time?.startTime)
                                      }
                                      disabled
                                    />
                                    <TimePicker
                                      floatLabel
                                      label="end Time"
                                      isBorder
                                      disabled
                                      value={
                                        time?.endTime !== "" &&
                                        ConvertToLocalDate(time?.endTime)
                                      }
                                    />
                                    <MinusCircleOutlined
                                      style={{
                                        color: "red",
                                        cursor: "pointer",
                                      }}
                                      onClick={() => {
                                        RemoveSlot(item.day, timeIndex);
                                      }}
                                    />
                                  </Flex>
                                ))}
                            </>
                          </Flex>
                        </Flex>
                      );
                    }
                    else if (index === 1) {
                      return (
                        <Flex align={"center"} gap={15}>
                          <p style={{ marginBottom: 0, width: "100px" }}>
                            {item.day}
                          </p>
                          <Flex vertical gap={10}>
                            <Flex gap={10}>
                              <TimePicker
                                floatLabel
                                label="start Time"
                                isBorder
                                value={
                                  mondaySlot?.startTime !== "" &&
                                  ConvertToLocalDate(mondaySlot?.startTime)
                                }
                                onChange={(value) =>
                                  handleChange(value, "startTime", item.day)
                                }
                              />
                              <TimePicker
                                floatLabel
                                label="end Time"
                                isBorder
                                value={
                                  mondaySlot?.endTime !== "" &&
                                  ConvertToLocalDate(mondaySlot?.endTime)
                                }
                                onChange={(value) =>
                                  handleChange(value, "endTime", item.day)
                                }
                              />
                              <PlusCircleOutlined
                                style={{ color: "blue", cursor: "pointer" }}
                                onClick={() => {
                                  AddSlot(item.day);
                                }}
                              />
                            </Flex>
                            {/* map */}
                            <>
                              {item?.timeSlots.length > 0 &&
                                item?.timeSlots?.map((time, timeIndex) => (
                                  <Flex gap={10}>
                                    <TimePicker
                                      floatLabel
                                      label="start Time"
                                      isBorder
                                      value={
                                        time?.startTime !== "" &&
                                        ConvertToLocalDate(time?.startTime)
                                      }
                                      disabled
                                    />
                                    <TimePicker
                                      floatLabel
                                      label="end Time"
                                      isBorder
                                      disabled
                                      value={
                                        time?.endTime !== "" &&
                                        ConvertToLocalDate(time?.endTime)
                                      }
                                    />
                                    <MinusCircleOutlined
                                      style={{
                                        color: "red",
                                        cursor: "pointer",
                                      }}
                                      onClick={() => {
                                        RemoveSlot(item.day, timeIndex);
                                      }}
                                    />
                                  </Flex>
                                ))}
                            </>
                          </Flex>
                        </Flex>
                      );
                    } else if (index === 2) {
                      return (
                        <Flex align={"center"} gap={15}>
                          <p style={{ marginBottom: 0, width: "100px" }}>
                            {item.day}
                          </p>
                          <Flex vertical gap={10}>
                            <Flex gap={10}>
                              <TimePicker
                                floatLabel
                                label="start Time"
                                isBorder
                                value={
                                  tuesdaySlot?.startTime !== "" &&
                                  ConvertToLocalDate(tuesdaySlot?.startTime)
                                }
                                onChange={(value) =>
                                  handleChange(value, "startTime", item.day)
                                }
                              />
                              <TimePicker
                                floatLabel
                                label="end Time"
                                isBorder
                                value={
                                  tuesdaySlot?.endTime !== "" &&
                                  ConvertToLocalDate(tuesdaySlot?.endTime)
                                }
                                onChange={(value) =>
                                  handleChange(value, "endTime", item.day)
                                }
                              />
                              <PlusCircleOutlined
                                style={{ color: "blue", cursor: "pointer" }}
                                onClick={() => {
                                  AddSlot(item.day);
                                }}
                              />
                            </Flex>
                            {/* map */}
                            <>
                              {item?.timeSlots.length > 0 &&
                                item?.timeSlots?.map((time, timeIndex) => (
                                  <Flex gap={10}>
                                    <TimePicker
                                      floatLabel
                                      label="start Time"
                                      isBorder
                                      value={
                                        time?.startTime !== "" &&
                                        ConvertToLocalDate(time?.startTime)
                                      }
                                      disabled
                                    />
                                    <TimePicker
                                      floatLabel
                                      label="end Time"
                                      isBorder
                                      disabled
                                      value={
                                        time?.endTime !== "" &&
                                        ConvertToLocalDate(time?.endTime)
                                      }
                                    />
                                    <MinusCircleOutlined
                                      style={{
                                        color: "red",
                                        cursor: "pointer",
                                      }}
                                      onClick={() => {
                                        RemoveSlot(item.day, timeIndex);
                                      }}
                                    />
                                  </Flex>
                                ))}
                            </>
                          </Flex>
                        </Flex>
                      );
                    } else if (index === 3) {
                      return (
                        <Flex align={"center"} gap={15}>
                          <p style={{ marginBottom: 0, width: "100px" }}>
                            {item.day}
                          </p>
                          <Flex vertical gap={10}>
                            <Flex gap={10}>
                              <TimePicker
                                floatLabel
                                label="start Time"
                                isBorder
                                value={
                                  wednesdaySlot?.startTime !== "" &&
                                  ConvertToLocalDate(wednesdaySlot?.startTime)
                                }
                                onChange={(value) =>
                                  handleChange(value, "startTime", item.day)
                                }
                              />
                              <TimePicker
                                floatLabel
                                label="end Time"
                                isBorder
                                value={
                                  wednesdaySlot?.endTime !== "" &&
                                  ConvertToLocalDate(wednesdaySlot?.endTime)
                                }
                                onChange={(value) =>
                                  handleChange(value, "endTime", item.day)
                                }
                              />
                              <PlusCircleOutlined
                                style={{ color: "blue", cursor: "pointer" }}
                                onClick={() => {
                                  AddSlot(item.day);
                                }}
                              />
                            </Flex>
                            {/* map */}
                            <>
                              {item?.timeSlots.length > 0 &&
                                item?.timeSlots?.map((time, timeIndex) => (
                                  <Flex gap={10}>
                                    <TimePicker
                                      floatLabel
                                      label="start Time"
                                      isBorder
                                      value={
                                        time?.startTime !== "" &&
                                        ConvertToLocalDate(time?.startTime)
                                      }
                                      disabled
                                    />
                                    <TimePicker
                                      floatLabel
                                      label="end Time"
                                      isBorder
                                      disabled
                                      value={
                                        time?.endTime !== "" &&
                                        ConvertToLocalDate(time?.endTime)
                                      }
                                    />
                                    <MinusCircleOutlined
                                      style={{
                                        color: "red",
                                        cursor: "pointer",
                                      }}
                                      onClick={() => {
                                        RemoveSlot(item.day, timeIndex);
                                      }}
                                    />
                                  </Flex>
                                ))}
                            </>
                          </Flex>
                        </Flex>
                      );
                    } else if (index === 4) {
                      return (
                        <Flex align={"center"} gap={15}>
                          <p style={{ marginBottom: 0, width: "100px" }}>
                            {item.day}
                          </p>
                          <Flex vertical gap={10}>
                            <Flex gap={10}>
                              <TimePicker
                                floatLabel
                                label="start Time"
                                isBorder
                                value={
                                  thursdaySlot?.startTime !== "" &&
                                  ConvertToLocalDate(thursdaySlot?.startTime)
                                }
                                onChange={(value) =>
                                  handleChange(value, "startTime", item.day)
                                }
                              />
                              <TimePicker
                                floatLabel
                                label="end Time"
                                isBorder
                                value={
                                  thursdaySlot?.endTime !== "" &&
                                  ConvertToLocalDate(thursdaySlot?.endTime)
                                }
                                onChange={(value) =>
                                  handleChange(value, "endTime", item.day)
                                }
                              />
                              <PlusCircleOutlined
                                style={{ color: "blue", cursor: "pointer" }}
                                onClick={() => {
                                  AddSlot(item.day);
                                }}
                              />
                            </Flex>
                            {/* map */}
                            <>
                              {item?.timeSlots.length > 0 &&
                                item?.timeSlots?.map((time, timeIndex) => (
                                  <Flex gap={10}>
                                    <TimePicker
                                      floatLabel
                                      label="start Time"
                                      isBorder
                                      value={
                                        time?.startTime !== "" &&
                                        ConvertToLocalDate(time?.startTime)
                                      }
                                      disabled
                                    />
                                    <TimePicker
                                      floatLabel
                                      label="end Time"
                                      isBorder
                                      disabled
                                      value={
                                        time?.endTime !== "" &&
                                        ConvertToLocalDate(time?.endTime)
                                      }
                                    />
                                    <MinusCircleOutlined
                                      style={{
                                        color: "red",
                                        cursor: "pointer",
                                      }}
                                      onClick={() => {
                                        RemoveSlot(item.day, timeIndex);
                                      }}
                                    />
                                  </Flex>
                                ))}
                            </>
                          </Flex>
                        </Flex>
                      );
                    } else if (index === 5) {
                      return (
                        <Flex align={"center"} gap={15}>
                          <p style={{ marginBottom: 0, width: "100px" }}>
                            {item.day}
                          </p>
                          <Flex vertical gap={10}>
                            <Flex gap={10}>
                              <TimePicker
                                floatLabel
                                label="start Time"
                                isBorder
                                value={
                                  fridaySlot?.startTime !== "" &&
                                  ConvertToLocalDate(fridaySlot?.startTime)
                                }
                                onChange={(value) =>
                                  handleChange(value, "startTime", item.day)
                                }
                              />
                              <TimePicker
                                floatLabel
                                label="end Time"
                                isBorder
                                value={
                                  fridaySlot?.endTime !== "" &&
                                  ConvertToLocalDate(fridaySlot?.endTime)
                                }
                                onChange={(value) =>
                                  handleChange(value, "endTime", item.day)
                                }
                              />
                              <PlusCircleOutlined
                                style={{ color: "blue", cursor: "pointer" }}
                                onClick={() => {
                                  AddSlot(item.day);
                                }}
                              />
                            </Flex>
                            {/* map */}
                            <>
                              {item?.timeSlots.length > 0 &&
                                item?.timeSlots?.map((time, timeIndex) => (
                                  <Flex gap={10}>
                                    <TimePicker
                                      floatLabel
                                      label="start Time"
                                      isBorder
                                      value={
                                        time?.startTime !== "" &&
                                        ConvertToLocalDate(time?.startTime)
                                      }
                                      disabled
                                    />
                                    <TimePicker
                                      floatLabel
                                      label="end Time"
                                      isBorder
                                      disabled
                                      value={
                                        time?.endTime !== "" &&
                                        ConvertToLocalDate(time?.endTime)
                                      }
                                    />
                                    <MinusCircleOutlined
                                      style={{
                                        color: "red",
                                        cursor: "pointer",
                                      }}
                                      onClick={() => {
                                        RemoveSlot(item.day, timeIndex);
                                      }}
                                    />
                                  </Flex>
                                ))}
                            </>
                          </Flex>
                        </Flex>
                      );
                    } else {
                      return (
                        <Flex align={"center"} gap={15}>
                          <p style={{ marginBottom: 0, width: "100px" }}>
                            {item.day}
                          </p>
                          <Flex vertical gap={10}>
                            <Flex gap={10}>
                              <TimePicker
                                floatLabel
                                label="start Time"
                                isBorder
                                value={
                                  saturdaySlot?.startTime !== "" &&
                                  ConvertToLocalDate(saturdaySlot?.startTime)
                                }
                                onChange={(value) =>
                                  handleChange(value, "startTime", item.day)
                                }
                              />
                              <TimePicker
                                floatLabel
                                label="end Time"
                                isBorder
                                value={
                                  saturdaySlot?.endTime !== "" &&
                                  ConvertToLocalDate(saturdaySlot?.endTime)
                                }
                                onChange={(value) =>
                                  handleChange(value, "endTime", item.day)
                                }
                              />
                              <PlusCircleOutlined
                                style={{ color: "blue", cursor: "pointer" }}
                                onClick={() => {
                                  AddSlot(item.day);
                                }}
                              />
                            </Flex>
                            {/* map */}
                            <>
                              {item?.timeSlots.length > 0 &&
                                item?.timeSlots?.map((time, timeIndex) => (
                                  <Flex gap={10}>
                                    <TimePicker
                                      floatLabel
                                      label="start Time"
                                      isBorder
                                      value={
                                        time?.startTime !== "" &&
                                        ConvertToLocalDate(time?.startTime)
                                      }
                                      disabled
                                    />
                                    <TimePicker
                                      floatLabel
                                      label="end Time"
                                      isBorder
                                      disabled
                                      value={
                                        time?.endTime !== "" &&
                                        ConvertToLocalDate(time?.endTime)
                                      }
                                    />
                                    <MinusCircleOutlined
                                      style={{
                                        color: "red",
                                        cursor: "pointer",
                                      }}
                                      onClick={() => {
                                        RemoveSlot(item.day, timeIndex);
                                      }}
                                    />
                                  </Flex>
                                ))}
                            </>
                          </Flex>
                        </Flex>
                      );
                    } 
                  })}
              </Flex>
              <Button
                style={{ marginTop: "10px" }}
                type="primary"
                htmlType="button"
                onClick={isUpdate ? handleUpdate : handleSubmit}
              >
                {isUpdate ? "Update" : "Submit"}
              </Button>
            </FormWrapper>
          </Flex>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default createCourse;
