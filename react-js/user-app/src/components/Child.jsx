import axios from "axios";
import { useEffect, useState } from "react";

function Child() {
  let intervalId = null;
  let [users, setUsers] = useState([]);

  let getData = async () => {
    let url = `https://jsonplaceholder.typicode.com/users`;
    let { data } = await axios.get(url);
    setUsers(data);
  };
  // api call on mounting
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("Child is mounted");

    intervalId = setInterval(() => {
      console.log("Child is still alive");
    }, 1000);
  }, []);

  useEffect(() => {
    return () => {
      console.log(" child is unmounted");
      clearInterval(intervalId);
    };
  }, []);
  return <div>Child has users {users.length}</div>;
}

export default Child;
