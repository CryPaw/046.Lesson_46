import "./UsersList.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Список користувачів</h1>
      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <Link className="users-list__link" to={`/albums?userId=${user.id}`}>Album</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;