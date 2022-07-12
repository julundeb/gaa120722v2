import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import client, { urlFor } from "../utils/sanity";

const Tur = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});
  client
    .fetch(
      `*[_type=="tur" && _id=="${id}"][0]{_id,turnavn, info, omrade, km, bilde,kart}`
    )
    .then((tur) => {
      setPost(tur);
      console.log(tur);
    })
    .catch((error) => {
      console.log(error);
    });
  const { turnavn, omrade, bilde, info, km, kart } = post;
  return (
    <div className="EnHelTur">
      <Link to="/" className="Tilbake">
        Tilbake
      </Link>
      <h1>{turnavn}</h1>
      <p>{km} km i {omrade}</p>
      <p className="Infotekst">{info}</p>
      
      {kart && <img src={urlFor(kart).url()} className="kart" />}
      
    </div>
  );
};
export default Tur;
