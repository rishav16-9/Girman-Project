import React, { useState, useEffect } from "react";
import girmanLogo from "/girman_logo.svg";
import hamburgerLogo from "/hamburger.svg";
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "react-router-dom";
import TextboxSearch from "@/Common/TextboxSearch";
import { createSearchParams, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const queryParam = new URLSearchParams(location.search);
  const search = queryParam.get("search");

  useEffect(() => {
    setSearchQuery(search);
  }, [search]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleChange = (name, value) => {
    setSearchQuery(value);
  };

  const onKeyPressed = (key) => {
    if (key === "Enter") {
      navigate({
        pathname: "/search",
        search: `?${createSearchParams({
          search: searchQuery,
        })}`,
      });
    }
  };

  const sendEmail = () => {
    var mail = "mailto:contact@girmantech.com.";
    var a = document.createElement("a");
    a.href = mail;
    a.click();
  };
  return (
    <div className="fixed top-0 w-full bg-transparent">
      <div className="mx-2">
        <div className="container mx-auto py-4">
          <div className="flex justify-between">
            <Link to="/">
              <img src={girmanLogo} alt="logo" />
            </Link>
            {location.pathname.includes("/search") ? (
              <TextboxSearch
                name={"searchQuery"}
                value={searchQuery || ""}
                type={"text"}
                onTextChange={handleChange}
                onKeyDownPress={onKeyPressed}
                className="w-1/2 bg-white h-10 rounded-lg p-4"
              />
            ) : (
              <div className="flex">
                <div className="flex flex-row-reverse">
                  <div className="hidden md:flex flex-grow">
                    <a
                      href="https://girmantech.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="link">Website</Button>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/girmantech/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="link">LinkedIn</Button>
                    </a>
                    <Button variant="link" onClick={sendEmail}>
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            )}
            <div className="relative mr-5 flex items-center md:hidden">
              <img
                src={hamburgerLogo}
                alt="Hamburger menu"
                onClick={toggleMenu}
              />
            </div>
          </div>
          {isMenuOpen && (
            <div className="absolute right-2 mt-2 bg-white p-2 rounded shadow-md md:hidden">
              <div className="flex flex-col md:hidden">
                <a
                  href="https://girmantech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="link">Website</Button>
                </a>
                <a
                  href="https://www.linkedin.com/company/girmantech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="link">LinkedIn</Button>
                </a>
                <Button variant="link" onClick={sendEmail}>
                  Contact Us
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
