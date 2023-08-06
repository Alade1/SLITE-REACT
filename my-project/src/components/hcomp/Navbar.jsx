import Button from "./Button";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";




const Navbar = () => {

  const [Menu, setMenu] = useState(false);
  const toggleMenu =() =>{
    setMenu(!Menu);
 
  }
  return (
    <>
    <div className="flex justify-between bg-[#F9EFE4] pl-[2rem] pr-[2rem] h-[90px] ">
      <div className="text-[41px] font-bold  "> Slite</div>
      <button className="block mb-[20px] sm:hidden" onClick={toggleMenu}>
      <AiOutlineMenu />
      </button>


      <div className="hidden sm:flex justify-around gap-7">
        <ul className={`md:flex md:justify-around gap-6 pt-5 ${Menu
        ? "block" : "hidden"
      }`}>
        <li><a className="text-[15px]" href="#"> Product</a></li>
        <li><a className="text-[15px]" href=""> Templates</a></li>
        <li><a className="text-[15px]" href=""> Pricing</a></li>
        <li><a className="text-[15px]" href=""> Blog</a></li>
        <li><a className="text-[15px]"href=""> Sign in</a></li>
        </ul>
        <div>
        <Button
        text={"Request a demo"}
        className={"text-[black] border-2 border-black rounded-full w-[180px] p-2 mt-2 "}
        />
         <Button
        text={"Start for free"}
        className={"bg-[#176AE5] text-[white] p-2 rounded-full w-[180px] ml-[5px]  "}
        />
        </div>
        
    </div>
    </div>
    </>
    
  )
}

export default Navbar