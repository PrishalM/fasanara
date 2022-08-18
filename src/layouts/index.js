import React from "react";

import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {" "}
      <header className="d-flex justify-content-center">
        <h1>Github Search</h1>
        <nav>
          <NavLink to="/">Header</NavLink>
        </nav>
      </header>
      <Outlet />
      <footer>
        <p>© 2022 Footer Search. </p>
        <p>
          &nbsp; Created by <a href="https://github.com/PrishalM">Prishal</a>
        </p>
      </footer>
    </>
  );
};

export default Layout;
