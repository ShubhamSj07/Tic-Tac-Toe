import React from "react";
import { FaTimes, FaRegCircle, FaPen } from "react-icons/fa";

const Icon = ({ name }) => {
    switch (name) {
        case "cross":
            return <FaTimes className="icons-cross" />;
        case "circle":
            return <FaRegCircle className="icons-circle" />;
        default:
            return <FaPen className="icons-pen" />;
    }
};

export default Icon;
