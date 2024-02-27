import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Product" />
      </div>
      <nav>
        <Link to={'featured'}>Featured</Link>
        <Link to={'new'}>new</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
