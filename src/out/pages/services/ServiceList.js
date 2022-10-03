"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const serviceData_jsx_1 = __importDefault(require("./serviceData.jsx"));
const react_router_dom_1 = require("react-router-dom");
const ServiceList = () => {
    const services = serviceData_jsx_1.default.map(service => react_1.default.createElement("h3", { key: service._id },
        react_1.default.createElement(react_router_dom_1.Link, { to: `/services/${service._id}` }, service.name),
        " - $",
        service.price));
    return (react_1.default.createElement("div", null, services));
};
exports.default = ServiceList;
//# sourceMappingURL=ServiceList.js.map