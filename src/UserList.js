import React, { useEffect, useState } from "react";

export default function UserList() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setUser(jsonResponse);
    };
    getUser();
  }, []);
  return (
    <div>
      <h1>Users List</h1>
      {user.map((user, index) => {
        return (
          <ul key={user.id}>
            <h3>User : {user.id}</h3>
            <ol>{user.name} </ol>
            <ol>{user.username} </ol>
            <ol>{user.email} </ol>
            <ol>{user.phone} </ol>
            <ol>{user.address.city} </ol>
          </ul>
        );
      })}
    </div>
  );
}
