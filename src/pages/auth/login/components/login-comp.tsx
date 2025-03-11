interface IInputField {
    type : "email" | "password" | "text",
    placeholder : string,
    className ?: string,
    value : string,
    onChange : (value:string , name:string)=>void ,
    name : string,
    rightIcon?:React.ReactNode;

}

const LoginComponents = ({
    type ,
    className ,
    placeholder , 
    value , 
    onChange,
    name,
    rightIcon
}:IInputField) => {
  return (
    <>
     <input 
              required
              type={type}
              className={`text-[#5A2A5B] pt-2 pb-2 pl-8 pr-8 rounded-lg border-2 ${className}` }
              placeholder={placeholder}
              value={value}
              name={name}
              onChange={(e)=>
                onChange(e.target.value , e.target.name)
              }
            />

            {rightIcon}
</>
  )
}

export default LoginComponents
