import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children, classNamePropieties, isVisit }) => {
  return (
    <div
      className={`w-full px-10 md:px-24 py-16 ${classNamePropieties} flex justify-center items-center`}
    >
      {children}
    </div>
  );
};

export default Layout;
