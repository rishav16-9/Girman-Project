import React, { useState } from "react";
import Image from "@/Common/Image";
import TextboxSearch from "@/Common/TextboxSearch";
import { createSearchParams, useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const [search, setSearch] = useState({ query: "" });

  const handleChange = (name, value) => {
    setSearch({
      [name]: value,
    });
  };

  const onKeyPressed = (key) => {
    if (key === "Enter") {
      navigate({
        pathname: "/search",
        search: `?${createSearchParams({
          search: search.query,
        })}`,
      });
    }
  };

  return (
    <>
      <div className="flex flex-col md:gap-12 gap-5 items-center justify-center mt-28">
        <Image />
        <TextboxSearch
          name={"query"}
          value={search.query}
          type={"text"}
          onTextChange={handleChange}
          onKeyDownPress={onKeyPressed}
          className="w-1/2 bg-white h-10 rounded-lg p-4 border border-black focus:border-2"
        />
      </div>
    </>
  );
};

export default Home;
