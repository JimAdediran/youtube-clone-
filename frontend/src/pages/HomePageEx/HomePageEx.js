import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { KEY } from "../../localKey"
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import { DATA } from "../../localData";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videoData, setVideoData] = useState([DATA]);

  useEffect(() => {
    //fetchVideoData();
  }, [token]);

  const fetchVideoData = async (searchTerm = "bob ross") => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&part=snippet&key=${KEY}`
      );
      setVideoData(response.data.items);
      console.log(response.data.items)
    } catch (error) {
      console.log(error.response.data);
    }
  };
  fetchVideoData();


  return (
    <div className="container">
      <SearchBar fetchVideoData={fetchVideoData}/>
      <h1>Home Page for {user.username}!</h1>
      {videoData && videoData.map((video) => (
          <p key={video.id.videoId}>
           Title: {video.snippet.title} 
           <br />
            <img src={video.snippet.thumbnails.medium.url} />
            <br />
           Description: {video.snippet.description}
           <br />
           <br />
           <br />
          </p>
        ))}
    </div>
  );
};

export default HomePage;
