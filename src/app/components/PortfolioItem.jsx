import React from 'react';

function PortfolioItem({ title, desc, imgUrl, type, stack, link, id }) {
    return (
        <div id="parent-box" className=" flex flex-col border-2 border-stone-900 rounded-md overflow-hidden ">
            <div className="w-full p-2 pl-4 bg-blue-100 text-gray-700">{type}</div>

            <div className="flex flex-col flex-grow justify-between"> 
                <div className=" w-full pl-4 mt-2 ">
                    <h3 className="text-xl font-bold overflow-hidden">{title}</h3>
                    <p className="mt-2 mr-2 mb-2">{desc}</p> 
                </div>

                <div
                    id="tags"
                    className="flex flex-col justify-between w-full p-4 pt-2"
                >
                    <section>
                    <button className="mt-4 mb-4 bg-transparent hover:bg-blue-300 space-between text-black text-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-md">
                        Learn More
                    </button>

                    <hr className="border-dashed border-black border-spacing-x-3 mb-4 dark:to-black"></hr>

                    </section>
                
                    
                    <div className="flex flex-wrap flex-row items-end justify-start text-xs md:text-sm gap-2 mt-0 mb-2">
                        {stack.map(item => (
                            <span key={item.id}
                                    className="bg-green-200 inline-block px-2 font-semibold border-2 border-stone-900 rounded-md">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default PortfolioItem;



