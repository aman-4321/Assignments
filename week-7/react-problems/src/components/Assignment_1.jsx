import Profile from "../assets/profile.jpg";
import Coding from "../assets/coding.jpg";

export default function Assignment_1() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="w-1/3 h-1/2 border border-black rounded p-4 flex flex-col items-center bg-white">
        <img src={Coding} className="w-full h-40" />
        <img
          src={Profile}
          className="w-24 h-24 rounded-full -mt-12 border-4 border-white"
        />
        <div className="text-center mt-2">
          <p className="text-2xl font-bold inline-block mr-2 hover:cursor-pointer">
            Rita Correia
          </p>
          <p className="text-2xl text-gray-500 font-semibold inline-block hover:cursor-pointer">
            32
          </p>
          <p className="text-gray-500 hover:cursor-pointer">London</p>
        </div>
        <hr className="h-px w-full bg-gray-600 my-8 border-0"></hr>
        <div className="flex justify-between w-full px-4">
          <div className="text-center">
            <p className="font-bold text-2xl hover:cursor-pointer">80k</p>
            <p className="text-gray-600 hover:cursor-pointer">followers</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl hover:cursor-pointer">803k</p>
            <p className="text-gray-600 hover:cursor-pointer">Likes</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl hover:cursor-pointer">1.4k</p>
            <p className="text-gray-600 hover:cursor-pointer">Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
