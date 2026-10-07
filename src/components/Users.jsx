import { useState } from "react";
import { mockData } from "../data/mockData";

function Users() {
  // Start with the provided mock data, then manage changes with React state.
  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();

    if (trimmedUsername === "" || trimmedEmail === "") {
      setError("Please fill in both fields.");
      return;
    }

    if (!/[a-zA-ZæøåÆØÅ]/.test(trimmedUsername)) {
      setError("Username must contain letters.");
      return;
    }

    const newUser = {
      username: trimmedUsername,
      email: trimmedEmail,
    };

    setUsers([...users, newUser]);
    setUsername("");
    setEmail("");
    setError("");
  }

  return (
    <section className="card users-card">
      <h2>Users</h2>

      <form className="user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <button type="submit">Add user</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.username}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Users;
