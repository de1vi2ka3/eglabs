import React from 'react'
import img1 from '../../assets/image 6.png'
function ourteam_desk() {
    return (
        <div>
             <p className>Team Members</p>
            <div className="grid grid-cols-2  ">
                <div>
                    <img className="h-32 w-32 mb-4 ml-48" src={img1} />
                </div>

                <div>
                    <p className="text-3xl ml-16 mb-4">How do I contribute to the <br />growth of the company ?</p>
                    <p className="ml-16 mr-16"> I am fluttering through the unreleased products of the company like Memshots
                        ( an online wedding album)
                        and Weva Prime (an OTT platform for kids).</p>


                    <p className="text-xl ml-16 mb-4 mt-12">My tools</p>
                    <p className="ml-16 mr-16">Flutter, Dart, YAML</p>

                    <p className="text-xl ml-16 mb-4 mt-12">My learning curve</p>
                    <p className="ml-16 mr-16">Working at EGL has helped me dart swiftly towards becoming a pro fluterrer.
                        I got the opportunity to understand the internal workings and management of an IT company
                        and also the various stages of production. I am also learning the threads of mobile app development.</p>

                    <p className="text-xl ml-16 mb-4 mt-12">My opinion about working at Eglabs so far</p>
                    <p className="ml-16 mr-16">The supportive work environment at EGL has helped me drop my apprehensions that I had as a fresher.
                        I was worried whether anybody would help me if I got stuck in my work.
                        All my colleagues including our CTO supported me a lot.</p>

                    <p className="text-xl ml-16 mb-4 mt-12">My hobbies</p>
                    <p className="ml-16 mr-16">
                        I like reading a lot of books related to Physics, playing Football and Cricket.
                        I also travel extensively and take out time daily for gaming.
                    </p>

                    <p className="text-xl ml-16 mb-4 mt-12">Future career plans</p>
                    <p className="ml-16 mr-16">
                        I aspire to do a PhD in Cyber Security and develop a hack proof banking network.
                    </p>


                </div>



            </div>
        </div>
    )
}

export default ourteam_desk
