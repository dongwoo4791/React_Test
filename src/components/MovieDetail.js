import React, { useEffect, useState } from "react";

const MovieDetail = (props) => {
  const id = props.match.params.id;
  const update = props.update;
  const [movie1, setMovie1] = useState({
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
        setMovie1(res);
        console.log(res);
        console.log(movie1);
      });
  }, [id]);
  return (
    <div>
      <input
        type="text"
        value={movie1.medium_cover_image}
        name={movie1.medium_cover_image}
        max="100"
      ></input>
      <br />
      <input
        type="text"
        value={movie1.title}
        name={movie1.title}
        max="50"
      ></input>
      <br />
      <input
        type="text"
        value={movie1.rating}
        name={movie1.rating}
        max="10"
      ></input>
      <br />
      <input
        type="text"
        value={movie1.summary}
        name={movie1.summary}
        max="500"
      ></input>
      <br />
      <button onClick={() => update(id)}>수정</button>
    </div>
  );
};

export default MovieDetail;
