import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";



const SignIn = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [err,setErr] = useState(false)
  const [reRender,setReRender] = useState(false)

const auth = getAuth();
const SignInUser = ()=>{
  signInWithEmailAndPassword(auth,email,password)
  .then((userCredential)=>{
    const user = userCredential.user;
    // console.log(user)
  })
  .catch((err)=>
  {
    prompt('something went wrong',err.message)
    setErr(true)
});
}


  return err ? (<div>error</div>) : (
    <div>
      <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
           
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
             Sign In to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 ">
        Don&#x27;t have an account?
        <Link
          to = {'/signUp'}
          title=""
          className="font-semibold text-black transition-all duration-200 hover:underline"
        >
          Create a free account
        </Link>
      </p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm"></div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div onClick={SignInUser}>
                
                <Link to={'/reader'}>
                <button 
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-slate-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                >
                  Sign In
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn