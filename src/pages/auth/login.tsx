import loginImg from "../../assets/images/beauty salon.jpg";
import { useEffect, useState } from "react";
import RightDivImg from "../../assets/images/login-img.jpg";

import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UserData from "../../data/user-data";

import { toast } from "react-toastify";
import LoginComponents from "./login/components/login-comp";
import { localValue } from "../../lib/local-storage-service";
import { api_user_login } from "../../network/api/login-api";

interface IAuth {
  email: string;
  password: string;
}

const Login = () => {
  const [user, setUser] = useState<IAuth>({ email: "", password: "" });

  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  // const notifyWhenEmailInvalid = () => toast.warn("Enter valid email");
  const notify = () =>
    toast.warn("Stay Stunning! Enter your credentials to continue.");
  const checkNotify = () =>
    toast.error("Mismatch alert! Let’s refresh and try again beautifully.");
  const successNotify = () =>
    toast.success(
      "Here’s to a salon where beauty meets confidence, and every visit leaves you glowing—inside and out! 🥂✨"
    );

  const User = { email: user.email, password: user.password };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("call me");
    e.preventDefault();
    // const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (user.email === "" || user.password === "") {
      return notify();
    }

    // console.log(User.email);

    setIsLoading(true);

    setTimeout(() => {
      const matchUser = UserData.find(
        (value) =>
          value.email === User.email && value.password === User.password
      );
      setIsLoading(false);
      if (matchUser) {
        setUser({ email: "", password: "" });
        localStorage.setItem(localValue.storage_key, JSON.stringify({ User }));
        successNotify();
        return navigate("/home", { replace: true });
      }
      return checkNotify();
    }, 2000);
  };

  const handleChangeData = (value: string, name: keyof typeof user) => {
    setUser((previous) => ({ ...previous, [name]: value }));
  };


  const loginUser = async()=>{
    const res = api_user_login({ username: user.email, password:user.password });
  }
 

  return (
    <div className="bg-[#E6B5B0] w-full h-screen flex items-center justify-center">
      <div className=" w-[1100px] h-[600px] rounded-3xl flex">
        {/* left part  */}
        <div className="flex-1/2 flex ">
          <img src={loginImg} alt="" className="w-full h-full object-cover" />
        </div>

        {/* right part */}

        <div className="flex-1/2 flex bg-white flex-col items-center ">
          <img
            src={RightDivImg}
            alt=""
            className="w-[550px] h-[600px] opacity-20 object-cover fixed pointer-events-none"
          />
          <p className=" text-3xl pt-[3rem] pl-5 pr-5 pb-3 text-[#5A2A5B] font-[Popins] font-bold ">
            Access the Glow 🌸
          </p>

          <p className=" mt-7 font-[Popins] font-light text-[#5A2A5B]">
            Step into elegance – Your beauty awaits!
          </p>

          <div className="flex flex-col  gap-5 mt-15 w-[300px]">
            {/* <input
              required
              type="email"
              className="text-[#5A2A5B] pt-2 pb-2 pl-8 pr-8 rounded-lg border-2"
              placeholder="Enter your glow-mail 💌"
              value={user.email}
              
              onChange={(e) =>
                setUser((previous) => ({
                  ...previous,
                  email: e.target.value,
                }))
              }
            /> */}

            <LoginComponents
              type="email"
              name="email"
              value={user.email}
              placeholder="Enter your glow-mail 💌"
              onChange={handleChangeData}
            />

            <LoginComponents
              type={showPassword ? "text" : "password"}
              name="password"
              value={user.password}
              placeholder="Unlock the glow 🔐"
              onChange={handleChangeData}
              rightIcon={
                <button
              type="button"
              className="absolute ml-67 mt-[74px]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="text-[20px]" />
              ) : (
                <IoEye className="text-[20px]" />
              )}
            </button>
              }
            />

            {/* <input
              required
              type={showPassword ? "text" : "password"}
              className="text-[#5A2A5B] pt-2 pb-2 pl-8 pr-8 rounded-lg border-2"
              placeholder="Unlock the glow 🔐"
              value={user.password}
              onChange={(e) => {
                setUser((p) => ({
                  ...p,
                  password: e.target.value,
                }));
              }}
            />

            <button
              type="button"
              className="absolute ml-67 mt-[74px]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="text-[20px]" />
              ) : (
                <IoEye className="text-[20px]" />
              )}
            </button> */}

            <button
              disabled={isLoading}
              className="border-2  pt-2 pb-2 rounded-lg w-[150px]  ml-20 mt-[10px] cursor-pointer"
              onClick={handleSubmit}
            >
              {isLoading ? "Featching Data" : "Flawless Entry 🔐"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
