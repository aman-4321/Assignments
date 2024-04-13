export default function BusinessCard() {
  return (
    <div className="h-screen w-screen font-sans pl-2 pt-4">
      <div className=" w-1/3 h-1/2 border-gray-200 border-2 rounded-xl">
        <div className="">
          <p className="pl-5 pt-2 font-medium text-5xl">Aman kumar</p>
        </div>
        <div>
          <p className="pt-5 pl-5 text-2xl">Learning Web Development</p>
        </div>
        <div className="pl-5">
          <p className="font-bold">Interests</p>
          <p>Ionic</p>
          <p>Open Source</p>
          <p>App dev</p>
        </div>
        <div className="">
          <button className="bg-blue-500 py-2 px-2">LinkedIn</button>
          <button className="bg-blue-500 pr-5">Twitter</button>
          <button className="bg-blue-500 pr-5">Github</button>
        </div>
      </div>
    </div>
  );
}
