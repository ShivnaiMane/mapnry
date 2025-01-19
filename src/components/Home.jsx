import React, { useEffect, useState } from "react";
import ProfilesList from "./ProfilesList";
import MapComponent from "./MapComponent";

const Home = () => {
  const [profiles, setProfiles] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [profile, setProfile] = useState({});

  const fetchProfilesData = async () => {
    try {
      const resopnse = await fetch(
        "https://dummyjson.com/users?limit=10&select=firstName,lastName,image,university,address&sortBy=firstName&order=asc"
      );
      const data = await resopnse.json();
      setProfiles(data?.users);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchProfilesData();
  }, []);

  return (
    <div>
      {showMap ? (
        <MapComponent setShowMap={setShowMap} profile={profile} />
      ) : (
        <ProfilesList
          profiles={profiles}
          setShowMap={setShowMap}
          setProfile={setProfile}
        />
      )}
    </div>
  );
};

export default Home;
