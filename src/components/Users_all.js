import React, { useState, useEffect } from "react";
import axios from "axios";

function Users_all() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getAllPosts = async () => {
      const { data } = await axios.get("http://localhost:3306/getAllPosts");
      setPosts(data);
      console.log(data);
    };
    getAllPosts();
  }, []);

  return (
    <>
      <div className="flex p-3 justify-center flex-col">
        <p>this is users management page</p>
      </div>
    </>
  );
}

export default Users_all;
