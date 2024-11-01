import Image from "next/image";
import data from "../data/quotes.json";
import Quotes from "./quotes";

export default function Home() {
  return (
    <>
      <main className="justify-center flex items-center text-center m-10">
        <div>
          <h1 className="text-5xl">HELLO, LOVELY PEOPLE.</h1>
          <h2>
            Welcome to <span className="text-orange-500 text-3xl">Cole_man</span> Quotes
          </h2>
        </div>
      </main>

      <div className="justify-center flex m-auto py-20 px-32 bg-orange-500 items-center mx-96 rounded-3xl">
        <Quotes />
      </div>
    </>
  );
}
