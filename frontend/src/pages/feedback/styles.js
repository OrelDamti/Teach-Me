import { Flex } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: lightblue;
  height: calc(100vh);
  padding: 0 40px;
  padding-top: 70px;
`;
export const TextWrapper = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  padding-bottom: 40px;
  text-decoration: underline;
`;

export const CardWrapper = styled(Flex)`
width: 300px;
gap: 10px;
min-height: 150px;
background: white;
padding: 10px;
border-radius: 10px;
box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.4);
}`;
