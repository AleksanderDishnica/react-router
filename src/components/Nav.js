import { Routes, Route, Outlet } from "react-router-dom";
import * as React from "react";
import { Home } from "../pages/Home.js";
import { Portfolio } from "../pages/Portfolio.js";
import { About } from "../pages/About.js";
import { Contact } from "../pages/Contact.js";
import { NoMatch } from "../pages/NoMatch.js";
import { Li } from "../components/Helper.js";

function Layout() {
  return (
    <section>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <nav className="my-3">
        <ul className="grid sm:grid-cols-6 xs:grid-cols-1 gap-4">
          <h1>Bootcamp.al</h1>
          <Li title="Home" route="/" />
          <Li title="Portfolio" route="/portfolio" />
          <Li title="Contact" route="/contact" />
          <Li title="About" route="/about" />
          <Li title="No such link" route="/nothing-here" />
        </ul>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </section>
  );
}

export function Nav() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
