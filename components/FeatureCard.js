import React from 'react'

const FeatureCard = ({ title, description }) => {
    return (
        <div className="mx-3 rounded-lg shadow-md bg-zinc-800 py-7 px-6 text-white w-full hover:scale-105 transition-all duration-300 ease-out">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
};

export default FeatureCard
