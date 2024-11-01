import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import Button from "../button/button.component";
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

  const resertFormfields = () => {
    SetFormField(DefaultFormField);
  };

  const onHandlerSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName });
      resertFormfields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("account alsready exist");
      } else {
        console.log(err);
      }
    }
  };

  const onHandlerChange = (event) => {
    const { name, value } = event.target;
    SetFormField({ ...formfield, [name]: value });
  };

  return (
    <div className="sign-up-container">
    <h2> Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onHandlerSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={onHandlerChange}
        />

        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={onHandlerChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={onHandlerChange}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={onHandlerChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
