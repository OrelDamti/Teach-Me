import { Flex } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components";
import { setGlobalLoader } from "../../store/slices/globalLoader";
import { TextWrapper, Wrapper } from "./styles";
import config from "../../../services/config";
const Course = ({ isTeacher = false }) => {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  const [filterCourses, setfilterCourses] = useState([]);
  const { searchText } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setGlobalLoader(true));
    axios({
      url: config.SERVER_API + "courses",
      method: "GET",
    })
      .then((res) => {
        setCourses(res.data);
        setfilterCourses(res.data);
      })
      .finally(() => {
        dispatch(setGlobalLoader(false));
      });
  }, []);
  useEffect(() => {
    if (courses.length > 0) {
      const filterCourse = courses.slice();
      const filteredItem = filterCourse.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setfilterCourses(filteredItem);
    }
  }, [searchText]);
  return (
    <Wrapper>
      <TextWrapper>Our Courses</TextWrapper>
      <Flex wrap="wrap" gap="20px" style={{ rowGap: "40px" }}>
        {Object.keys(filterCourses).length > 0 &&
          filterCourses.map((item) => (
            <Card key={item._id} item={item} isTeacher={isTeacher} />
          ))}
      </Flex>
    </Wrapper>
  );
};

export default Course;
