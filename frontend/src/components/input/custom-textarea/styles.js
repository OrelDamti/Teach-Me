import { Form, Input } from "antd";
import styled from "styled-components";
const { TextArea } = Input;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  position: absolute;
  top: ${({ focused }) => (focused ? "0" : "10px")};
  left: 8px;
  color: ${({ focused }) => (focused ? "#152934" : "#999")};
  transition: all 0.2s ease-out;
  pointer-events: none;
  padding: 0 8px;
  font-size: ${({ focused }) => (focused ? "10px !important" : "14px")};
  background-color: ${({ focused }) => (focused ? "#ffffff" : "transparent")};
  // backdrop-filter: ${({ focused }) => (focused ? "blur(0px)" : "none")};
  z-index: 10;
  font-weight: 600;
  height: 2px;
  line-height: 0.2;
`;

export const FormItem = styled(Form.Item)(
  (props) => `

  position: relative;
  width: 100%;
  margin-bottom: 8px;
  .ant-form-item-label {
    label {
        font-weight: bolder;
        line-height: 1.66;
    }
    .ant-form-item-required {
        &::before {
            display: none !important;
            content: '' !important;
        }
    }
}
    

    .ant-form-item-explain-error {
      color: ${props.theme.colorError} !important; 
      margin-top: 3px;
      line-height: 1.66;
      letter-spacing: 0.03333em;
      display: flex;
      align-items: center;
      gap:3px;
    }

    .ant-form-item-explain-error::before {
        display:none;
    }
  `
);

export const InputField = styled(TextArea)(
  (props) => `
    border-width: 1px !important;
    font-size: 14px;
    line-height: 1.572;
    letter-spacing: 0.03333em;
    padding: 7px 10px;
    box-sizing: border-box !important;
    height: 40px;
    background-color: ${props.bgTransparent ? "transparent" : "#f4f7fb"};
    &:focus {
      outline: none !important;
      box-shadow:none !important;
      border-width:2px !important;
      background-color: rgb(219, 227, 238) !important;
    }

    &::placeholder {
      color: #888;
    }

    &.ant-input-status-success {
      &:focus {
        background-color: ${props.theme.colorSuccessBg} !important;
      }
      &:hover {
        border-color: ${props.theme.colorPrimary} !important;
      }
    }
    
    &.ant-input-status-error {
      background-color: ${props.theme.colorErrorBg} !important;
      border-width:2px !important;
      
      &:hover {
        border-color: ${props.theme.colorError} !important;
      }
  
      &::placeholder {
        color: ${props.theme.colorError} !important
      }
    
    }
  
    
  `
);
