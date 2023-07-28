import vandoo from "../assets/images/teama.png"
import bamboohr from "../assets/images/teamb.png"
import agorapulse from "../assets/images/teamc.png"
import spotify from "../assets/images/teamd.png"
import Angloamerican from "../assets/images/teame.png"
import meero from '../assets/images/teamee.png'

const Teams = () => {
  return (
    
     <div>
        <p className="pt-[30px] bg-[#F9EFE4] font-semibold text-center">200,000+ teams have found focus with Slite</p>
    <div className=" bg-[#F9EFE4] flex  justify-around pt-[40px]">
        <img src={vandoo} alt="" />
        <img src={bamboohr} alt="" />
        <img src={agorapulse} alt=""/>
        <img src={spotify} alt="" />
        <img src={Angloamerican} alt="" />
        <img src={meero} alt="" />


    </div>
    </div>
   
  )
}

export default Teams