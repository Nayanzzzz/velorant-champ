import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/images/main-img.png";
import Card from "../components/card-for-product";
import ProductData from "../data/product-data";
import { useState } from "react";
import { localValue } from "../lib/local-storage-service";
import Navbar from "../components/navbar";

const Home = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const [products, setProducts] = useState(ProductData);


  const handleSearch = (e:React.ChangeEvent<HTMLSelectElement>) => {
    if (input === "" && e.target.value === "none") {
    setProducts([...ProductData]);
     return
    }


    else if(input === "" && e.target.value === "name"){
      const data= [...ProductData].sort((a,b)=> a.name.localeCompare(b.name))
      setProducts(data);
      return
    }

    else if(input === "" && e.target.value === "price"){
      const data= [...ProductData].sort((a,b)=> a.price - b.price)
      setProducts(data);
      return
    }

    const filterData = ProductData.filter((p) => {
      return p.name.toLowerCase().includes(input.toLowerCase().split(" ").join(""));
    });
    setProducts(filterData);

    

    if(filterData && e.target.value === "price"){
      const data = [...filterData].sort((a ,b)=> a.price - b.price)
      setProducts(data);
      return
    }

    else if(filterData && e.target.value === "name"){
      const data = [...filterData].sort((a,b)=> a.name.localeCompare(b.name))
      setProducts(data)
      return
    }

  };




  const handleLogout = () => {
    localStorage.removeItem(localValue.storage_key);
    const checkUser = localStorage.getItem(localValue.storage_key);
    if (!checkUser) {
      return navigate("/");
    }
  };

  return (
    <div className="w-full h-auto  text-[#5A2A5B] font-[Popins] ">
      <img
        src={HeroImg}
        alt=""
        className="w-full h-full opacity-5 object-cover fixed pointer-events-none"
      />

      <div className="flex items-center justify-end pr-15 pt-5 ">
        <button
          onClick={handleLogout}
          className="font-semibold border-2 pt-2 pb-2 pr-5 pl-5 rounded-lg cursor-pointer"
        >
          Log out
        </button>
      </div>

      <div className=" flex items-center justify-center  gap-10">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="border-2 pt-2 pb-2 pr-35 pl-5 border-[#5A2A5B] focus:border-[#5A2A5B] focus:outline-none rounded-lg w-[500px] text-[18px]"
          placeholder="Find your glow – search here!"
        />

        <button
          className="absolute font-semibold border-2 pt-1 pb-1 pr-3 pl-3 rounded-lg cursor-pointer ml-[165px]"
          onClick={handleSearch}
        >
          Search
        </button>

        <div className="flex gap-5">
          <label className="font-bold">Sort  By :</label>

          <select className=" focus:outline-none" onClick={handleSearch}>
            <option value="none">None</option>
            <option value="price" >Low to High</option>
            <option value="name" >A to Z</option>
            
          </select>
        </div>

        
      </div>

      <div className="items-center justify-center flex  mt-20" >
        <Navbar/>
      </div>

      {/* product cards */}
      <div className=" pt-30 ">
        <div className=" mx-auto w-[80%] grid grid-cols-3  place-content-evenly gap-2">

          {/* {filterData2.length > 0 ? filterData2.map((p,index)=>{return (
            <>
            <Card {...p} index={index}/>
            </>
          )}):ProductData.map((p, index) => {
            return (
              <>
              
                <Card {...p} index={index} />
              </>
            );
          }) } */}

          { products.length > 0  ? products.map((p, index) => {
            return (
             
                <Card key={index} {...p} index={index} />
              
            );
          }) : <p className="ml-60 font-bold">💖 "Oops! No beauty treats found. Check back soon!"</p>}


        </div>
      </div>
    </div>
  );
};

export default Home;
