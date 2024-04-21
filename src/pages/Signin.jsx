import { useSignUp } from "../hooks/useSignUp"
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Form, useActionData } from "react-router-dom";

import FormInput from "../components/FormInput";
import useLogin from "../hooks/useLogin";

export const action = async ({request}) => {
  let formData = await request.formData();
  let name = formData.get("Name");
  let email = formData.get("Email");
  let password = formData.get("Password");

  return  { email , password };
}

function Signin() {
  let userSignin = useActionData();

  const {signinEmailAndPassword} = useLogin()

  useEffect(() => {
    if (userSignin) {
      signinEmailAndPassword(userSignin.email , userSignin.password)
    }
  } , [userSignin])

  const {signupWithGoogle, user, error} = useSignUp()
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-96 w-full text-center">

      <Form method="POST">
      <FormInput type="email" label="Email:" name="Email"/>
       <FormInput type="password" label="Password:" name="Password"/>
     <div>
      <button className="btn btn-secondary w-full mb-3" type="submit">
        Submit
        </button>
      
    <button type="button" onClick={signupWithGoogle} className="btn btn-secondary w-full mb-5">
    <FcGoogle className="text-3xl"/>
      <span className="text-2xl">Google</span>
      </button>
      <p className="text-center">If you don't have account?{" "}<Link to="/signup" className="link text-cyan-400" >Signup</Link></p>
     </div>
     </Form>
     </div>
  </div>
  );
}

export default Signin;