import React from "react";
import Contents from "./Contents";
import Header from "./Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="list-books">
      <Header />
      <Contents />
      <div className="open-search">
        <Link to="/search" />
      </div>
    </div>
  );
}

export default Home;
