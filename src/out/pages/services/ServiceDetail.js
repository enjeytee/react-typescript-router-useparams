"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const serviceData_jsx_1 = __importDefault(require("./serviceData.jsx"));
const react_router_dom_1 = require("react-router-dom");
const ServiceDetail = () => {
    const { serviceId } = (0, react_router_dom_1.useParams)();
    const service = serviceData_jsx_1.default.find(service => service._id === serviceId);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Service detail page"),
        react_1.default.createElement("h3", null, service === null || service === void 0 ? void 0 :
            service.name,
            " - $", service === null || service === void 0 ? void 0 :
            service.price),
        react_1.default.createElement("p", null, service === null || service === void 0 ? void 0 : service.description)));
};
exports.default = ServiceDetail;
//# sourceMappingURL=ServiceDetail.js.map