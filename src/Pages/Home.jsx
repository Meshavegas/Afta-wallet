import React from "react";
import Heros from "../Component/heros";
import Layout from "../Component/layout";
import Description from "../Component/description";
import Conviction from "../Component/Conviction";
import Fontionalitys from "../Component/fontionalitys";
import Visit from "../Component/visit";
import DescriptionApp from "../Component/descriptionApp";
import Footer from "../Component/footer";

const Home = () => {
  return (
    <div>
      <Layout classNamePropieties=" bg-[#D1EEFA]">
        <Heros />
      </Layout>
      <Layout classNamePropieties="bg-gradient-to-r from-orange  to-purple">
        <Description />
      </Layout>
      <Layout>
        <Fontionalitys />
      </Layout>
      <Layout classNamePropieties="bg-white-gray-light">
        <Conviction />
      </Layout>
      {/* <Layout
        classNamePropieties="bg-white bg-cover bg-center  bg-opacity-0"
        isVisit={true}
      >
      <Visit />
      </Layout> */}
      <Layout classNamePropieties="bg-gradient-to-r from-orange  to-purple">
        <DescriptionApp />
      </Layout>
    </div>
  );
};

export default Home;
