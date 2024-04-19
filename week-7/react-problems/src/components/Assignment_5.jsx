import { useState, useEffect } from "react";
import axios from "axios";

const Assignment_5 = ({ username }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: "token YOUR_TOKEN",
        },
      })
      .then((respone) => setUserData(respone.data))
      .catch((error) => console.error("Error fetching data: " + error));
  }, [username]);

  if (!userData) return <div className="text-6xl font-bold">Loading...</div>;

  return (
    <div className="h-screen w-screen bg-gray-400 flex justify-center items-center">
      <div className="border border-black w-1/4 h-96 rounded-xl bg-black text-white flex flex-col items-center p-4">
        <img
          className="border rounded-full w-40 h-40 mb-6"
          src={userData.avatar_url}
          alt={userData.login}
        />
        <div className="text-xl font-semibold ml-7">
          <h1>Name:- {userData.name}</h1>
          <h2>Username:- {userData.login}</h2>
          <p>Bio:- {userData.bio}</p>
          <p>Public repos:- {userData.public_repos}</p>
          <p>Followers:- {userData.followers}</p>
          <p>Following:- {userData.following}</p>
        </div>
      </div>
    </div>
  );
};

export default Assignment_5;
