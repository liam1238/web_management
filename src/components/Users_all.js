import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
 
import axios from "axios";
 
// THIS IS THE ALL POSTS TABLE
 
function Users_all() {
 const [posts, setPosts] = useState(null);
 
 useEffect(() => {
   const getAllPosts = async () => {
     const { data } = await axios.get("http://localhost:3306/getAllPosts");
     setPosts(data);
   };
   getAllPosts();
 }, []);
 
 console.log("aaaaaaaaaaaa" + posts);
 const columns = [
   { name: "Id", selector: (row) => row.id, sortable: true },
   { name: "Title", selector: (row) => row.title, sortable: true },
   { name: "Poem Lyrics", selector: (row) => row.poem_lyrics, sortable: true },
   //{ name: "Tags", selector: (row) => row.tags },
   {
     name: "Melody file path",
     selector: (row) => row.melody_file_path,
     sortable: true,
   },
   { name: "Creator Id", selector: (row) => row.creator_id, sortable: true },
   { name: "Post Type", selector: (row) => row.post_type, sortable: true },
   {
     name: "Average rate id",
     selector: (row) => row.average_rater_id,
     sortable: true,
   },
 ];
 const data =
   posts &&
   posts.map((post) => {
     return {
       id: post.id,
       title: post.title,
       poem_lyrics: post.poem_lyrics,
       melody_file_path: post.melody_file_path,
       time_created: post.time_created,
       creator_id: post.creator_id,
       post_type: post.post_type,
       average_rater_id: post.average_rater_id,
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
       <p>this is posts management table</p>
       {posts && (
         <DataTableExtensions {...tableData}>
           <DataTable
             title="posts management page"
             data={data}
             columns={columns}
             expandableRows
             expandableRowsComponent={ExpandedComponent}
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
 
export default Users_all;
 

