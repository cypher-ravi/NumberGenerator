import React from "react";

export default function Skill({ skill }) {
  return (
    <div>
      <li>
        {skill[0]} {skill[1]}
      </li>
    </div>
  );
}
