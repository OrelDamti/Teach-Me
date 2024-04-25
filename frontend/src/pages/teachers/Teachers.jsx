import { Flex } from "antd";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { TextWrapper, Wrapper } from "./styles";
import { Outlet, Link } from "react-router-dom";

const Teachers = () => {

  return (
    <Wrapper >
      <TextWrapper>Our Teachers</TextWrapper>
      <Flex
        wrap="wrap"
        gap="20px"
        justify="center"
        style={{ rowGap: "40px" }}
      >
        {[1, 2, 3].map(() => (
        // eslint-disable-next-line react/jsx-key
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/01/04/93/90/240_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg" />
          <Card.Body>
            <Card.Title>Acting Vice Chancellor</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Prof. Dr. James</Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nisi?
            </Card.Text>
            <Button variant="dark"><Link className="text-white text-decoration-none" to="/course">Check out courses</Link></Button>
          </Card.Body>
        </Card>
        ))};
      </Flex>
    </Wrapper>
  );
};

export default Teachers;
