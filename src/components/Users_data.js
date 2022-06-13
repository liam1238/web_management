import React, { useState, useEffect } from "react";
//import MaterialTable from "material-table";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
//import editSvg from "../images/create-outline.svg";
//import deleteSvg from "../images/trash-outline.svg";
 
import axios from "axios";
 
// THIS IS THE ALL USER-DATA TABLE
 
function Users_data() {
 const [users, setUsers] = useState(null);
 const [search, setSearch] = useState("");
 const [filteredSearch, setFilteredSearch] = useState([]);
 
 useEffect(() => {
   const getAllUsers = async () => {
     const { data } = await axios.get("http://localhost:3306/getAllUsers");
     setUsers(data);
     setFilteredSearch(data); //data.data?
     console.log(data);
   };
   getAllUsers();
 }, []);
 
 useEffect(() => {
   //search user by name
   const res =
     users &&
     users.filter((user) => {
       return user.first_name?.toLowerCase().match(search?.toLowerCase());
     });
   setFilteredSearch(res);
 }, [search]);
 
 const columns = [
   {
     name: "id",
     selector: (row) => row.id,
     sortable: true,
   },
   {
     name: "username",
     selector: (row) => row.user_name,
     sortable: true,
   },
   {
     name: "is admin",
     selector: (row) => row.is_admin,
     sortable: true,
   },
   {
     name: "user type",
     selector: (row) => row.user_type,
     sortable: true,
   },
   {
     name: "first name",
     selector: (row) => row.first_name,
     sortable: true,
   },
   {
     name: "last name",
     selector: (row) => row.last_name,
     sortable: true,
   },
   {
     name: "avarage rate",
     selector: (row) => row.average_rate,
     sortable: true,
   },
   {
     name: "spotify URL",
     selector: (row) => row.spotify_url,
     sortable: true,
   },
   {
     name: "creation date",
     selector: (row) => row.creation_date,
     sortable: true,
   },
  //  {
  //    name: "edit",
  //    selector: (row) => row.edit,
  //    sortable: true,
  //  },
  //  {
  //    name: "delete",
  //    selector: (row) => row.delete,
  //    sortable: true,
  //  },
 ];
 
 const data =
   filteredSearch &&
   users &&
   users.map((user) => {
     return {
       id: user.id,
       is_admin: user.is_admin,
       user_type: user.user_type,
       first_name: user.first_name,
       last_name: user.last_name,
       user_name: user.user_name,
       average_rate: user.average_rate,
       spotify_url: user.spotify_url,
       creation_date: user.creation_date,
      //  edit: <img src={editSvg} className="h-[20px]" />,
      //  delete: (
      //    <button
      //      onClick={() => {
      //        axios.delete(`http://localhost:3306/deleteUser/${user.id}`);
      //      }}
      //    >
      //      {" "}
      //      <img src={deleteSvg} className="h-[20px]" />
      //    </button>
      //  ),
     };
   });
 
 const tableData = {
   columns,
   data,
 };
 
 return (
   <>
     <div className="flex p-3 justify-center flex-col w-4/5 my-0 mx-auto border border-[#dfdfdf]">
       <p>this is users management table</p>
 
       {users && (
         <DataTableExtensions {...tableData}>
           <DataTable
             title="users management table"
             columns={columns}
             data={data}
             pagination
             highlightOnHover
             defaultSortField="id"
             defaultSortAsc={false}
             subHeader
            //  subHeaderComponent={
            //    <input
            //      type="text"
            //      placeholder="Search"
            //      className="w-25 form-control"
            //      value={search}
            //      onChange={(e) => setSearch(e.target.value)}
            //    />
            //  }
           />
         </DataTableExtensions>
       )}
     </div>
   </>
 );
}
 
export default Users_data;
 

