import { useSignUp } from "../hooks/useSignUp"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";

function Signin() {
  const {signupWithGoogle, user, error} = useSignUp()
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-96 w-full">
        <FormInput type="text" label="Email:"/>
        <FormInput type="text" label="Password:"/>
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
     </div>
  </div>
  );
}

export default Signin;