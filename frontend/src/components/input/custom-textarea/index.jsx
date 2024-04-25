import { useEffect, useState } from "react";
import { theme } from "antd";
import { FormItem, InputField, Label, Wrapper } from "./styles";

const CustomTextArea = ({
  value,
  message,
  label,
  name,
  styleFormItem,
  style,
  disabled,
  required,
  minRow,
  maxRow,
  bgTransparent,
  rows,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);

  const { useToken } = theme;
  const { token } = useToken();

  const rules = [
    {
      required: required || false,
      message: message,
    },
  ];

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (value === "" || value === undefined) {
      setFocused(false);
    }
  };

  useEffect(() => {
    if (value) {
      setFocused(true);
    }
  }, []);

  return (
    <Wrapper>
      <FormItem
        label={label}
        name={name}
        rules={rules}
        style={{ ...styleFormItem }}
      >
        <InputField
          onFocus={handleFocus}
          onBlur={handleBlur}
          focused={focused}
          rows={rows}
          autoSize={{ minRows: minRow, maxRows: maxRow }}
          disabled={disabled}
          value={value}
          name={name}
          theme={token}
          bgTransparent={bgTransparent}
          placeholder={focused ? "" : label}
          style={{
            color: token.colorTextHeading,
            borderRadius: "0",
            ...style,
          }}
          {...rest}
        />
      </FormItem>
    </Wrapper>
  );
};

export default CustomTextArea;
