import { Flex } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 70px;
  height: 100%;
  padding: 0 30px;
  padding-top: 100px;
  width: 95%;
  margin: 0 auto;
`;

export const ImageProduct = styled.div`
  height: 400px;
  width: 450px;
  img {
    height: 100%;
    width: 100%;
  }
`;

export const CourseName = styled.h1`
  font-weight: 600;
  letter-spacing: 1px;
`;

export const Description = styled.h2`
  font-weight: 500;
  letter-spacing: 1px;
`;

export const Text = styled.h2`
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0;
`;

export const ReviewWrapper = styled(Flex)`
  width: 450px;
  padding-top: 30px;
`;
