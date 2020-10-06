import React, { useState } from "react";

const Movie = () => {
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    story: "",
    medium_cover_image: "",
  });

  function inputHandle(e) {
    // console.log(e.target.value);
    setMovie({
      ...movie,
      [e.target.name]: e.target.value, //Computed property names 문법.
    });
    console.log(movie);
  }

  function submitMovie(e) {
    e.preventDefault();
    console.log(movie);

    let jsonMovie = JSON.stringify(movie);
    console.log(jsonMovie);

    fetch("http://10.100.102.2:8000/api/movie", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: jsonMovie,
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          console.log(res);
        }
      });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={inputHandle} //키보드로 값을 입력할 때 마다 전송.
          name="title"
          value={movie.title}
          placeholder="제목"
        />
        <br />
        <input
          type="text"
          name="rating"
          value={movie.rating}
          onChange={inputHandle}
          placeholder="평점"
        />
        <br />
        <input
          type="text"
          name="story"
          value={movie.story}
          onChange={inputHandle}
          placeholder="줄거리"
        />
        <br />
        <input
          type="text"
          name="medium_cover_image"
          value={movie.medium_cover_image}
          onChange={inputHandle}
          placeholder="사진 주소"
        />
        <br />
        <button onClick={submitMovie}>등록</button>
      </form>
    </div>
  );
};
export default Movie;
