import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import userList from "../../lib/user_list.json";
import Card from "@/Common/Card";
import NotFound from "./NotFound";

const search = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  let location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search");

  const fetchData = () => {
    if (searchQuery !== "") {
      let searchLowerCase = searchQuery.toLowerCase();
      let filteredUser = userList.filter((fil) => {
        return (
          fil.first_name.toLowerCase().includes(searchLowerCase) ||
          fil.last_name.toLowerCase().includes(searchLowerCase)
        );
      });
      setFilteredUsers(filteredUser);
    } else {
      return userList;
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  return (
    <>
      {filteredUsers.length > 0 ? (
        <div className="flex flex-row flex-wrap">
          <Card element={filteredUsers} />
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default search;
