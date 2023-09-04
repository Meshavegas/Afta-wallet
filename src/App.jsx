import React, { Suspense } from "react";

import "./App.css";
import Home from "./Pages/Home";
import { NavBar } from "./Component/NavBar";
import { Route, Routes } from "react-router-dom";
import Layout from "./Component/layout";
import Footer from "./Component/footer";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import ChatBot from "./Component/ChatBot";

function App() {
  return (
    <Suspense fallback={null}>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" exactly element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <ChatBot />
        <Layout classNamePropieties="bg-black">
          <Footer />
        </Layout>
      </div>
    </Suspense>
  );
}

export default App;
