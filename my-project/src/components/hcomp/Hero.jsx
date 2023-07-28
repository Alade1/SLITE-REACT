import Button from "./Button"
import heroImage from "../../assets/images/heroimage.png"
import Georgia from "../../assets/images/GeorgiaImage.png"


const Hero = () => {
    return (
      <div className="hero pt-4 bg-[#F9EFE4] text-center ">
          <h1 className=" text-[30px] md:text-[50px] font-[500] "> Bring <span className="underline">Clarity</span> to your team</h1>
          <p className="w-[100%] text-center md:text-center  mt-[30px]">Slite is a modern knowledge base that drives action with structured docs, thoughtful <br /> collaboration and confident decision-making.</p>
        <div className="form mt-[30px]">
        <input className ="input-message mt-[20px] h-[50px] rounded-full bg-transparent border-2 border-black w-[300px] p-6 " type="Email" name="E-mail" placeholder="name@company.com" required />
        <Button
           text={"Start for free"}
           className={"bg-[#176AE5] text-[white] p-1 rounded-full ml-[-25px] h-[60px] w-[150px]"}
        />
       
        </div>
        <div className="pt-[30px]">
        <img src={heroImage} alt="" className="" />
        </div>
        <p className="text-[10px]">8:45 AM - PDT</p>
        <div className="hidden md:flex justify-start gap-5  pt-3 border-4 border-white bg-[#FFFFFF] w-[30%] text-center ml-[auto] mr-[auto] mt-3 pl-3">
            <img src ={Georgia} alt="" />
            <div className="pt-3">
                <p className="font-[600]">Georges made some changes</p>
                <p>The abnormal guide to remote</p>

            </div>

        </div>
  
  
      </div>
    )
  }
  
  export default Hero