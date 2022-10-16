import type { NextPage } from "next";
import Head from "next/head";

import { Button, HighlightedArea } from "lizar";

const Home: NextPage = () => {
  return (
    <div className="bg-black w-full h-screen">
      <Head>
        <title>Lizar Components</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex flex-col items-center gap-8 ">
        <h1
          className="text-9xl font-extrabold text-transparent bg-clip-text
          bg-gradient-to-r from-lizar-lemon-green to-lizar-hard-green"
        >
          Lizar
        </h1>
        <h2 className="text-white">
          A Tiny, fast, and easy to use Tailwind components library for React
        </h2>
        <Button text="Boop beep!" />
        <HighlightedArea title="Lizar Release 0.0.1" subtitle="See whats new" />
      </div>
    </div>
  );
};

export default Home;
