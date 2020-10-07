import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  height: 200px;
  width: 500px;
  border: 1px solid rgb(197, 197, 197);
  border-radius: 10px;
  box-shadow: 1px 1px 0px rgb(54, 53, 53);
  display: flex;
  align-items: center;
`;
const Cardbody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const CardButton = styled.button`
  color: white;
  width: 70px;
  height: 30px;
  background-color: gray;
  box-shadow: 1px 1px 0px 0px rgb(167, 111, 111);
`;
const CardTitle = styled.h3`
  align-items: center;
`;

const MovieItem = (props) => {
  const { id, title, medium_cover_image } = props.movie;
  const deleteById = props.deleteById;

  return (
    <Card>
      <img src={medium_cover_image} />
      <Cardbody>
        <Link to={`/MovieDetail/${id}`}>
          <CardTitle>{title}</CardTitle>
        </Link>

        <CardButton onClick={() => deleteById(id)}>삭제</CardButton>
      </Cardbody>
    </Card>
  );
};

export default MovieItem;
