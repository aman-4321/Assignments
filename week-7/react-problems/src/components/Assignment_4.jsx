import { useState } from "react";

const Assignment_4 = () => {
  const [length, setLength] = useState();
  const [para, setPara] = useState("");

  const words = [
    "the",
    "value",
    "hello",
    "world",
    "happen",
    "when",
    "you",
    "main",
    "void",
  ];

  const generateParagraph = () => {
    if (isNaN(length)) {
      alert("Please enter a number");
      return;
    }

    let newParagraph = "";
    for (let i = 0; i < length; i++) {
      newParagraph += words[i % words.length] + " ";
    }
    setPara(newParagraph);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="flex">
        <input
          className="border border-black px-48 py-2 mr-4 text-xl"
          type="text"
          placeholder="Enter Number of words"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <button
          className="bg-black text-white py-2 px-2 border rounded-xl text-xl"
          onClick={generateParagraph}
        >
          Generate
        </button>
      </div>
      <br />
      <div className="items-center">
        <p className="text-xl">{para}</p>
      </div>
    </div>
  );
};

export default Assignment_4;
