import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import DataTable from "react-data-table-component";

import axios from "axios";

// THIS IS THE ALL POSTS TABLE

function Users_all() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getAllPosts = async () => {
      const { data } = await axios.get("http://localhost:3306/getAllPosts");
      setPosts(data);
      //console.log(data);
    };
    getAllPosts();
  }, []);

  console.log("aaaaaaaaaaaa" + posts);
  const columns = [
    { name: "Id", selector: (row) => row.user_id, sortable: true, },
    { name: "Title", selector: (row) => row.title, sortable: true, },
    { name: "Type", selector: (row) => row.type, sortable: true, },
    //{ name: "Tags", selector: (row) => row.tags },
    { name: "Lyrics", selector: (row) => row.lyrics, sortable: true, },
    { name: "Time Created", selector: (row) => row.time_created, sortable: true, },
  ];
  const data =
    posts &&
    posts.map((post) => {
      return {
        user_id: post.user_id,
        title: post.title,
        type: post.type,
        tags: post.tags,
        lyrics: post.lyrics,
        time_created: post.time_created,
      };
    });

  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );

  return (
    <>
      <div className="flex p-3 justify-center flex-col">
        <p>this is posts management table</p>
        {posts && (
          <DataTable
            title="posts management page"
            data={data}
            columns={columns}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
          />
        )}
      </div>
    </>
  );
}

export default Users_all;
