import { Form, Input } from "antd";
import styled from "styled-components";

export const FormItem = styled(Form.Item)(
  (props) => `
  margin-bottom: ${props.isTable && "0px"};
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
    .ant-form-item-explain-error::before{
      display: none;
    }

    .ant-form-item-explain-error::before {
      margin-inline-end: 0;
      color: ${props.theme.colorError};
      font-size: 14px;
      font-family: anticon;
      line-height: 1;
      content: "";
      font-weight: 900;
      background-repeat: no-repeat;
      width: 14px;
      height: 14px;
    }
  `
);

export const InputField = styled(Input)(
  (props) => `
    border-width: 2px !important;
    font-size: 14px;
    // line-height: 1.572;
    letter-spacing: 0.4px;
    padding: 7px 10px;
    box-sizing: border-box;
    height: ${props?.isTable ? "32px " : "40px "} ;
    border-color: ${props?.isTable && "transparent"};
    color: #152935 !important;
    

    &:focus{
      outline: none !important;
      box-shadow:none !important;
      border-width:2px !important;
    }
    &::placeholder{
      color: ${props?.isTable && "#5a6872d1"};
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

    &.text-field-suffix.ant-input-affix-wrapper-focused.ant-input-affix-wrapper-status-success{
      background-color: ${props.theme.colorSuccessBg} !important;
      border-width:2px !important;
      border:2px solid rgb(15, 98, 254) !important

      &:hover {
        border-color: ${props.theme.colorPrimary} !important;
      }

      input {
        background-color: transparent !important;
        border: none;
      }
    }


    &.text-field-suffix.ant-input-affix-wrapper.ant-input-affix-wrapper-status-error{
      background-color: ${props.theme.colorErrorBg} !important;
      border-width:2px !important;
  
      &:hover {
        border-color: ${props.theme.colorError} !important;
      }
  
      &::placeholder {
        color: ${props.theme.colorError} !important
      }

      input {
        background-color: transparent !important;
        border: none;
      }
    }

  
    
  `
);

export const PasswordField = styled(Input.Password)(
  (props) => `
    border-width: 2px !important;
    font-size: 14px;
    line-height: 1.572;
    letter-spacing: 0.03333em;
    padding: 7px 10px 7px 12px;
    height: 40px;
    &.ant-input-affix-wrapper >input.ant-input{
      color: #152934 !important;
    }

    &.ant-input-affix-wrapper-focused {
      outline: none !important;
      box-shadow: none !important;

      &.ant-input-affix-wrapper-status-success {
        background-color: ${props.theme.colorSuccessBg} !important;
      }
    }
    &.ant-input-status-error {
      background-color: ${props.theme.colorErrorBg} !important;
      color: ${props.theme.colorErrorBg} !important;
      border-width:2px !important;
  
      &:hover {
        border-color: ${props.theme.colorError} !important;
      }
  
      input{
        &::placeholder {
          color: ${props.theme.colorError} !important
        }
      }
    
    }
    input {
      background-color: transparent !important;
    }
  
   
   
  
    &.ant-input-affix-wrapper-status-error {
      background-color: ${props.theme.colorErrorBg} !important;
     
      &:hover {
      border-color: ${props.theme.colorError} !important;
      }
      input{
        &::placeholder {
          color: ${props.theme.colorError} !important
        }
      }
      
    }
  
  `
);
