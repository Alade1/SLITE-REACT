import footerlogo from '../../assets/images/footerlogo.png'
import Button from './Button'


const Footer = () => {
  return (
    <div className='pt-[100px] bg-[#F9EFE4] pl-[2rem]'>
        <img src={footerlogo} />
    <div className="flex flex-col gap-4 pt-[10px] sm:grid grid-cols-6 sm:pr-[2rem] pl-[2rem] sm:pt-[50px]  ">
        <div className=''>
            <ul className='flex flex-col gap-4'>
                <li>What its for</li>
                <li>Knowledge base</li>
                <li>Working Remotely</li>
                <li>Fix remote meetings</li>
                <li>Onboarding Remotely</li>
                <li>Handbooks</li>
            </ul>


        </div>
        <div className=''>
            <ul className='flex flex-col gap-4'>
                <li>What its for</li>
                <li>Knowledge base</li>
                <li>Working Remotely</li>
                <li>Fix remote meetings</li>
                <li>Onboarding Remotely</li>
                <li>Handbooks</li>
            </ul>


        </div>
        <div className=''>
            <ul className='flex flex-col gap-4'>
            <li>Resources</li>
                <li>Templates</li>
                <li>Learn</li>
                <li>Startup Bibles</li>
                <li>Remote Handlebook</li>
                <li>Management Handbook</li>
                <li>Download Apps</li>
                <li>Chrome Extension</li>
            </ul>


        </div>
        <div className=''>
            <ul className='flex flex-col gap-4'>
                <li>Slite</li>
                <li>About Us</li>
                <li>Find us on Twitter</li>
                <li>Careers</li>
                <li>Customers</li>
                <li>Press Kit</li>
            </ul>


        </div>
        <div className=''>
            <ul className='flex flex-col gap-4'>
                <li>Compare</li>
                <li>Notion</li>
                <li>Confluence</li>
                <li>Google Docs</li>
                <li>Dropbox paper</li>
                <li>All comparison</li>
            </ul>


        </div>


      <div className='relative flex flex-col gap-4'>
        <p>Remote letters to read on your own time</p>
        <input className='mt-[20px] h-[70px]  rounded-full bg-transparent border-2 border-black w-[200px] p-6 " type="Email" name="E-mail" placeholder="name@company.com" ' />
        <Button
        text={""}
        className={" w-20 h-20 rounded-full border-2 flex p-3  bg-[#176AE5] absolute top-[78px] left-[130px] "}
        />
        <p className='pt-[18px]' >100% homemade, no tricks or ponies or growth hacking nonsense. Just remote things we care about with a short surprising insight every week. No rush.</p>
      </div>
   
    </div>



    </div>
  )
}

export default Footer