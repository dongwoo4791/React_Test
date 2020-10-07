import React, { useEffect, useState } from "react";

const MovieDetail = (props) => {
  const id = props.match.params.id;
  const [movie, setMovie] = useState({
    id: "",
    title: "",
    rating: "",
    summary: "",
    medium_cover_image: "",
  });

  useEffect(() => {
    fetch("http://10.100.102.2:8000/api/movie/" + id, {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
        console.log(res);
        console.log(movie);
      });
  }, [id]);

  function inputHandle(e) {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
    console.log(movie);
  }

  const movieUpdate = () => {
    fetch("http://10.100.102.2:8000/api/movie/" + movie.id, {
      method: "put",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("영화수정 성공");
          props.history.push("/");
          console.log(res);
        }
      });
  };

  return (
    <div>
      <input
        type="text"
        value={movie.medium_cover_image}
        name="medium_cover_image"
        onChange={inputHandle}
        max="100"
      ></input>
      <br />
      <input
        type="text"
        value={movie.title}
        name="title"
        onChange={inputHandle}
        max="50"
      ></input>
      <br />
      <input
        type="text"
        value={movie.rating}
        name="rating"
        onChange={inputHandle}
        max="10"
      ></input>
      <br />
      <input
        type="text"
        value={movie.summary}
        name="summary"
        onChange={inputHandle}
        max="500"
      ></input>
      <br />
      <button onClick={() => movieUpdate(id)}>수정</button>
    </div>
  );
};

export default MovieDetail;
