// File: pages/index.js
"use client";

import { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { LuRefreshCw } from "react-icons/lu";

// export default function Quotes() {
//   const [quotes, setQuotes] = useState([]);

//   useEffect(() => {
//     // Fetch data from the quotes.json file
//     fetch('/data/quotes.json')
//       .then((response) => response.json())
//       .then((data) => setQuotes(data))
//       .catch((error) => console.error('Error fetching quotes:', error));
//   }, []);

export default function Quotes(){

  let quotes = []

    async function loadQuotes() {
      const res = await fetch("https://qapi.vercel.app/api/quotes");
      quotes = await res.json();
  }

  const [quote, setQuote] = useState({
    text: "The needs of the many, outweigh the needs of the few, or the one",
    author: "Mr. Spark",
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random()*quotes.length)]
    setQuote(select)
  }

  loadQuotes()

  

  return(
    <>
      <div>
        <div className="text-white text-xl">"{quote.quote}."</div>
        <div className="text-slate-200 text-lg mt-5">~ {quote.author.split(',')[0]}</div>
          <hr className="bg-white mt-10"/>
        <div>
          <div className="flex mt-10 justify-center gap-10 text-xl">
            <div className="rounded-[50%] bg-white p-3">
            <FaXTwitter className="text-orange-800"/>
            </div>
            <div className="rounded-[50%] bg-white p-3">
            <LuRefreshCw className="text-orange-800 cursor-pointer" onClick={()=> {random()}} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



//return (
  // <div>
  //   <h1>Quotes</h1>
  //   {quotes.length === 0 ? (
  //     <p>Loading...</p>
  //   ) : (
  //     <ul>
  //       {quotes.map((quote, index) => (
  //         <li key={index}>{quote.text}</li>
  //       ))}
  //     </ul>
  //   )}
  // </div>

//   <>
//     <div>
//       <div>{quote.text}</div>
//       <div>{quote.author}</div>
//       <div>
//       <FaXTwitter />
//       </div>
//     </div>
//   </>
// );
