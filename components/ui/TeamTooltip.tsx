"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Tomas Corbalan Mendelek",
    designation: "Co-Founder",
    image:
      "/images/profile-Tomas.png",
    },
  {
    id: 2,
    name: "Jeremias Rodriguez Guzman",
    designation: "Co-Founder",
    image:
      "https://avatars.githubusercontent.com/u/138630815?v=4",
    },
    {
      id: 3,
      name: "Ramiro Paradí",
      designation: "Desarollador",
      image:
        "/images/profile-Ramiro.jpg",
      },
  {
    id: 4,
    name: "Sumate al equipo",
    designation: "",
    image:
      "/images/placeholder+.png",
    },
];

export function TeamTooltip() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
