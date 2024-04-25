import React from "react";
import { Wrapper } from "./styles";
import TableTeachers from "../../components/table/TableTeachers";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Wrapper>
      <Container>
        <div className="row">
          <h1 className="text-center my-5">About Our Teachers </h1>
          <div className="col-12">
            <TableTeachers />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default About;
