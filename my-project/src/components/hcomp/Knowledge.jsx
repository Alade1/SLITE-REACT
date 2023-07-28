import WikiImage from '../../assets/images/Wiki.png'
import laptopfile from '../../assets/images/laptop.png'

const Knowledge = () => {
  return (
    <div className="pt-[80px] bg-[#F9EFE4]">
        <p className=" text-[25px]  md:text-[40px] font-[500] text-center">A home for all of your knowledge.</p>
        <p className="text-[20px] pt-[20px] pl-[20px] pr-[20px] text-center md:text-center">Project, knowledge base, process - bring all your work to life in Docs.</p>

    <div className='flex justify-start gap-[100px] pt-[80px] pl-[2rem] pr-[2rem]'>
        <ul className='hidden md:flex flex-col gap-8'>
            <li><a className='hover:bg-white' href=''>Wiki</a></li>
            <li><a className='hover:bg-white' href=''>Project</a></li>
            <li><a className='hover:bg-white' href=''>Processes</a></li>
            <li><a className='hover:bg-white' href=''>Onboarding</a></li>
            <li><a className='hover:bg-white' href=''>Meetings</a></li>
            <li><a className='hover:bg-white' href=''>Team Updates</a></li>
            <li><a className='hover:bg-white' href=''>1:1s</a></li>
            <li><a className='hover:bg-white' href=''>User research</a></li>
            <li><a className='hover:bg-white' href=''>More</a></li>

        </ul>
        <div className='relative'>
            <img src={WikiImage} alt =""/>
            <img  className ='absolute top-4'src={laptopfile} alt =""/>
        </div>


    </div>
    </div>
  )
}

export default Knowledge