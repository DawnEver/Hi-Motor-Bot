// pages/index.tsx

import { NextPage } from "next";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen antialiased text-center text-slate-50">
      <div className="flex flex-col items-center px-6 m-auto mx-auto max-w-7xl">
        <h1 className="w-full my-5 text-2xl font-bold sm:text-4xl ">
          Motor-specific Chat-GPT Bot.
        </h1>
        <ul className="max-w-lg text-xl font-extrabold text-slate-400">
          <li><Link href="/ask" >Search</Link></li>
          <li><Link href="/embeddings" >Contribute</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
