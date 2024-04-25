import { theme } from "antd";
import { FormItem, CustomNumber, Wrapper } from "./styles";

const InputNumber = ({
  floatLabel,
  value,
  type,
  message,
  label,
  placeholder,
  name,
  suffix,
  styleFormItem,
  style,
  isBorder,
  disabled,
  required,
  ...rest
}) => {
  const { useToken } = theme;
  const { token } = useToken();

  const rules = [
    {
      required: required || false,
      message: message,
    },
  ];


  const handleKeyPress = (event) => {
    const keyCode = event.which || event.keyCode;
    if (keyCode < 48 || keyCode > 57) {
      event.preventDefault(); // Prevent input of non-numeric characters
    }
  };
  return (
    <Wrapper>
      <FormItem
        label={label}
        name={name}
        rules={rules}
        style={{ ...styleFormItem }}
      >
        <CustomNumber
          onkeyPress={handleKeyPress}
          value={value}
          disabled={disabled}
          name={name}
          isBorder={isBorder}
          theme={token}
          size="large"
          placeholder={placeholder}
          style={{
            color: token.colorTextHeading,
            borderRadius: "0",
            ...style,
          }}
          suffix={suffix}
          {...rest}
        />
      </FormItem>
    </Wrapper>
  );
};

export default InputNumber;
