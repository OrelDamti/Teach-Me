import styled from "styled-components";

export const HeaderIconMenuWrapper = styled.ul`
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;

  .iconMenuList {
    width: 50px;
    height: 100%;

    &.accountMenu {
      width: calc(100% - 101px);
      align-items: center;
      display: -ms-flexbox;
      display: flex;
      height: 100%;
      padding-bottom: 1px;

      a {
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 0.875rem;
      }
    }

    a {
      width: 100%;
      height: 100%;
      padding: 16px;
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #ffffff;
      font-size: 100%;

      &:hover {
        color: #3d70b2;
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .opened-user {
    background-color: #262626;
  }

  .userMenuList {
    position: fixed;
    top: 50;
    background-color: #262626;
    z-index: 10;
    height: 0;
    right: 0;
    width: 270px;
    margin: 0;
    padding: 0;
    transition: all 0.1s linear;
    overflow: hidden;

    &.open {
      z-index: 9999;
      height: auto;
    }

    .menuList {
      width: 100%;
      padding: 0.625rem 1rem;
      text-align: left;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.1;

      &:first-child {
        margin-top: 1rem;
      }

      a {
        width: 100%;
        color: #78a9ff;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.1;
        text-align: left;
        cursor: pointer;
        padding: 0;
        justify-content: flex-start;

        &:hover {
          text-decoration: underline;
        }
      }

      &.logout {
        margin: 0 0.25rem 0.25rem;
        padding: 2.5rem 0.75rem 0.75rem;
        background-color: #393939;

        &:hover {
          background-color: #0f62fe;
        }

        a {
          color: #f3f3f3;
          text-decoration: none !important;

          svg {
            margin-left: 0.5rem;
            fill: #f3f3f3;
            width: 12px;
          }
        }
      }
    }
  }
`;

export const SearchWrapper = styled.div`
  margin-top: 20px;
  .ant-input-affix-wrapper {
    height: 40px !important;
  }
  margin-bottom: 25px;
`;
