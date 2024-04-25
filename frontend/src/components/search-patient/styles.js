import styled from 'styled-components'

export const Wrapper = styled.li`
  display: none;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;

  .search-component {
    width: calc(100% - 120px);
    height: 100%;
    background-color: rgb(44, 63, 72);
    color: rgb(242, 244, 248);
    padding-right: 16px;
  }

  span.ant-input-affix-wrapper {
    padding: 0;
    box-shadow: none !important;
    flex-direction: row-reverse;
    background: none;
    border: none;
    height: 50px;
    padding-left: 8px;
    input.ant-input.css-dev-only-do-not-override-wt6w97 {
      height: 100%;
    }
    input.ant-input {
      padding-left: 8px !important;
    }
  }

  span.ant-input-group-wrapper span.ant-input-group-addon {
    display: none;
  }

  a {
    color: #fff;
    font-size: 0.875rem;
    margin: 0;
    padding: 0 0.875rem;
    white-space: nowrap;
    -webkit-font-smoothing: antialiased;
    height: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    font-weight: 400;
    text-decoration: none;
    transition: color 250ms cubic-bezier(0.5, 0, 0.1, 1);

    &:hover {
      color: #3d70b2;
    }
  }

  input {
    display: block;
    height: 100%;
    width: calc(100% - 48px);
    min-width: 3.125rem;
    border: none;
    background-color: #2c3f48;
    padding: 0 2.5rem;
    color: #f2f4f8 !important;
    border: none !important;
    box-shadow: none;
    outline: none !important;
    &::placeholder {
      color: #8c9ba5 !important;
    }
  }

  .anticon.anticon-search.ant-input-search-icon {
    color: #f2f4f8;
  }

  @media (max-width: 1317px) {
    .ant-input-search.ant-input-affix-wrapper {
      background-color: transparent !important;
    }
  }

  .ant-input-search-icon {
    width: 20px;
    height: 20px;
    color: #f2f4f8;

    &:hover {
      color: #3d70b2;
    }
  }

  .ant-input-suffix {
    height: 100%;
    left: 12px;
    right: unset;

    i {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      fill: #f2f4f8;
    }
  }

  display: flex;
  flex: 1 0 auto;
  max-width: 960px;
`
