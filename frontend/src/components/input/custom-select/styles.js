import { Form } from "antd";
import styled from "styled-components";

export const Wrapper = styled("div")((props) => {
  return `
  position: relative;
  width: 100%;
  background-color: white;
  max-width:"100%";
  min-width: 60px;
  min-height: 18px;
  height: "100%";
  cursor: pointer;

  .ant-select-selector {
    height: "40px !important" ;
    border-radius: 0 !important;
    box-shadow: none !important;
    border: "1px solid" ;
    color: #152935;
    background-color: transparent !important;
    font-size: 14px;
    .ant-select-selection-item {
      font-size: 14px !important;
    }
      &:hover{
          border:  2px solid${props.theme.colorPrimary} !important;
      }
  }

  .ant-select-selection-search-input {
    height: "38px" ;
  }

  .ant-select-selection-placeholder {
    color: #5a6872d1;
    font-size: 14px;
    line-height: "38px";
  }

  .ant-select-disabled .ant-select-selection-placeholder{
    color: rgb(142 136 136)  !important;
  }

  .ant-select .ant-select-arrow {
    transition: transform .1s ease-in;
    font-size: 14px;
  }
  .ant-select.ant-select-open .ant-select-arrow {
    transform: rotate(180deg);
    font-size: 14px;
  }

  .ant-select-arrow svg {
    width: 16px;
    height: 16px;
    filter: opacity(0.7);
    
  }

  .ant-select-clear {
    margin-right: 20px !important;
  }
  
  .ant-select-clear svg{
   fill: #5a6872d1;
  }

  .ant-select-focused {
    background-color: ${props.theme.colorSuccessBg};
    border: 2px solid ${props.theme.colorPrimary};
    height:  "40px !important" ;

    .ant-select-selector {
      border: none !important;
    }

  }

 .ant-form-item {
  position: relative;
  width: 100%;
  margin-bottom: "10px";
    
    .ant-form-item-explain-error {
      color: ${props.theme.colorError} !important; 
      margin-top: 3px;
      letter-spacing: 0.03333em;
      display: flex;
      align-items: center;
      gap:3px;
    }

    .ant-form-item-explain-error::before {
      display: none
    }
 }


 .ant-select-selector input {
    height: '38px'
  }
  .ant-select-single.ant-select-lg.ant-select-open .ant-select-selection-item {
    color: rgba(90,104,114,.8196078431);
    line-height: '38px'
  }

  .ant-select-single.ant-select-lg .ant-select-selector .ant-select-selection-item {
    line-height: '38px'
  }

      .ant-select-status-success {
        &.ant-select-focused {
          background-color: ${props.theme.colorSuccessBg};
          border: 2px solid ${props.theme.colorPrimary};
        }
        &:hover {
          border-color: ${props.theme.colorPrimary} !important;
        }
        
      }
    

    .ant-select-status-error {
      height: '40px !important' ;
      background-color: ${props.theme.colorErrorBg} !important;
      

      &.ant-select-focused {
        background-color: ${props.theme.colorSuccessBg};
        border: 2px solid ${props.theme.colorError};
      }
      &:hover{
        .ant-select-selector{
          border-color: ${props.theme.colorError};
        }
      }
      .ant-select-selector{
        border: 2px solid ${props.theme.colorError};
      }
     

      &::placeholder {
        color: ${props.theme.colorError} !important
      }

      .ant-select-selection-placeholder{
        color: ${props.theme.colorError} !important
      }

    }

`;
});

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
