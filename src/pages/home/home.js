import React from 'react'
import img1 from '../../assets/image 6.png'
import img2 from '../../assets/image 7 (1).png'
import img3 from '../../assets/image 9.png'
import img4 from '../../assets/image 11.png'
function home() {
    return (
        <div>
           <div class="grid grid-cols-2  ">
                <div className="p-32 font-medium">
                    <p className="text-3xl ">Your tech mentor to fire up<br/>
                    your entrepreneurial journey</p>
                    <p className="pt-6">Boot-up your start-up idea in no time with the help
                     of our <br/>experienced and trusted tech advisors who not only <br/> 
                     provide help in building the entire IT set-up but also <br/>
                      provide resources to help you keep going. 
                    Save your time, <br/> optimize your costs and propel 
                    your start-up idea <br/> seamlessly.</p>

                    <input className="w-24 h-10 bg-white border-black  border-2 m-4 text-sm" type="button" value="Know More" placeholder="" ></input>
                    <input className="w-32 h-10 bg-black text-white text-sm" type="button" value="Book a call with Us" placeholder=""></input>
                </div>
               
                <div className="">
                    11111
                </div>
               
            </div> 
            
                <p className="text-3xl pl-32">Our Core Capabilites</p>
            <div class="grid grid-cols-2  ">
                <div className="px-32 pt-16 font-medium">
                <img className="h-72 w-72 mb-4" src={img1}/>
                    <p className="text-3xl ">Artificial Intelligence</p>
                    <p className="pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis condimentum consectetur placerat lobortis nibh sed consequat. Nunc pharetra cras vitae consequat facilisis phasellus. Habitant egestas id tellus sed urna ultricies ullamcorper. Sed fusce elit nec, in commodo, ac..</p>

                    <input className="w-24 h-10 bg-white border-black  border-2 m-4 text-sm" type="button" value="Know More" placeholder="" ></input>
                    <input className="w-32 h-10 bg-black text-white text-sm" type="button" value="Book a call with Us" placeholder=""></input>
                </div>
               
                <div className="">
                  
                   <div className="px-32 pt-16 font-medium">
                   <img className="h-72 w-72 mb-4" src={img2}/>
                    <p className="text-3xl ">Web App development</p>
                    <p className="pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis condimentum consectetur placerat lobortis nibh sed consequat. Nunc pharetra cras vitae consequat facilisis phasellus. Habitant egestas id tellus sed urna ultricies ullamcorper. Sed fusce elit nec, in commodo, ac.</p>
                    <input className="w-24 h-10 bg-white border-black  border-2 m-4 text-sm" type="button" value="Know More" placeholder="" ></input>
                    <input className="w-32 h-10 bg-black text-white text-sm" type="button" value="Book a call with Us" placeholder=""></input>
                </div>
                </div>
                {/* Our Core Capabilites */}
            </div> 

            <div class="grid grid-cols-2  ">
                <div className="px-32 pt-16 font-medium">
                <img className="h-72 w-72 mb-4" src={img3}/>
                    <p className="text-3xl ">Mobile App development</p>
                    <p className="pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis condimentum consectetur placerat lobortis nibh sed consequat. Nunc pharetra cras vitae consequat facilisis phasellus. Habitant egestas id tellus sed urna ultricies ullamcorper. Sed fusce elit nec, in commodo, ac..</p>

                    <input className="w-24 h-10 bg-white border-black  border-2 m-4 text-sm" type="button" value="Know More" placeholder="" ></input>
                    <input className="w-32 h-10 bg-black text-white text-sm" type="button" value="Book a call with Us" placeholder=""></input>
                </div>
               
                <div className="">
                  
                   <div className="px-32 pt-16 font-medium">
                   <img className="h-72 w-72 mb-4" src={img4}/>
                    <p className="text-3xl ">Cloud computing</p>
                    <p className="pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis condimentum consectetur placerat lobortis nibh sed consequat. Nunc pharetra cras vitae consequat facilisis phasellus. Habitant egestas id tellus sed urna ultricies ullamcorper. Sed fusce elit nec, in commodo, ac.</p>
                    <input className="w-24 h-10 bg-white border-black  border-2 m-4 text-sm" type="button" value="Know More" placeholder="" ></input>
                    <input className="w-32 h-10 bg-black text-white text-sm" type="button" value="Book a call with Us" placeholder=""></input>
                </div>
                </div>
                {/* Our Core Capabilites */}
            </div> 
        </div>
    )
}

export default home
