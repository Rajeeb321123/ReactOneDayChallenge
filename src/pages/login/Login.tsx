// Login page

import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";




function Login() {
  const [userName, setUserName] = useState<string>("");
  const [userNumber, setUserNumber] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");



  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = { userName, userNumber, userEmail };

    // USE OF LOCAL STORAGE
    const dataString = JSON.stringify(res);

    localStorage.setItem("currentUser", dataString);

    // navigate("/") at the end
    navigate("/home");

  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="Rajeeb Chhetri"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
        />

        <label htmlFor="">Phone number</label>
        <input
          name="userNumber"
          type="tel"
          size={20}
          minLength={9}
          maxLength={14}
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserNumber(e.target.value)}
        />
        <label htmlFor="">Phone number</label>
        <input
          name="userEmail"
          type="email"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;