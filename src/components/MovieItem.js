import React from "react";
import styled from "styled-components";

const MovieItem = (props) => {
  const { id, title, rating, medium_cover_image } = props.movie;
  const deleteById = props.deleteById;

  const Card = styled.div`
    height: 500px;
    border: 1px solid rgb(197, 197, 197);
    border-radius: 10px;
    box-shadow: 1px 1px 0px rgb(54, 53, 53);
  `;
  const Cardbody = styled.div`
    padding-left: 30px;
  `;
  const Image = styled.image`
    height: 100px;
    width: 100%;
  `;

  return (
    <Card>
      <Image src={medium_cover_image} />
      <Cardbody>
        <h4>{title}</h4>
        <p>평점 {rating}</p>
        <button onClick={() => deleteById(id)}>삭제</button>
      </Cardbody>
    </Card>
  );
};

export default MovieItem;
