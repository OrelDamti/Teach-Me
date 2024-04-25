import { Select, theme } from "antd";
import { FormItem, Wrapper } from "./styles";

const CustomSelect = ({
  message,
  name,
  value,
  label,
  styleFormItem,
  style,
  placeholder,
  showSearch,
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

  return (
    <Wrapper theme={token}>
      <FormItem
        name={name}
        rules={rules}
        label={label}
        style={{ ...styleFormItem }}
      >
        <Select
          value={value}
          placeholder={placeholder}
          theme={token}
          size="large"
          showSearch={showSearch}
          allowClear={showSearch}
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          style={{
            ...style,
          }}
          popupClassName="custome-popup"
          {...rest}
        />
      </FormItem>
    </Wrapper>
  );
};

export default CustomSelect;
