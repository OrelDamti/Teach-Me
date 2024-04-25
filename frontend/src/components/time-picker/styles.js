import styled from "styled-components";

export const TimePickerantd = styled("div")`
  &.ant-picker {
    padding-left: 16px;
    padding-right: 16px;
    height: 40px !important;
    border: none;
    width: 100%;
    border-bottom: 1px solid #8d8d8d;
    border-radius: 0 !important;
    .ant-picker-input > input {
      color: #152935;
    }
    .ant-picker-input > input::placeholder {
      color: #5a6872d1;
    }
  }
  &.ant-picker-focused {
    height: 34px !important;
    padding: 6px 12x !important;
    border-bottom: 0px solid transparent !important;
    width: 280px;
    border-radius: 0;
    border-top-right-radius: 4px !important;
    border-top-left-radius: 4px !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border-color: transparent !important;
    position: absolute;
    z-index: 1050;
    .ant-picker-input {
      .ant-picker-suffix {
        display: none;
      }
    }
  }
`;
export const Label = styled.label`
  position: absolute;
  top: ${({ focused }) => (focused ? "-6px" : "10px")};
  left: 8px;
  color: ${({ focused }) => (focused ? "#152934" : "#999")};
  transition: all 0.2s ease-out;
  pointer-events: none;
  padding: 0 8px;
  font-size: ${({ focused }) => (focused ? "10px !important" : "14px")};
  background-color: ${({ focused }) => (focused ? "#ffffffcf" : "transparent")};
  backdrop-filter: ${({ focused }) => (focused ? "blur(0px)" : "none")};
  z-index: 10;
  font-weight: 600;
  height: 9px;
  line-height: 1.5;
`;
export const Wrapper = styled("div")(
  (props) =>
    `
    position: relative;
    width: 100%;
    margin-bottom: 0px;
    .ant-form-item {
      margin-bottom: 0px !important;
    }
    .ant-form-item-control-input {
      min-height: auto;
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
        margin-inline-end: 0;
        display: none;
      }
     
      .ant-picker-status-success {
        background-color: ${props.theme.colorSuccessBg} !important;
          border: 2px solid ${props.theme.colorPrimary} !important;
          &:hover {
            border-color: ${props.theme.colorPrimary} !important;
          }
        &.ant-picker-focused {
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px !important;
        border-top-right-radius: 4px !important;
        border-top-left-radius: 4px !important;
        &:hover{
          border-color: transparent !important;
        }
        }
       
      }
      .ant-picker{
        width:100%;
        height: ${props?.isTable ? "32px !important" : "40px !important"};
        height: ${props?.isBorder && "42px !important"};
      border: ${
        props?.isBorder
          ? "1px solid #d6d6d6 !important"
          : "transparent !important"
      } ;
      border-bottom: ${
        props.borderBottomOnly && "1px solid #8d8d8d !important"
      };

        border-radius: 0px !important;
        background-color: #fff;
        .ant-picker-input input::placeholder{
          color: #5a6872d1;
        }
        border: none;
        &.ant-picker-focused {
    width: ${props.fullWidth ? "100%" : "168px !important"};
          background-color: ${props.theme.colorSuccessBg} !important;
          border: 2px solid ${props.theme.colorPrimary} !important;
        }
      }
     
    .ant-picker-status-error {
      background-color: #fde5e5 !important;
      border: 2px solid rgb(218, 30, 40) !important;
      &:hover {
        border-color: ${props.theme.colorError} !important;
      }

      &::placeholder {
        color: ${props.theme.colorError} !important
      }
      .ant-picker-placeholder{
        color: ${props.theme.colorError} !important
      }
      .ant-picker-input input::placeholder{
        color: #e64548;
      }
    }
    .ant-picker-status-error {
      &.ant-picker-focused{
        position:inherit !important;
        z-index: 0 !important;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px !important;
        background-color: ${props.theme.colorSuccessBg} !important;
        border: 2px solid ${props.theme.colorPrimary} !important;  
        .ant-picker-input input::placeholder{
          color: #5a6872d1;
        }
        &:hover{
          border-color: transparent !important;
        }
      }
    }
`
);
