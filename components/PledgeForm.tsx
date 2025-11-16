
import React from 'react';

export const PledgeForm: React.FC = () => {
    const handlePledge = () => {
        alert("Thank you for taking the pledge!");
    };

    return (
        <button
            onClick={handlePledge}
            className="text-white px-8 py-4 text-lg font-semibold rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg bg-gradient-to-r from-red-600 to-[#FF0440] hover:from-red-700 hover:to-[#d90338]"
        >
            Pledge
        </button>
    );
};
