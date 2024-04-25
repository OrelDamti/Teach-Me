import styled from "styled-components";

export const NavWrapper = styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #061727;
  color: #f2f4f8;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
`;

export const LogoWrapper = styled.div`
  height: 100%;
  width: auto;
  background: none;
  display: inline-flex;
  align-items: center;
  margin-top: 4px;
  padding-left: 40px;

  a {
    font-size: 0.875rem;
    font-weight: 400;
    text-decoration: none;
    transition: color 250ms cubic-bezier(0.5, 0, 0.1, 1);
    cursor: pointer;
    color: #f2f4f8;
    white-space: nowrap;

    span {
      font-weight: 600;
      color: #f2f4f8;
      transition: color 250ms cubic-bezier(0.5, 0, 0.1, 1);
    }
    img {
      height: 33px;
      margin-left: -10px;
    }
  }
  a {
    padding: 0 15px;
    white-space: nowrap;
  }
`;

export const LeftWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  order: -1;
  flex-grow: 1;
`;

export const RightWrapper = styled.div`
  background-color: transparent;
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 50%;
  width: 250px;
`;

export const SearchWrapper = styled.div`
  padding: 0px 18px;
  height: 100%;
`;

export const BrandWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 10rem;
  z-index: 9001;
`;
