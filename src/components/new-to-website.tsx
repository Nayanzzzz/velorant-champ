import { useNavigate } from "react-router-dom";

const NewToWebSite = () => {
  const navigation = useNavigate();
  return (
    <div className="bg-[#D4A5D7] w-full h-screen ">
      <div className="flex w-full h-screen items-center  flex-col gap-10 ">
        <p className="text-[100px] text-[#5A2A5B] font-[Paris] font-semibold pt-15 ">
          Step In, Glow Up! <span>✨</span>
        </p>

        <div className="mt-15 flex flex-col gap-15 items-center justify-center">
          <p className="text-6xl text-[#5A2A5B] font-[Paris] font-normal">
            Join the Glow! Log in & Shine with Us!
          </p>

          <button
            className="border-3 border-[#F8C8DC] pt-2 pb-2 pl-5 pr-5 rounded-md font-[paris] font-semibold text-[25px] bg-[#5A2A5B] text-[#FAF5F8]"
            onClick={() => {
              navigation("/login");
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewToWebSite;
