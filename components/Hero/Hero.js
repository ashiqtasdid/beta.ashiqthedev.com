import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full text-black transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <Image
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src="https://cdn.ashiqtasdid.xyz/images/cdn/ashiqthedev.com/images/cr3.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                    layout='fill'
                />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                        Welcome to
                        <br className="hidden md:block" />
                        The Website of{' '}
                        <span className="inline-block text-blue-400">
                            Ashiq The Dev
                        </span>
                    </h2>
                    <p className="pr-5 mb-5 text-base text-blue-50 md:text-lg">
                        Ashiq The Dev - Developing That Matters is an IT consultant company. We provide various kinds of IT services including Web & Software Development, SEO, Management & Much more. Click on the button below to check it out.
                    </p>
                    <div className="flex items-center">

                        <Link href="/">
                            <a

                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Get started
                            </a>
                        </Link>
                        <Link href="/">
                            <a

                                aria-label=""
                                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700"
                            >
                                Learn more
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero