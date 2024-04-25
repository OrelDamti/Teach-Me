import React, { useEffect } from "react";
import {
  CourseName,
  Description,
  FormWrapper,
  ImageProduct,
  ReviewWrapper,
  Text,
  TextWrapper,
  Wrapper,
} from "./styles";
import { Col, Flex, Row } from "antd";
import {
  Button,
  CustomSelect,
  CustomTextArea,
  LinkButton,
  Review,
} from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalLoader } from "../../store/slices/globalLoader";
import { useState } from "react";
import axios from "axios";
import { ConvertToLocal } from "../../helpers/time";
import { toast } from "react-toastify";
import config from "../../../services/config";

const Schedule = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const params = useParams();
  const [form] = FormWrapper.useForm();
  const [course, setCourse] = useState("");
  const [data, setData] = useState("");
  const [availSlot, setAvailSlot] = useState("");
  const [review, setReview] = useState({ rating: "", comment: "" });
  const [rating, setRating] = useState("");
  const handleSubmit = () => {
    if (availSlot !== "") {
      dispatch(setGlobalLoader(true));
      axios({
        url: config.SERVER_API + `enroll-Course`,
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: {
          slotId: availSlot,
          teacherCourseId: params.id,
        },
      })
        .then(() => {
          toast.success("Schedule Course Successful!");
          navigate("/");
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        })
        .finally(() => {
          dispatch(setGlobalLoader(false));
        });
    }
  };
  useEffect(() => {
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
        setRating(res?.data?.teacherCourses[0]?.averageRating);
        setData({
          ...data,
          slots: res?.data?.teacherCourses[0]?.course?.slots?.flatMap((item) =>
            item?.timeSlots?.map((slot) => ({
              label: `${item?.day}, ${ConvertToLocal(
                slot?.startTime
              )} - ${ConvertToLocal(slot?.endTime)}`,
              value: slot?._id,
            }))
          ),
        });
      })
      .finally(() => {
        dispatch(setGlobalLoader(false));
      });
  }, []);

  const reviewHandler = () => {
    if (review.comment !== "" && review.rating !== "") {
      dispatch(setGlobalLoader(true));
      axios({
        url: config.SERVER_API + `review-Course`,
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: {
          teacherCourseId: params.id,
          rating: review.rating,
          comment: review.comment,
        },
      })
        .then(() => {
          toast.success("Teacher Course Review Added Successful!");
          setReview({ rating: "", comment: "" });
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
      <TextWrapper>Schedule Course</TextWrapper>
      <Row justify={"space-between"}>
        <Col span={8}>
          <ImageProduct>
            <img src={config.SERVER_IMAGE_API + `${course?.image}`} />
          </ImageProduct>
          <CourseName>{course?.name}</CourseName>
          <Description>{course?.description}</Description>
          <Flex vertical gap={10}>
            <Review value={rating} disabled />
            <Button
              type="link"
              onClick={() => {
                navigate(`/feedback/${params.id}`);
              }}
            >
              View Feedback
            </Button>
          </Flex>
        </Col>
        <Col span={10}>
          <Flex gap="middle" vertical justify="center">
            <FormWrapper layout="vertical">
              <CustomSelect
                label="Available Slots"
                placeholder={"Select your slot"}
                options={data?.slots}
                onChange={(value) => setAvailSlot(value)}
                value={availSlot}
              />
              <Button
                style={{ marginTop: "10px" }}
                type="primary"
                htmlType="button"
                onClick={handleSubmit}
              >
                Create Schedule
              </Button>
            </FormWrapper>
          </Flex>
          <ReviewWrapper vertical gap={15}>
            <Text>Add Review</Text>
            <Review
              value={review?.rating}
              onChange={(value) => setReview({ ...review, rating: value })}
            />
            <CustomTextArea
              placeholder="Enter your Comment"
              style={{ minHeight: "79px !important" }}
              minRow={3}
              maxRow={0}
              bgTransparent
              value={review?.comment}
              onChange={(event) =>
                setReview({ ...review, comment: event.target.value })
              }
              label="Comment"
              autoComplete="off"
            />
            <Button
              type="primary"
              style={{ width: 100 }}
              onClick={reviewHandler}
            >
              Submit Review
            </Button>
          </ReviewWrapper>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Schedule;
