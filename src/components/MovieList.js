import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieItem from "./MovieItem";

const GridCard = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: auto auto auto;
  grid-gap: 30px;
  margin: 10px;
  justify-content: space-around;
`;

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://10.100.102.2:8000/api/movie")
      .then((res) => res.json())
      .then((res) => {
        setMovies(res);
      });
  }, []);

  function deleteById(id) {
    fetch("http://10.100.102.2:8000/api/movie/" + id, {
      method: "delete",
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("성공");
          setMovies(movies.filter((movie) => movie.id !== id));
        }
      });
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieItem movie={movie} deleteById={deleteById} />
      ))}
    </div>
  );
};

export default MovieList;
