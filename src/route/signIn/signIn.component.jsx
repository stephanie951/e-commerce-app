import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../component/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleuser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };
  return (
    <div>
      <h1> this is the sign in page</h1>
      <button onClick={logGoogleuser}> sign in with google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
