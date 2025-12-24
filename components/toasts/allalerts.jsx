// inkrush/components/toasts/allalerts.jsx
import React from "react";

const AllAlerts = ({ message }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm z-50">
            <div className="bg-white text-black px-6 py-4 rounded-lg shadow-lg animate-fadeIn">
                <p className="text-lg font-semibold">{message}</p>
            </div>
        </div>
    );
};

export default AllAlerts;