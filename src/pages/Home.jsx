import React from "react";
import { useState } from "react";
import "../App.css";
import data from "../data";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Logo from "../components/Logo";
import client, { urlFor } from "../utils/sanity";
import Search from "../components/Search";
import Navbar from "../components/Navbar";

const Home = () => {
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
    <div>
      <Header />
      <Logo className="Logo" />
      <Navbar />
      <Search />
      <div className="hoved">
        {posts.map((x) => {
          return (
            <article key={x._id}>
              <section className="PlasseringvTurer">
                <div
                  onClick={() => {
                    navigate(`/Tur/${x._id}`);
                  }}
                >
                  {" "}
                  {<img src={urlFor(x.bilde).url()} className="img" />}{" "}
                </div>

                <div turnavn={x.turnavn} />

                <button
                  className="TurKnapp"
                  onClick={() => {
                    navigate(`/Tur/${x._id}`);
                  }}
                >
                  {" "}
                  {x.turnavn}{" "}
                </button>
              </section>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
