import { useState } from "react";
import { add_user } from "../network/api/user/add-user-api";
import { useNavigate } from "react-router-dom";


const SignUpLearning = () => {

    const navigate = useNavigate();
  const signUp = async()=>{
    const result = await add_user({username : username , password : password , email:email})
    
    if (result?.s) {
      console.log("User added successfully:", result);
      navigate("/product-learning")
  } else {
      console.log("Failed to add user.");
  }
  }

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup submitted", { username, email, password});
    setUsername("")
    setEmail("")
    setPassword("")
    signUp();
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" 
              required 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUpLearning
