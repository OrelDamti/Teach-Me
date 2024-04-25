import { CSSProperties, useRef, useState, useEffect } from 'react'
import { Form, theme } from 'antd'
import { TimePicker as TimePickerantd } from 'antd'
import { Label, Wrapper } from './styles'


const TimePicker = ({
  floatLabel,
  styleFormItem,
  style,
  value,
  name,
  label,
  defaultValue,
  message,
  allowClear,
  required,
  status,
  disabled,
  isTable,
  onChange,
  onSelect,
  clearText,
  fullWidth,
  suffixIcon,
  isBorder,
  borderBottomOnly,
  ...rest
})=> {
  const [focused, setFocused] = useState(false)
  const { useToken } = theme
  const { token } = useToken()
  const inputRef = useRef(null)
  const rules = [
    {
      required: required || false,
      message: message
    }
  ]
  const handleFocus = () => {
    setFocused(true)
  }
  const handleBlur = () => {
    if (value === '') {
      setFocused(false)
    }
  }

  useEffect(() => {
    if (value !== undefined && value !== null && value !== '') {
      setFocused(true)
    } else {
      setFocused(false)
    }
  }, [value])

  return (
    <Wrapper
      borderBottomOnly={borderBottomOnly}
      fullWidth={fullWidth}
      theme={token}
      focused={focused}
      isTable={isTable}
      isBorder={isBorder}
    >
      {floatLabel && <Label focused={focused}>{focused ? label : ''}</Label>}
      <Form.Item name={name} rules={rules} style={{ ...styleFormItem }}>
        <TimePickerantd
          onFocus={handleFocus}
          onBlur={handleBlur}
          use12Hours
          format='h:mm:A'
          placeholder={focused && floatLabel ? '' : label}
          ref={inputRef}
          status={status}
          value={value}
          allowClear={allowClear}
          disabled={disabled}
          suffixIcon={suffixIcon || false}
          showNow={false}
          defaultValue={defaultValue}
          onChange={onChange}
          onSelect={onSelect}
          minuteStep={15}
          popupClassName='Time-picker'
          style={{
            ...style
          }}
          {...rest}
        />
      </Form.Item>
    </Wrapper>
  )
}
export default TimePicker
