import React from 'react'

const FeatureCard = ({ title, description }) => {
    return (
        <div className="mx-3 rounded-lg shadow-md dark:bg-zinc-800 bg-zinc-50 py-7 px-6 dark:text-white w-full hover:scale-105 transition-all duration-300 ease-out">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="dark:text-gray-300 text-gray-600">{description}</p>
        </div>
    );
};

export default FeatureCard
