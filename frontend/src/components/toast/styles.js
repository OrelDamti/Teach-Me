import styled from 'styled-components'

export const ToastWrapper = styled.div(
  (props) =>
    `&.error{
        border-left: 10px solid ${props.theme.colorError};
    }
    &.info{
        border-left: 10px solid ${props.theme.colorPrimary};
    }
    &.success{
        border-left: 10px solid ${props.theme.colorSuccess};
    }
    &.failed{
      border: 1px solid #fa4d56;
      border-left: 10px solid #fa4d56;
    }
    margin: 0 auto 30px;
    width: 100%;
    height: 100%;
    margin: 0 auto 2.5rem 0;
    background-color: #f8f8f8;
    line-height:1.5;
    border: 1px solid #d6d6d6;
    
    padding: 15px;
    display: flex;

    .anticon {
      display: flex;
      align-items:start;
      font-size: 20px;
      margin-top: 4px;
      margin-right: 12px;
    }

    `
)
export const TextWrapper = styled.div(
  (props) =>
    `
  span {
    font-weight: 700;
    font-size: 1rem;
    color: ${props.theme.blue1};
  }
  p {
    font-size: 1rem;
    color: ${props.theme.blue1};
  }
`
)
