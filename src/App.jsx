import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "@/components/organisms/Header";
import HomePage from "@/components/pages/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{
          fontFamily: 'Inter, system-ui, sans-serif'
        }}
        style={{ zIndex: 9999 }}
      />
    </div>
  );
}

export default App;