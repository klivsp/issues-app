import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex w-full border justify-between px-8">
      <Link href="/">Logo</Link>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
