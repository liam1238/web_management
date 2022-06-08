import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import DataTable from "react-data-table-component";

import axios from "axios";
import { data } from "autoprefixer";

// THIS IS THE ALL USER-DATA TABLE

function Users_data() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await axios.get("http://localhost:3306/getAllUsers");
      setUsers(data);
      console.log(data);
    };
    getAllUsers();
  }, []);

  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
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
      name: "user name",
      selector: (row) => row.user_name,
      sortable: true,
    },
    {
      name: "email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "password",
      selector: (row) => row.password,
      sortable: true,
    },
  ];

  const data =
    users &&
    users.map((user) => {
      return {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        user_name: user.user_name,
        email: user.email,
        password: user.password,
      };
    });

  return (
    <>
      <div className="flex p-3 justify-center flex-col">
        <p>this is users management table</p>
        {users && (
          <DataTable
            title="users management table"
            columns={columns}
            data={data}
            pagination
          />
        )}
      </div>
    </>
  );
}

export default Users_data;
