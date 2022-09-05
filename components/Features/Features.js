import Link from 'next/link';
import React from 'react'
import { BsServer, BsCpuFill, BsTools} from 'react-icons/bs' 

export const Features = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row">
                <div className="max-w-xl pr-16 mx-auto mb-10">
                    <h5 className="mb-6 text-3xl font-extrabold leading-none">
                        The features you will get if you use our services
                    </h5>
                    <p className="mb-6 text-gray-700">
                        We provide various kind of services, including SEO, Software Development, Web Development.

                    </p>
                    <div className="flex items-center">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Services
                        </button>
                        <Link href="/about" className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                            Learn more
                        </Link>

                    </div>
                </div>
                <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <svg
                                className="w-4 h-4 text-blue-400"
                            >
                                <BsServer/>
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Server Deployment</h6>
                        <p className="text-sm text-gray-700">
                            We will deploy your server for free. And we will also provide system for automatic server deployment. Our support will be available to you at any time
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <svg
                                className="w-4 h-4 text-blue-400"
                            >
                                <BsCpuFill/>
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Fast & Server side workspace</h6>
                        <p className="text-sm text-gray-700">
                            We will optimize your website/ app for Server Side rendering and the also ensures faster speed
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <svg
                                className="w-4 h-4 text-blue-400"

                            >
                                <BsTools/>
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Customization</h6>
                        <p className="text-sm text-gray-700">
                            We provide the best settings for Customization. You can customize your website/ app according to your choice.


                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <svg
                                className="w-12 h-12 text-blue-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Faster Speed</h6>
                        <p className="text-sm text-gray-700">
                           We will make sure that your server/ app/ website is fast enough. You can count on us, we have a experienced development team that will do the work for you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Features