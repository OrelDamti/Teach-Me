import { Form } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 90%;
  margin : 0 auto;
  margin-top: 75px;
  padding-bottom: 50px;
`;
export const LoginForm = styled(Form)`
  margin-top: 2.4rem;
  max-width: 400px;
  min-width: 300px;
`;

export const Image = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
`;