import { Flex } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../../components";
import { setGlobalLoader } from "../../../store/slices/globalLoader";
import { TextWrapper, Wrapper } from "./styles";
import config from "../../../../services/config";

const TeacherCourses = ({ isUpdate = false }) => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    dispatch(setGlobalLoader(true));
    axios({
      url: config.SERVER_API + "teacher-course",
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setCourses(res?.data?.teacherCourses);
      })
      .finally(() => {
        dispatch(setGlobalLoader(false));
      });
  }, []);
  // console.log("courses", courses);
  return (
    <Wrapper>
      <TextWrapper>Teacher Courses</TextWrapper>
      <Flex wrap="wrap" gap="20px" style={{ rowGap: "40px" }}>
        {courses?.length > 0 &&
          courses?.map((course) => {
            return course?.course?.populatedCourses?.map((item) => (
              <Card
                key={item._id}
                item={item}
                isUpdate={isUpdate}
                _id={course?.course?._id}
              />
            ));
          })}
      </Flex>
    </Wrapper>
  );
};

export default TeacherCourses;
