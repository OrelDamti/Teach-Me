import { theme } from "antd";
import { ButtonVariant } from "./styles";

const Button = ({ children, style, ...rest }) => {
  const { useToken } = theme;
  const { token } = useToken();
  return (
    <ButtonVariant
      theme={token}
      size="small"
      style={{
        height: token.controlHeightLG,
        ...style,
      }}
      {...rest}
    >
      {children}
    </ButtonVariant>
  );
};

export default Button;
