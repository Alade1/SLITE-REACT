import Button from "./Button"
import cpo from '../../assets/images/cpo.png'

const Ideas = () => {
  return (
    <div className="bg-[#F9EFE4] pt-[100px] relative">

        <p className=" text-[30px] text-center md:text-center text-[42px] font-[500]">Move ideas forward.</p>
        <p className="text-center text-[42px] font-[500]">Docs, meet Discussions.</p>
        <p className="w-[80%] ml-[auto] mr-[auto] mt-5 font-[500]">Decisions do not work on their own, and neither does your team. In Slite, decision-making and async discussion comes built-in, inside Docs. Say goodbye to scattered conversations and endless Slack threads.</p>
        <div className="ml-[auto] mr-[auto]">
        <Button
        text={"I want that too"}
        className={"bg-[#176AE5] text-[white] p-3 rounded-full w-[190px] mt-10 "}
        />
        </div>

        <div className= "bg-black w-[400px] h-[400px] mt-[40px] ml-[30px] relative sm:w-[1200px] sm:ml-[auto] mr-[auto] ">
        <Button
        text={"PLAY"}
        className={"bg-[#2F2F30] text-[white] rounded-full w-[100px] absolute bottom-0 left-[130px] mb-[20px] sm:absolute sm:left-[470px]  "}
        />


        </div>
        
        <div className="border-t-2 border-b-2 border-black mt-[70px] w-[51%] ml-[auto] mr-[auto] relative bg-[#F9EFE4] ">
            <p className="italic pt-7 pb-7 pl-7 pr-7">Slite let us bring the two most important communication bits in the same place: documentation & decision-making. The connection between docs and discussions makes decision-making more efficient, transparent & contextualized.</p>
            <p className="text-[10px] font-[600] text-center pb-4"> SEBASTIAN GRENDAU</p>
            <p className="text-[10px] font-[400] text-center pb-4">CPO of AGORAPULSE</p>
            <img className=" hidden sm:block absolute left-[500px] bottom-0 top-[150px] " src ={cpo} />
        </div>

        <div className="flex flex-col justify-center gap-4 px-[30px] mt-4 sm:flex-row justify-around mt-[100px] ">

            <div className ="mt-0">
                <p className="text-[42px] w-[60%]">A radical change at a fair price.</p>
                <p className="w-[60%] pt-[10px] pb-6">Give Slite a try. Save 16% on annual commitment.Big team? check the enterprise plan.</p>
                <Button
        text={"Start for free"}
        className={"bg-[#176AE5] text-[white] p-3 rounded-full w-[150px] mr-[40px]   "}
        />
         <Button
        text={"Compare all plans"}
        className={"text-[black] border-2 border-black rounded-full p-3  w-[180px]   "}
        />

            </div>
            <div className="h-[250px] w-[200px] bg-transparent border-black border-2 rounded-md relative pt-[20px]">
                <p className="text-center font-[500] text-[30px]"> Free</p>
                <p className="text-center pt-2">Plan</p>
                <div className=" pl-[20px] pr-[20px]">
                <p className="text-[60px] text-center">$0 <span className="text-[10px] absolute top-[120px]">/month</span> </p>
                <p className="mt-50px text-center">Up to 50 docs</p>
                </div> 

            </div>
            <div className="h-[250px] w-[200px] bg-transparent border-black border-2 rounded-md relative pt-[20px]">
                <p className="text-center font-[500] text-[30px]"> Standard </p>
                <p className="text-center pt-2">Plan</p>
                <div className=" pl-[20px] pr-[20px]">
                <p className="text-[60px] text-center">$6 <span className="text-[20px] absolute bottom-[100px]">67</span> <span className="text-[10px] absolute top-[120px] left-[160px]">/month</span> </p>
                <p className="mt-50px text-center">Up to 50 docs</p>
                </div> 

            </div>
            
       
       

    </div>
    </div>
  )
}

export default Ideas