import React from "react";
import Layout from "../components/common/Layout";
import ImageSlide from "../components/ImageSlide";
import Match from "../components/Match";

const Home = () => {
  return (
    <Layout>
      <ImageSlide />
      <Match />
    </Layout>
  );
};

export default Home;
