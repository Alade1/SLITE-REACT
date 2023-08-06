import Button from "./Button"
import firsttemp from "../../assets/images/templatetwo.png"
import secondtemp from '../../assets/images/templatethree.png'
import thirdtemp from '../../assets/images/templatefour.png'
import fourthtemp from '../../assets/images/templatefive.png'
import fifthtemp from '../../assets/images/templatesix.png'
import sixthtemp from '../../assets/images/templateseven.png'




const Templates = () => {
  return (
    <div className="pt-[100px] bg-[#F9EFE4] w-[100%] h-[100%] ">
        <p className="text-[30px] font-[500] text-center">Beat the blank canvas with Templates</p>
        <p className="text-center font-[500]">Ready-to-use Templates for product specs, company handbooks, meeting notes and more.</p>
        <Button 
        text={"Browse Templates"}
        className={"text-[black] border-2 border-black rounded-full p-[20px]  w-[200px]  h-[80px] mt-8  ml-[8rem] sm:ml-[35rem] sm:w-[250px]"} />

    <div className=" mt-[20px]   md:mt-[100px] "> 
    <div className=" flex flex-col justify-center sm:grid grid-cols-6 gap-20 ">
        <div className=" ml-[auto] mr-[auto] sm:flex flex-col gap-2 pl-[20px] pt-2 rounded-md bg-white h-[150px] w-[150px]" >
            <p className="font-[500]"> Employee Handbook</p>
            <div className="w-20 h-20 rounded-full border-2 flex p-3 relative bg-[#EEBACB]"> 
             <img className="absolute top-0 bottom-3" src ={firsttemp} />
            </div>
        </div>
        <div className="ml-[auto] mr-[auto] sm:border-3 h-[150px] w-[150px] bg-white">
        <div className=" flex flex-col gap-2 pl-[20px] pt-2 rounded-md" >
            <p className="font-[500]"> Weekly<p>Reviews</p></p>
            <div className="w-20 h-20 rounded-full border-2 flex p-3 relative bg-[#EEBACB]"> 
             <img className="absolute top-0 bottom-3" src ={secondtemp} />
            </div>
        </div>
    </div>
    <div className="ml-[auto] mr-[auto] sm:border-3 h-[150px] w-[150px] bg-white">
        <div className="flex flex-col gap-2 pl-[20px] pt-2 rounded-md" >
            <p className="font-[500]"> Product Planning</p>
            <div className="w-20 h-20 rounded-full border-2 flex p-3 relative bg-[#EEBACB]"> 
             <img className="absolute top-0 bottom-3" src= {thirdtemp} />
            </div>
        </div>

    </div>
    <div className="ml-[auto] mr-[auto] sm:border-3 h-[150px] w-[150px] bg-white">
        <div className="flex flex-col gap-2 pl-[20px] pt-2 rounded-md" >
            <p className="font-[500]"> Onboarding Checklist</p>
            <div className="w-20 h-20 rounded-full border-2 flex p-3 relative bg-[#EEBACB]"> 
             <img className="absolute top-0 bottom-3" src ={fourthtemp} />
            </div>
        </div>

    </div>
    <div className="ml-[auto] mr-[auto] sm:border-3 h-[150px] w-[150px] bg-white">
        <div className="flex flex-col gap-2 pl-[20px] pt-2 rounded-md" >
            <p className="font-[500]"> Product Specification</p>
            <div className="w-20 h-20 rounded-full border-2 flex p-3 relative bg-[#EEBACB]"> 
             <img className="absolute top-0 bottom-3" src ={fifthtemp} />
            </div>
        </div>
    </div>
    <div className="ml-[auto] mr-[auto] sm:border-3 h-[150px] w-[150px] bg-white">
        <div className="flex flex-col gap-2 pl-[20px] pt-2 rounded-md" >
            <p className="font-[500]"> Talent Acquisition</p>
            <div className="w-20 h-20 rounded-full border-2 flex p-3 relative bg-[#EEBACB]"> 
             <img className="absolute top-0 bottom-3" src ={sixthtemp} />
            </div>
        </div>

        

    </div>
   

        

    </div>
    
   
    
       



    </div>




    </div>
  
   
  )
  
}

export default Templates