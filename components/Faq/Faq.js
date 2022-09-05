import Link from 'next/link';
import React from 'react'
import { useState } from 'react';

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
  export const Faq = () => {
    return (
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-gray-50 uppercase rounded-full bg-blue-400">
                FAQ
              </p>
            </div>
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-50 sm:text-4xl md:mx-auto">
              <span class="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="232db96b-4aa2-422f-9086-5a77996d1df1"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span class="relative">Frequently</span>
              </span>{' '}
              Asked Questions
            </h2>
            <p class="text-base text-gray-700 md:text-lg ">
              Here are the answers to the Questions that have been asked frequently
            </p>
          </div>
          <div class="space-y-4">
            <Item title="What kind of services do you provide?">
              We provide various kinds of IT services, including, Server Development, Web & Software Development, SEO, etc.
            </Item>
            <Item title="How much experience do you guys have?">
              We have very much experienced Development Team, and we have more than 3+ years of experience
            </Item>
            <Item title="Currently, How many people are using your service?">
              For legal reasons, we can't share the exact amount of number. But, you can say quite a lot of people are currenly using our services
            </Item>
            <Item title="How many people are currently working for you?">
              We currenly have more than 200+ people working for us. If you wanna join us then go to <a className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'><Link href="https://career.ashiqthedev.com">this website</Link></a>
            </Item>
          </div>
        </div>
      </div>
    );
  };

export default Faq