'use client'
import Game from '@/components/Game'
import SlidingDivComponent from '@/components/SlidingComponent'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import Basics from '../../src/components/Basics'
import Tester from '../components/Tester'
import ApifyYoutubeNextJs from '@/components/ApifyYoutubeNextJs'
import Jigsaw from '@/components/Jigsaw'
import FlaskResults from '@/components/FlaskResults'
import CallApiRoute from '@/components/CallApiRoute'
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
 const images =[
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3ABaseball.svg&psig=AOvVaw16CkoC2qvTyB-8K8qskfbt&ust=1706215208574000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLjHjo_x9oMDFQAAAAAdAAAAABAD',
      'data:image/jpeg;base64,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'
      
    ];
  const handlePrev = () => {
   
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-green-300 to-yellow-400">
      {/*<Basics />*/}
      {/*<Tester />*/ }
      {/*<ApifyYoutubeNextJs />*/}
      {/*<FlaskResults />*/}
      {/*<Jigsaw />*/}
      <CallApiRoute />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        
        <div className="w-full h-screen bg-blue-500 transition-all duration-300">
          <SlidingDivComponent/>
        <div className='p-12 bg-gradient-to-r from-gray-800 to-black h-64 rounded-xl hover:scale-105 transition ease-in-out duration-300 '>
            <p className='text-slate-100'>Yooo this is how you style broo this is just the beginning</p>
          </div>
</div>
<div className="bg-gradient-to-tr from-yellow-400 to-green-400 text-center flex rounded-sm border border-3 hover:scale-105  border-purple-400 transition-all duration-300 transform translate-y-0 hover:translate-x-14 hover:border-red-500">
          <p className='text-red-500 font-semibold italic shadow-blue-300 shadow-xl hover:text-black text-shadow-md text-shadow-blue-300'>This is an attempt to put a paragraph with italics in the centre of the page, with a green and yellowish background and upon hovering over the paragraph it will increase in size and have a purple boreder. The text is red and should have a shadow</p>
      </div>
{/*<Game/>*/}
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert h-auto w-auto"
              width={100}
              height={78}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
        <div></div>
      </div>
    </main>
  )
}
