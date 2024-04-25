import { Form, InputNumber } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const FormItem = styled(Form.Item)(
  (props) => `
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
        display: none;
      }
    `
);

export const CustomNumber = styled(InputNumber)(
  (props) => `

  &.ant-input-number-disabled{
    cursor: default;
    background-color:transparent;
  }
    border-width: 2px !important;
    font-size: 14px;
    line-height: 1.572;
    letter-spacing: 0.03333em;
    width: 100%;
    box-sizing: border-box !important;
    height: "42px !important";
    .ant-input-number-handler-wrap{
      display: none;
    }
    .ant-input-number-input-wrap{
        height: 42px;
        .ant-input-number-input{
            height: 42px;
        }
      }
    &:focus {
      outline: none !important;
      box-shadow:none !important;
      border-width:2px !important;
      height: "42px !important" ;
      background-color: ${
        props.isBorder
          ? `${props.theme.colorSuccessBg} !important`
          : "transparent !important"
      };
    }
    .ant-input-number-input{
      &::placeholder {
        color: #5a6872d1 !important;
      }
    }
   

    &.ant-input-number-focused {
      box-shadow:none;
      .ant-input-number{
        background-color: ${
          props.isBorder
            ? `${props.theme.colorSuccessBg} !important`
            : "transparent !important"
        };
        border-width:${props.isBorder ? "2px !important" : "none !important"};
      }
      .ant-input-number-handler-wrap{
        display: none;
      }
      .ant-input-number-input{
        height: 42px !important;
      }
      background-color: ${
        props.isBorder
          ? `${props.theme.colorSuccessBg} !important`
          : "transparent !important"
      };
      border-width:${props.isBorder ? "2px !important" : "none !important"};
    }
    
    &::placeholder {
      color: #888;
    }

    &.ant-input-number-status-success {
      &:focus {
        background-color: ${props.theme.colorSuccessBg} !important;
        border-inline-end-width: 0;
        box-shadow:none !important;
      }
      &:hover {
        border-color: ${props.theme.colorPrimary} !important;
        border-inline-end-width: 0;
      }
    }
    
    &.ant-input-number-status-error {
      background-color: ${props.theme.colorErrorBg} !important;
      border-width:2px !important;
      box-shadow:none !important;
      &:hover {
        border-color: ${props.theme.colorError} !important;
        border-inline-end-width: 0;
      }
      &:focus{
        border-inline-end-width: 0;
      }
  
      .ant-input-number-input{
        &::placeholder {
          color: ${props.theme.colorError} !important
        }
      }
    }
  `
);
