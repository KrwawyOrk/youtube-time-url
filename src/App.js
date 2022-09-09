import "./App.css";
import { useState } from "react";

function App() {
  const [getVideoUrl, setVideoUrl] = useState("");
  const [getMinutes, setMinutes] = useState("");
  const [getSeconds, setSeconds] = useState("");
  const [getFinalUrl, setFinalUrl] = useState("");

  const buildUrl = () => {
    if (!getVideoUrl) {
      cleanUp();
      return;
    }

    console.log("Hello build url function!!!");
    const min = getMinutes ? `${getMinutes}m` : "0m";
    const sec = getSeconds ? `${getSeconds}s` : "0s";
    const url = `${getVideoUrl}&t=${min}${sec}`;

    const finalUrl = url;
    setFinalUrl(finalUrl);
    cleanUp();
  };

  const cleanUp = () => {
    setVideoUrl("");
    setMinutes("");
    setSeconds("");
  };

  return (
    <div className="App">
      <div className="flex flex-col min-w-full md:w-4/12">
        <h1 className="font-extralight text-2xl mt-10">Start the film with</h1>
        <h1 className=" text-2xl">the most interesting moment ...</h1>
        <div className="mt-10">
          <h1 className="font-light text-2xl">
            <span className="font-bold text-white mx-5 bg-slate-500 rounded-md text-center px-2">
              1
            </span>
            PUT YOUR YOUTUBE URL HERE:
          </h1>
          <input
            value={`${getVideoUrl}`}
            onInput={(e) => setVideoUrl(e.target.value)}
            placeholder={"Paste a link to an interesting video"}
            className="px-3 py-1 border rounded-md"
          />
        </div>

        <div className="mt-10">
          <h1 className="font-light text-2xl">
            <span className="font-bold text-white mx-5 bg-slate-500 rounded-md text-center px-2">
              2
            </span>
            CHOOSE A START TIME:
          </h1>
          <input
            value={`${getMinutes}`}
            onInput={(e) => setMinutes(e.target.value)}
            placeholder={"min"}
            className="px-3 py-1 border rounded-md w-16"
          />
          <input
            value={`${getSeconds}`}
            onInput={(e) => setSeconds(e.target.value)}
            placeholder={"sec"}
            className="px-3 py-1 ml-2 border rounded-md w-16"
          />
        </div>
        <div className="mt-10">
          <h1 className="font-light text-2xl">
            <span className="font-bold text-white mx-5 bg-slate-500 rounded-md text-center px-2">
              3
            </span>
            FINALLY GET THE URL FOR THE VIDEO!
          </h1>
          <button
            onClick={buildUrl}
            className="mt-2 border rounded-md bg-slate-200 hover:bg-slate-300 px-2 font-light"
          >
            GET LINK
          </button>
          <button
            onClick={() => navigator.clipboard.writeText(getFinalUrl)}
            className="mt-2 border ml-5 rounded-md bg-slate-200 hover:bg-slate-300 px-2 font-light"
          >
            COPY LINK
          </button>
          <h1 className="mt-2 py-1 px-2 font-bold text-slate-500">
            {getFinalUrl}
          </h1>
        </div>
        <div className="mt-10">
          <h1 className="font-semibold text-slate-700">
            What is the purpose of this website?
          </h1>
          <p className="font-extralight text-slate-800">
            Sometimes I wanted to send someone a link to a video but starting
            with a specific moment.
          </p>
          <h1 className="mt-2 font-semibold text-slate-700">
            Is this page necessary?
          </h1>
          <p className="font-extralight text-slate-800">
            No. You can simply add, for example, &t=0m25s at the end of the URL.
          </p>
          <h1 className="mt-5 font-extralight italic text-slate-600">
            https://github.com/KrwawyOrk
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
