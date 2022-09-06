import Link from 'next/link';
import React from 'react'
import { BsBarChartLineFill} from "react-icons/bs";

export const Waw = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            
            <div className="flex flex-col lg:flex-row">
                <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl sm:leading-none">
                        What is our
                        {' '}
                        <span className="inline-block text-blue-400">
                            GOAL?
                        </span>
                    </h2>
                    <a
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800"
                    >
                        Learn more
                    </a>
                </div>
                <div className="lg:w-1/2">
                    <p className="text-base text-gray-700">
                        We are a group of developers and designers. We intend to provide various kinds of IT services like, SEO, Server Optimization, Web Development, Software Development, Game Development. We have also aquired some companies like ATD Studios & ATD Media Group.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Waw