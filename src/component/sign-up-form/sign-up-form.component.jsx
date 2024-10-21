import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const DefaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formfield, SetFormField] = useState(DefaultFormField);
  const { displayName, email, password, confirmPassword } = formfield;

  const onHandlerSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try{
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response)
    } catch (error) {
      console.log("there is an error");
    }
  };

  const onHandlerChange = (event) => {
    const { name, value } = event.target;
    SetFormField({ ...formfield, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={onHandlerSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={onHandlerChange}
        />
        <label>Email</label>
        <input
          type="email"
          required
          name="email"
          value={email}
          onChange={onHandlerChange}
        />
        <label>Password</label>
        <input
          type="password"
          required
          name="password"
          value={password}
          onChange={onHandlerChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={onHandlerChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
