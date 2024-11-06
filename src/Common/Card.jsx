import React, { useState } from "react";
import mypic from "/mypicc.jpg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Phone, MapPin } from "lucide-react";

const Card = ({ element }) => {
  const [selected, setSelected] = useState({});
  const handleCardClick = (details) => {
    setSelected(details);
  };
  return (
    <>
      {element.map((ele, index) => {
        return (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3">
            <div className="bg-white p-6 m-8 rounded-md shadow-md">
              <img
                src={mypic}
                alt="logo"
                style={{
                  borderRadius: "50%",
                  height: "120px", // Fixed height for the circle
                  width: "120px", // Fixed width for the circle (same as height)
                  objectFit: "cover",
                }}
              />
              <h1 className="font-semibold text-2xl">{`${ele.first_name} ${ele.last_name}`}</h1>
              <div className="flex gap-2 items-center">
                <MapPin size={14}></MapPin>
                <p>{ele.city}</p>
              </div>
              <hr className="mt-4 mb-2 border-black" />
              <div className="flex justify-between flex-wrap">
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <Phone size={14} fill="black"></Phone>
                    <h5>{ele.contact_number}</h5>
                  </div>
                  <span className="text-xs text-gray-500">
                    Available on phone
                  </span>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant={"default"}
                      onClick={() => handleCardClick(ele)}
                    >
                      Fetch Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Fetch Detail</DialogTitle>
                      <DialogDescription>
                        Here are details of following employees.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 items-center gap-4">
                        Name: {`${selected.first_name} ${selected.last_name}`}
                      </div>
                      <div className="grid grid-cols-2 items-center gap-4">
                        Location: {`${selected.city}`}
                      </div>
                      <div className="grid grid-cols-2 items-center gap-4">
                        Contact Number: {`${selected.contact_number}`}
                      </div>
                      <div className="grid grid-cols-2 items-center gap-4">
                        Profile Image:
                      </div>
                      <img
                        src={mypic}
                        alt="Profile"
                        style={{
                          height: "150px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          Close
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
