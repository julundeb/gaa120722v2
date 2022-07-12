import React, { useState } from "react";
import data from "../data";
import { Link, Navigate, useNavigate } from "react-router-dom";
import client, { urlFor } from "../utils/sanity";
function Search({ placeholder }) {
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
  const [filtrertData, settFiltrertData] = useState([]);
  const [input, settinput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();
  const Forslag = () => {
    setIsOpen(!isOpen);
  };
  const startFiltrering = (event) => {
    const sokOrd = event.target.value;
    settinput(sokOrd);
    const nyFilter = posts.filter((value) => {
      return value.turnavn.toLowerCase().includes(sokOrd.toLowerCase());
    });

    if (sokOrd === "") {
      settFiltrertData([]);
    } else {
      settFiltrertData(nyFilter);
    }
  };

  const tomtInput = () => {
    settFiltrertData([]);
    settinput("");
  };

  return (
    <div className="search">
      <div className="search">
        <input
          className="searchInputs"
          type="text"
          placeholder={"Søk etter turer..."}
          value={input}
          onChange={startFiltrering}
        />
      </div>
      {filtrertData.length != 0 && (
        <div className="dataResult">
          {filtrertData.map((value, key) => {
            return (
              <a
                className="dataitem"
                href={`/Tur/${value._id}`}
                target="_blank"
              >
                <p>{value.turnavn} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
