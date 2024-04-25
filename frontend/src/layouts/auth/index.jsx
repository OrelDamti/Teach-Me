import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";
import BG from "../../assets/images/teach-me.jpeg";
import { ContentContainer, ImageContainer, LogoBox, Wrapper } from "./styles";
import Navbar from "../main/navbar";
// import { useSelector } from 'react-redux'

const AuthLayout = () => {
  // const { isLoadingUser } = useSelector((state) => state.auth)
  return (
    <Wrapper>
      <Navbar />
      {/* {isLoadingUser && (
        <LoaderWrapper>
          <div>
            <LoadingSVG color={false} />
          </div>
        </LoaderWrapper>
      )} */}
      <Row>
        <Col xs={0} sm={0} md={0} lg={12}>
          <ImageContainer>
            <img src={BG} alt="" />
          </ImageContainer>
        </Col>
        <Col span={12}>
          <ContentContainer>
            <LogoBox>
              <Outlet />
            </LogoBox>
          </ContentContainer>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default AuthLayout;
