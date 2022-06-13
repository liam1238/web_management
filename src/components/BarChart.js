import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";

import axios from "axios";


function BarChart() {
  const [tags, setPosts] = useState(null);

  useEffect(() => {
    const getAllPosts = async () => {
      const { data } = await axios.get("http://localhost:3306/getTag");
      setPosts(data);
    };
    getAllPosts();
  }, []);

  console.log("bbbbbbbbb" + tags);
  const columns = [
    { name: "Tag id", selector: (row) => row.tag_id, sortable: true },
    { name: "post id", selector: (row) => row.post_id, sortable: true },
  ];
  const data =
    tags &&
    tags.map((post) => {
      return {
        tag_id: post.tag_id,
        post_id: post.post_id,
      };
    });

  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );

  const tableData = {
    columns,
    data,
  };

  

  return (
    <>
      <div className="flex p-3 justify-center flex-col w-4/5 my-0 mx-auto border border-[#dfdfdf]">
        <p>Tag id to Post id</p>
        {tags && (
          <DataTableExtensions {...tableData}>
            <DataTable
              title="tags id to post id"
              columns={columns}
              data={data}
              pagination
              highlightOnHover
              defaultSortField="id"
              defaultSortAsc={false}
              subHeader
            />
          </DataTableExtensions>
        )}
      </div>
    </>
  );
}

export default BarChart;
