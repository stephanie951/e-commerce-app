import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import {
  createUserDocFromAuth,
  signInWithGooglePopup,
  SignInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const DefaultFormField = {
  email: "",
  password: "",
};
const SignInwithGoogle = async () => {
  const { user } = await signInWithGooglePopup();
  await createUserDocFromAuth(user);
};
const SignInForm = () => {
  const [formfield, SetFormField] = useState(DefaultFormField);
  const { email, password } = formfield;

  const resertFormfields = () => {
    SetFormField(DefaultFormField);
  };

  const onHandlerSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await SignInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resertFormfields();
    } catch (err) {
      switch(err.code){
        case ("auth/wrong-password"):
           alert("incorrect password for email");
           break
        case ('auth/user-not-found'):
          alert('no user associated with this email')
          break
          default:console.log(err);
      }    
      }
    }


  const onHandlerChange = (event) => {
    const { name, value } = event.target;
    SetFormField({ ...formfield, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2> Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onHandlerSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In </Button>
          <Button type='button' onClick={SignInwithGoogle} buttonType="google">
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
