import styled from "styled-components";
import BG from "../../assets/images/teach-me.jpeg";

export const Wrapper = styled.div`
  margin-top: 70px;
  height: 100%;
  padding: 0 30px;
  padding-top: 100px;
  width: 95%;
  margin: 0 auto;
  background: url(${BG});
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Text = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  text-decoration: underline;
`;

export const Day = styled.h3`
  font-size: 24px;
`;

export const Time = styled.p`
  font-size: 18px;
  margin: 0;
`;
