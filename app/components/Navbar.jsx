import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <h1>TaskfFlow</h1>
      <Link href={"/"}>Dashboard</Link>
      <Link href={"/tickets"}>View Tickets</Link>
      <Link href={"/tickets/create"}>Add New Ticket</Link>
    </nav>
  );
};

export default Navbar;
