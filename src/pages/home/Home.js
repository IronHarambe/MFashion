import React from "react";
import "./Home.scss";
import Hero from "../../components/home-componenets/hero/Hero";
import Category from "../../components/home-componenets/category/Category";

function Home() {
  return (
    <div className="home">
      <Hero></Hero>
      <Category></Category>
    </div>
  );
}

export default Home;
