import React from 'react';
import ConnectButton from '../components/ConnectButton';

function Intro() {
    return (
        <section
            id="about"
            className="flex items-center justify-center pt-20 pb-6 m-[15%] mt-0 leading-loose">
                    <div className="my-4">
                        <h1 className="align-top text-4xl dark:text-white ">
                            Design oriented developer, <br /> 
                            Civic tech enthusiast, <br />
                            & Creative
                        </h1>
                        
                        <hr class="w-48 h-px bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-950"></hr>

                            <div className="space-y-4 text-xl">

                            <p className="w-[70%]">
                                Hi, I'm Kelly!
                            </p>

                            <p className="w-[80%]">
                                I'm a fourth year Computer Science undergrad interested in crafting user-centered digital experiences
                                to empower communities and drive positive change. <br />
                            </p>

                            </div>
                            
                    </div>
                    
                    <div>
                        <img className="max-w-sm"
                            src='/assets/When I Grow Up.JPG' />
                    </div>

                    
                

        </section>
    )
}

export default Intro;