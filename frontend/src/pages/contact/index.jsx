// import React from "react";
import { Wrapper } from "./styles";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MapEmbed from "../../components/map/MapEmbed";
import { useState } from "react";
import { Button } from "../../components";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setGlobalLoader } from "../../store/slices/globalLoader";
import axios from "axios";
import config from "../../../services/config";

const Contact = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    first_name: "",
    last_name: "",
    email: "",
    description: "",
  });
  const submitHandler = () => {
    if (
      contact.first_name !== "" &&
      contact.last_name !== "" &&
      contact.email !== "" &&
      contact.description !== ""
    ) {
      dispatch(setGlobalLoader(true));
      axios({
        url: config.SERVER_API + "contact",
        method: "POST",
        data: {
          name: `${contact.first_name} ${contact.first_name}`,
          email: contact.email,
          description: contact.description,
        },
      })
        .then(() => {
          toast.success("Email Send Successfully!");
          setContact({
            ...contact,
            first_name: "",
            last_name: "",
            email: "",
            description: "",
          });
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        })
        .finally(() => {
          dispatch(setGlobalLoader(false));
        });
    } else {
      toast.error("Kindly fill the fields!");
    }
  };
  return (
    <Wrapper>
      <Container>
        <div className="row">
          <div className="col-6">
            <MapEmbed />
          </div>
          <div className="col-6 mx-auto">
            <h2 className="text-center">Contact Us </h2>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your First Name..."
                  onChange={(event) =>
                    setContact({ ...contact, first_name: event.target.value })
                  }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Last Name..."
                  onChange={(event) =>
                    setContact({ ...contact, last_name: event.target.value })
                  }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your email address..."
                  onChange={(event) =>
                    setContact({ ...contact, email: event.target.value })
                  }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>What would you like to discuss</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  onChange={(event) =>
                    setContact({ ...contact, description: event.target.value })
                  }
                />
              </Form.Group>
              <Button type="primary" htmlType="button" onClick={submitHandler}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Contact;
