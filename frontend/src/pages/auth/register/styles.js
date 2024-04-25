import styled from "styled-components";
import { Form, Typography } from "antd";
import { Button } from "../../../components";

export const Title = styled(Typography.Title)`
  color: rgba(0, 0, 0, 0.85) !important;
  font-family: "system-ui";
  font-weight: bolder !important;
  margin-top: 10px;
  margin-bottom: 10px !important;
`;
export const Image = styled.img`
  height: 200px;
  width: 200px;
`;

export const Description = styled(Typography.Text)`
  margin-bottom: 30px !important;
  color: #152935;
`;
export const MessageContainer = styled("div")`
  margin-top: 40px !important;
  margin-bottom: 40px;
  background-color: tomato;
  width: 100%;
`;

export const LoginForm = styled(Form)`
  max-width: 400px;
  min-width: 300px;
  .ant-form-item {
    margin-bottom: 0;
    .ant-form-item-row {
      margin-bottom: 5px;
    }
  }
`;

export const SubmitButton = styled(Button)`
  margin-bottom: 1.2rem;
  text-align: center !important;
  border-radius: 4px !important;
  span {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif !important;
  }
`;

export const Text = styled.div`
  font-weight: 300;
  line-height: 1.66;
  letter-spacing: 0.06px;
  a {
    font-weight: 400;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
export const LinkBox = styled.div`
  margin-top: 1rem;
  line-height: 1.66;
  a {
    font-weight: 400;
  }
`;
