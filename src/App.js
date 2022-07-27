import { useEffect, useState } from "react";
import axios from "axios";
import pfp from "./pfp.jpg";
import checkmark from "./checkmark.png";
function App() {
  const [tweet, setTweet] = useState("");
  function fetchTweet() {
    axios
      .get("https://api.kanye.rest/")
      .then((res) => setTweet(res.data.quote));
  }
  useEffect(() => {
    fetchTweet();
  }, []);
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-100 gap-4 px-4">
      <div className="bg-white p-4 rounded-md border md:w-[40rem] w-full">
        <div className="flex gap-4 items-center mb-4">
          <img src={pfp} className="w-14" alt="" />
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-1">
              ye <img className="w-5" src={checkmark} alt="" />
            </h1>
            <h2>@kanyewest</h2>
          </div>
        </div>
        <p className="text-xl">{tweet}</p>
      </div>
      <button
        className="bg-sky-500 hover:bg-sky-600 py-2 px-4 rounded-md text-white"
        onClick={fetchTweet}
      >
        New Tweet
      </button>
      <p className=" mt-8">
        Made using{" "}
        <a className="text-sky-500 hover:underline" href="https://kanye.rest/">
          Kanye's API
        </a>
        , source code on{" "}
        <a
          className="text-sky-500 hover:underline"
          href="https://github.com/MFLXU/ye-tweets"
        >
          Github
        </a>
        , follow me on{" "}
        <a
          className="text-sky-500 hover:underline"
          href="https://twitter.com/MFLXU"
        >
          Twitter
        </a>
        .
      </p>
    </div>
  );
}

export default App;
