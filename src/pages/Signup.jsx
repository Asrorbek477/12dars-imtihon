import { useSignUp } from "../hooks/useSignUp"
import { FcGoogle } from "react-icons/fc";
import { Link, Form, useActionData} from "react-router-dom";
import FormInput from "../components/FormInput";
import { useEffect } from "react";

export const action = async ({request}) => {
  let formData = await request.formData();
  let name = formData.get("Name");
  let email = formData.get("Email");
  let password = formData.get("Password");
   
  return { name , email , password };
};

function Signup() {
  let userSignup = useActionData();

  const {signupWithGoogle , signupWithEmailAndPassword , user , error} = useSignUp()

  useEffect(() => {
    if (userSignup) {
      signupWithEmailAndPassword(userSignup.email , userSignup.password)
    }
  } , [userSignup])

    return (
      <div className="min-h-screen grid place-items-center">
        <div className="max-w-96 w-full">
        <Form method="POST">
       <FormInput type="text" label="Name:" name="Name"/>
       <FormInput type="email" label="Email:" name="Email"/>
       <FormInput type="password" label="Password:" name="Password"/>
      <div>   
      <button className="btn btn-secondary w-full mb-3" type="submit">
        Submit
        </button>     
        <button onClick={signupWithGoogle} className="btn btn-secondary w-full mb-5">
        <FcGoogle className="text-3xl"/>
        <span className="text-2xl">Google</span></button>
        <p className="text-center"> Are you already registered? {" "}<Link to="/signin" className="link text-cyan-400" >Login</Link></p>
          </div>
        </Form>

          </div>
      </div>
    )
  }
  
export default Signup;