import React from 'react';
import Image from 'next/image';
import ConnectButton from '../components/ConnectButton';

function Intro() {
    return (
        <section
            id="about"
            className="flex flex-col md:flex-row items-center justify-center 15 mx-[15%] leading-loose">
                    <div className="my-4">
                        <h1 className="align-top text-4xl dark:text-white ">
                            Design oriented developer, <br /> 
                            Civic tech enthusiast, <br />
                            & Creative
                        </h1>
                        
                        <hr class="w-48 h-px bg-gray-400 border-0 rounded my-10 dark:bg-gray-950"></hr>

                            <div className="space-y-4 text-xl">

                            <p className="w-[70%]">
                                Hi, I&apos;m Kelly!
                            </p>

                            <p className="w-[80%]">
                                I&apos;m a fourth year Computer Science undergrad at Northwestern interested in crafting user-centered digital experiences
                                to empower communities and drive positive change. <br />
                            </p>

                            </div>
                            
                    </div>
                    
                    <div>
                        <Image className="max-w-sm"
                            src="/assets/favcomp.png"
                            alt="Scan of kingergarten writing sample"
                            width={791}
                            height={1024} />
                    </div>

                    
                

        </section>
    )
}

export default Intro;