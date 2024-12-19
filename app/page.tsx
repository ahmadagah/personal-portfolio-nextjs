'use client';

import React, { useEffect, useState } from 'react';
import { Link } from '@nextui-org/link';
import { siteConfig } from '@/config/site';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import animationData from '@/public/coding-animation.json';

export default function Home() {
  return (
    <section className='flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-16 md:py-20'>
      {/* Left Section */}
      <div className='flex flex-col max-w-lg'>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-white'>
          Full Stack Developer
        </h1>
        <p className='text-lg text-gray-600 dark:text-gray-400 mt-4'>
          Crafting modern websites and apps to bring your ideas to life.
        </p>
        <div className='mt-6'>
          <Link
            href={siteConfig.links.github}
            className='px-6 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700'
          >
            View My Work
          </Link>
        </div>
      </div>

      {/* Right Section for Animation */}
      <div className='w-full flex justify-center'>
        <div className='flex items-center justify-center'>
          <Lottie
            animationData={animationData}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>
    </section>
  );
}
