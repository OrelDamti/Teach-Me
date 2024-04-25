import styled from 'styled-components'

export const Wrapper = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  padding-bottom: 1px;
  
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
`
