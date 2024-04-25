import styled from "styled-components";

export const CardWrapper = styled.div`
  user-select: none;
  width: 23%;
  cursor: pointer;
  background-color: whitesmoke;
  box-shadow: 0px -1px 13px 3px rgba(0, 0, 0, 0.42);
  border-radius: 0.7rem;
  overflow: hidden;
  transition: 0.5s all;
  hr {
    width: 100%;
    border: none;
    border-bottom: 1px solid #88888855;
    margin-top: 0;
  }
  &:hover {
    border: 1px solid #ffffff44;
    box-shadow: 0 7px 20px 0px rgba(0, 0, 0, 0.42);
    transform: scale(1.015);
    ::before {
      top: -100%;
      left: 200%;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  &::before {
    position: fixed;
    content: "";
    box-shadow: 0 0 100px 40px #ffffff08;
    top: -10%;
    left: -100%;
    transform: rotate(-45deg);
    height: 60rem;
    transition: 0.7s all;
  }
  h2 {
    padding-top: 10px;
    margin-bottom: 0;
  }
`;

export const CardImage = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const Description = styled.div`
  margin: 0.5rem 0;
  color: #a89ec9;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  color: #ee83e5;
  font-weight: 700;
  p{
    font-size: 16px;
    padding-bottom: 10px;
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.2rem;
  margin-bottom: -0.3rem;
`;
