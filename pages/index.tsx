// pages/index.tsx

import { NextPage } from "next";
import Link from "next/link";

import React from 'react';
import Typed from 'typed.js';

const HomePage: NextPage = () => {

  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Hi-Motor Bot', 'motor-specific chat-gpt bot.'],
      typeSpeed: 100,
      backSpeed: 50,
      fadeOut: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col justify-center min-h-screen antialiased text-center text-slate-50">
      <div className="flex flex-col items-center px-6 m-auto mx-auto max-w-7xl">
        <h1 className="w-full my-5 text-2xl font-bold sm:text-4xl ">
        <span ref={el} />
      </h1>
        
        <ul className="max-w-lg text-xl font-extrabold text-slate-400">
          <li><Link href="/ask" >🔍Ask</Link></li>
          <li><Link href="/embeddings" >🚀Contribute</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
