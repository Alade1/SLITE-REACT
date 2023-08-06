import ctoone from '../../assets/images/ctoone.png'
import ctotwo from '../../assets/images/ctotwo.png'
import ctothree from '../../assets/images/ctothree.png'
import ctofour from '../../assets/images/ctofour.png'
import ctofive from '../../assets/images/ctofive.png'
import ctosix from '../../assets/images/ctoseven.png'
import ctoseven from '../../assets/images/ctoeight.png'
import ctoeight from '../../assets/images/ctonine.png'

const Reviews = () => {
  return (
    <div className="flex flex-col gap-4 pt-[20px] bg-[#F9EFE4] pl-[30px] sm:grid grid-cols-3 sm:pl-[2rem]  ">
        <div className="w-[400px] h-[270px] bg-white border-white rounded-md border-2">
            <p className="p-[30px]">`{"The most important thing in a wiki (in my opinion) is how tight the edit/ collaboration tool is. Most Wikis are pretty bad there. But Slite is an exampleof wiki that allows simultaneous editing "}`</p>
            <div className='flex justify-between'> 
            <div className='pl-[30px]'>
                <p className="text-[10px] font-[700]">JADE RUBICK</p>
                <p className="text-[10px]"> CTO, GREMLIN</p>
            </div>

                <div className='pr-[30px]'>
                    <img src ={ctoone} />
                </div>

            </div>
        </div>
        <div className="w-[400px] h-[270px] bg-white border-white rounded-md border-2">
            <p className="p-[30px]">`{"Communication is key to scale a business.Slite is the best to keep things in writng. Easy to usw for everyone. Templates to adopt the best pratices. Summary to stay up to date on all topics"}`</p>
            <div className='flex justify-between'> 
            <div className='pl-[30px]'>
                <p className="text-[10px] font-[700]">LEE LEO</p>
                <p className="text-[10px]"> CTO, LOG DNA</p>
            </div>

                <div className='pr-[30px]'>
                    <img src ={ctotwo} />
                </div>

            </div>
        </div>
        <div className="w-[400px] h-[270px] bg-white border-white rounded-md border-2">
            <p className="p-[30px]">`{"Slite is easier to use on a daily basis. We chose to avoid a distracting tool to offer a place of focus and clarity. The tips on how to structure our knowledge were also a big plus"}`</p>
            <div className='flex justify-between'> 
            <div className='pl-[30px]'>
                <p className="text-[10px] font-[700]">THIBAULT MORLOT</p>
                <p className="text-[10px]"> VP OPERATIONS, SHIPPEO</p>
            </div>

                <div className='pr-[30px]'>
                    <img src ={ctothree} />
                </div>

            </div>
        </div>
        <div className="w-[400px] h-[270px] bg-white border-white rounded-md border-2">
            <p className="p-[30px]">`{"Slite let us bring the two most important communication bits in the same place: documentation & decision-making. The connection between docs and discussions makes decision making more efficient, transperant and conceptualized"}`</p>
            <div className='flex justify-between'> 
            <div className='pl-[30px]'>
                <p className="text-[10px] font-[700]">SEBASTIAN GRANDEU</p>
                <p className="text-[10px]">Head of product, AgoraPulse 175+ teammates</p>
            </div>

                <div className='pr-[30px]'>
                    <img src ={ctofour} />
                </div>

            </div>
        </div>
        <div className="w-[400px] h-[270px] bg-white border-white rounded-md border-2">
            <p className="p-[30px]">`{"The reason why certain decisions were made can be found in one place and not scattered across different Slack channels"}`</p>
            <div className='flex justify-between'> 
            <div className='pl-[30px]'>
                <p className="text-[10px] font-[700]"> BY JUGITA PAULAUSKITE</p>
                <p className="text-[10px]"> Customer Success, Tymeshift 75+ teammates</p>
            </div>

                <div className='pr-[30px]'>
                    <img src ={ctofive} />
                </div>

            </div>
        </div>
        <div className="w-[400px] h-[270px] bg-white border-white rounded-md border-2">
            <p className="p-[30px]">`{"As we're growing fast, the ease of adoption is a crucial element when choosing a new solution. You can see that Slite is more user friendly, and its similarities with Slack make it easier to adopt. "}`</p>
            <div className='flex justify-between'> 
            <div className='pl-[30px]'>
                <p className="text-[10px] font-[700]">MARTIJN HAZELAAR</p>
                <p className="text-[10px]"> Head of Digital, Vanmoof 500+ teammates
</p>
            </div>

                <div className='pr-[30px]'>
                    <img src ={ctosix} />
                </div>

            </div>
        </div>
        <div className="w-[400px] h-[270px] bg-white border-white rounded-md border-2">
            <p className="p-[30px]">`{"We switched from Confluence to Slite because Slite is easy to use for the entire company not just the product team. Now the entire company writes and organizxes content in Slite "}`</p>
            <div className='flex justify-between'> 
            <div className='pl-[30px]'>
                <p className="text-[10px] font-[700]">DONALD SIPE</p>
                <p className="text-[10px]"> Solutions Architect, JobTarget 300+ teammates</p>
            </div>

                <div className='pr-[30px]'>
                    <img src ={ctoseven} />
                </div>

            </div>
        </div>
        <div className="w-[400px] h-[270px] bg-white border-white rounded-md border-2">
            <p className="p-[30px]">`{"Perfect example of a product that delivers the 80/20 rule. No fluff and simple. Yougive me the top 20% of what i need that gets 80% done. Great for managing internal teams and simplyfing docs"}`</p>
            <div className='flex justify-between'> 
            <div className='pl-[30px]'>
                <p className="text-[10px] font-[700]">ERIC FETTNER</p>
                <p className="text-[10px]">Cofounder & COO, THE JOB SAUCE 20+ teammates</p>
            </div>

                <div className='pr-[30px]'>
                    <img src ={ctoeight} />
                </div>

            </div>
        </div>



    </div>
  )
}

export default Reviews