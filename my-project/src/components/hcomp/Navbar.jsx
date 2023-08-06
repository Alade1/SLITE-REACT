import Button from "./Button";




const Navbar = () => {
  return (
    <>
    <div className="flex justify-between bg-[#F9EFE4] pl-[2rem] pr-[2rem] h-[90px] ">
      <div className="text-[41px] font-bold  "> Slite</div>
      <div className=" hidden md:flex text-center justify-around gap-9 mt-6  ">
        <a className="text-[15px]" href="#"> Product</a>
        <a className="text-[15px]" href=""> Templates</a>
        <a className="text-[15px]" href=""> Pricing</a>
        <a className="text-[15px]" href=""> Blog</a>
        <a className="text-[15px]"href=""> Sign in</a>
        <Button
        text={"Request a demo"}
        className={"text-[black] border-2 border-black rounded-full pb-3  w-[180px] mb-9 "}
        />
         <Button
        text={"Start for free"}
        className={"bg-[#176AE5] text-[white] p-1 rounded-full w-[130px] mb-9  "}
        />
        
    </div>
    </div>
    </>
    
  )
}

export default Navbar