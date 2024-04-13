export default function BusinessCard() {
  return (
    <div className="h-screen w-screen font-sans pl-2 pt-4">
      <div className=" w-1/3 h-1/2 border-gray-200 border-2 rounded-xl">
        <div className="">
          <p className="pl-6 pt-2 font-medium text-5xl">Lokeshwar</p>
        </div>
        <div>
          <p className="pt-5 pl-6 text-xl pb-5">
            A TA in the 100xDevs Cohort 2.0
          </p>
        </div>
        <div className="pl-6 pb-5">
          <p className="font-bold pb-3">Interests</p>
          <p>Ionic</p>
          <p>Open Source</p>
          <p>App dev</p>
        </div>
        <div className="ml-5">
          <button
            className="bg-blue-500 py-3 px-3 mr-5 border rounded-lg text-white font-semibold"
            onClick={() => window.open("https://www.linkedin.com", "_blank")}
          >
            LinkedIn
          </button>
          <button
            className="bg-blue-500 py-3 px-3 mr-5 border rounded-lg text-white font-semibold"
            onClick={() => window.open("https://www.twitter.com", "_blank")}
          >
            Twitter
          </button>
          <button
            className="bg-blue-500 py-3 px-3 mr-5 border rounded-lg text-white font-semibold"
            onClick={() => window.open("https://www.github.com", "_blank")}
          >
            Github
          </button>
        </div>
      </div>
    </div>
  );
}
