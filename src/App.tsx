import React from "react";
import Header from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ServiceList from "./pages/services/ServiceList.jsx";
import ServiceDetail from "./pages/services/ServiceDetail.jsx";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/*" element={<Home />}/>
                <Route path="/services/*" element={<ServiceList />} />
                <Route path="/services/:serviceId" element={<ServiceDetail />} />
            </Routes>
        </div>
    )
};
export default App;