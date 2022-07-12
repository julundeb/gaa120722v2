import React from "react";
import data from "../data";
import { useState } from "react";
import client, { urlFor } from "../utils/sanity";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Ostmarka = () => {
  const [posts, setPosts] = useState([]);
  client
    .fetch(`*[_type=="tur"]{_id,turnavn, info, omrade, km, bilde, kart}`)
    .then((turer) => {
      setPosts(turer);
      console.log(turer);
    })
    .catch((error) => {
      console.log(error);
    });

  const [turer, settTurer] = useState(data);
  let navigate = useNavigate();
  return (
    <div >
      <Link to="/" className="Tilbake">
        Tilbake
      </Link>

      <h1 className="tekst"> Turer i Østmarka</h1>
      <div className="filterside">
      {posts.map((x) => {
        if (x.omrade === "Østmarka")
          return (
            <article key={x._id}>
              {" "}
              {<img src={urlFor(x.bilde).url()} className="img" />}{" "}
              <div turnavn={x.turnavn} />
              <button
                className="FilterTurknapp"
                onClick={() => {
                  navigate(`/Tur/${x._id}`);
                }}
              >
                {" "}
                {x.turnavn}{" "}
              </button>
            </article>
          );
      })}
    </div>
    </div>
  );
};
export default Ostmarka;
