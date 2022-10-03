import React from "react";
import serviceData from "./serviceData.jsx";
import { Link } from "react-router-dom";

const ServiceList = () => {
    const services = serviceData.map(service =>
        <h3 key={service._id}>
            <Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}
        </h3>
    );
    return (
        <div>
            {services}
        </div>
    );
};
export default ServiceList;