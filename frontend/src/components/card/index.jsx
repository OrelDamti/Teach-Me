import React from "react";
import {
  Author,
  CardImage,
  CardWrapper,
  Description,
  Price,
  Wrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";
import config from "../../../services/config";

const Card = ({ item, isTeacher = false, isUpdate = false, _id }) => {
  const navigate = useNavigate();
  return (
    <CardWrapper
      key={item?._id}
      onClick={() => {
        if (isTeacher) {
          navigate(`/create-course/${item._id}`);
        } else if (isUpdate) {
          navigate(`/update-course/${_id}`);
        } else {
          navigate(`/course/${item._id}`);
        }
      }}
    >
      <Wrapper>
        <CardImage src={config.SERVER_IMAGE_API + `${item?.image}`} alt="img" />
        <h2>{item?.name}</h2>
        <Description>{item?.description}</Description>
        <Price>
          <p>{item?.faculty}</p>
        </Price>
        <hr />
      </Wrapper>
    </CardWrapper>
  );
};

export default Card;
