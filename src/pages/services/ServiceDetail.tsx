import React from "react";
import serviceData from "./serviceData.jsx";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = serviceData.find(service => service._id === serviceId);
    return (
        <div>
            <h1>Service detail page</h1>
            <h3>{service?.name} - ${service?.price}</h3>
            <p>{service?.description}</p>
        </div>
    )
};
export default ServiceDetail; 