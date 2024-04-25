import { Flex, Form } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 70px;
  height: 100%;
  padding: 0 30px;
  padding-top: 70px;
  width: 95%;
  margin: 0 auto;
`;

export const TextWrapper = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  padding-bottom: 10px;
`;

export const ImageProduct = styled.div`
  height: 200px;
  width: 250px;
  img {
    height: 100%;
    width: 100%;
  }
`;
export const FormWrapper = styled(Form)`
  max-width: 400px;
  min-width: 300px;
`;


export const CourseName = styled.h2`
  padding-top: 30px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const Description = styled.h5`
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