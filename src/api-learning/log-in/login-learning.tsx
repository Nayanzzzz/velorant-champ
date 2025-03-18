import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { api_user_login_learning } from "../network/api/learning-login-api";



const LoginLearning = () => {
  const navigate = useNavigate();
  const [userName ,  setUserName]= useState("");
  const [password , setPassword] = useState("")

  const loginUser = async()=>{
    const result = await api_user_login_learning({
      username : userName ,
      password : password,
    })

    console.log(result.s);
    if(result && result.s){
      return navigate("/home")
    }else{
      return alert(result.m ?? "Opps!");
    }
    
  }

  const handleSubmit =(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    loginUser();
  } 
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg w-80 ">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form>

            <div className="mb-4">
                <label className="block text-gray-700" >Username</label>
                <input type="text" id="username" name="username" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" required value={userName} onChange={(e)=>{
                  setUserName(e.target.value)
                }}/>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700" >Password</label>
                <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" required 
                value={password} onChange={(e)=>{
                  setPassword(e.target.value)
                }}/>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" onClick={handleSubmit}>Login</button>

        </form>
    </div>
    </div>
  )
}

export default LoginLearning
