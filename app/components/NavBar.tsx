import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const links = [
    {
      name: "Dashboard",
      url: "/",
    },
    {
      name: "Issues",
      url: "/issues",
    },
  ];

  return (
    <div className="flex w-full border justify-between px-8 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex gap-4">
        {links.map((link, key) => {
          return (
            <li key={key}>
              <Link href={link.url}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
