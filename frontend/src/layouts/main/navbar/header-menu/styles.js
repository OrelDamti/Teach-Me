import styled from 'styled-components'

export const HeaderMenuWrapper = styled.ul`
  height: 100%;
  align-items: center;
  list-style: none;
  padding: 0;
  justify-content: flex-end;
  margin: 0;
  display: flex;
  width: calc(100% - 10rem);

  .headerListItem {
    height: 100%;
    display: flex;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;

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
  }

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    justify-content: flex-start;
    padding-left: 10%;
  }
`
