import React from 'react';

function StickyFooter() {
    return (
        <footer className="text-center text-lg sticky bottom-0 bg-white">
            
            <div className="p-5 stick bottom-0">
                <ul className="flex flex-row justify-center gap-8">
                    <li>
                        <a href="https://www.linkedin.com/in/kelly--mei/">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/kemei-8">Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/kelly--mei/">CV</a>
                    </li>
                </ul>
            </div>
            
        </footer>
    )
}

export default StickyFooter;