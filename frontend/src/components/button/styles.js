import styled from 'styled-components'
import { Button } from 'antd'

export const ButtonVariant = styled(Button)(
  (props) => `
 &.ant-btn{
    text-align: left;
    border-radius: 0;
    min-width: 150px;
 }
&.ant-btn-default {
  background-color: ${props.theme.white};
  border: 1px solid ${props.theme.blue3};
  color: ${props.theme.blue3};
  padding: 0 12px;
  &:hover {
    color: ${props.theme.blue3};
    border-color: ${props.theme.blue3};
  }
}
&.ant-btn-primary {
  padding: 0 12px;
  &:disabled{
    background-color: #c6c6c6;
    border-color: transparent;
    >span{
      background-color: transparent;
      color: white;
    }
  }
}
&.ant-btn-text {
    min-width:auto;
    font-weight: 600;
    text-align: center;
    padding: 0;
    color:${props.theme.blue4};
    &:hover {
      color: ${props.theme.blue4} !important;
      background-color: transparent !important;
    }
}
`
)
