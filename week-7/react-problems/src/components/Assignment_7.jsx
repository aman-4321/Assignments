import { useState } from "react";
import HB from "../assets/hb.jpg";

const BirthdayCard = ({ name, index }) => {
  const colors = ["bg-blue-500", "bg-purple-500", "bg-yellow-500"];
  const wishes = [
    "May your special day be loaded with happiness and love.",
    "Here's to a bright, healthy, and exciting future, Happy B'day!",
    "The joy is in the air because your special day is here!",
  ];
  const randomColor = colors[index % colors.length];
  const randomWish = wishes[index % wishes.length];

  return (
    <div
      className={`max-w-lg rounded-lg overflow-hidden shadow-xl m-4 ${randomColor} p-6 transform scale-110`}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-4xl mb-2 text-center">
          Happy Birthday, {name}!
        </div>
        <p className="text-white text-lg text-center">{randomWish}</p>
      </div>
    </div>
  );
};

const Assignment_7 = () => {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const [showCards, setShowCards] = useState(false);

  const handleSubmit = () => {
    setNames([...names, name]);
    setName("");
    setShowCards(true);
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${HB})` }}
    >
      {!showCards ? (
        <div className="border-black rounded-xl border-2 w-1/2 h-96 bg-white bg-opacity-90 shadow-lg flex flex-col items-center p-12">
          <p className="text-4xl font-semibold mb-10">Enter Your Name</p>
          <div className="w-4/5">
            <input
              className="w-full h-16 rounded-lg mt-4 border-2 border-gray-400 pl-4 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button
            className="text-xl bg-blue-500 text-white font-semibold rounded-lg px-8 py-3 mt-8 hover:bg-blue-600 transition duration-300"
            onClick={handleSubmit}
          >
            Done
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-wrap justify-center">
            {[...Array(3)].map((_, index) => (
              <BirthdayCard
                key={index}
                name={names[names.length - 1]}
                index={index}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignment_7;
