import styled from "styled-components";
import { Form, Typography } from "antd";
import { Button } from "../../../components";

export const Title = styled(Typography.Title)`
  color: rgba(0, 0, 0, 0.85) !important;
  font-family: "system-ui";
  font-weight: bolder !important;
  margin-top: 30px;
  margin-bottom: 30px !important;
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
  margin-top: 2.4rem;
  max-width: 400px;
  min-width: 300px;
  & > :first-child {
    margin-bottom: 3.65rem !important;
  }

  & > :nth-child(2) {
    margin-bottom: 3.8rem !important;
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
