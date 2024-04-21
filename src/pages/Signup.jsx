import { useSignUp } from "../hooks/useSignUp"
import { FcGoogle } from "react-icons/fc";
import { Link, Form} from "react-router-dom";
import FormInput from "../components/FormInput";

export const action = async ({request}) => {
  let formData = await request.formData();
  let name = formData.get("Name");
  let email = formData.get("Email");
  let password = formData.get("Password");
   
  return null;
};

function Signup() {
  const {signupWithGoogle , user , error} = useSignUp()

    return (
      <div className="min-h-screen grid place-items-center">
        <div className="max-w-96 w-full">
        <Form method="POST">
        <FormInput type="text" label="Name:" name= "Name"/>
        <FormInput type="text" label="Email:" name= "Email"/>
        <FormInput type="text" label="Password:" name= "Password"/>
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