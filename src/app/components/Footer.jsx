import React from 'react';

function Footer() {
    return (
        <footer className="py-[5%] text-center">
            <div>
                <p className="text-sm mt-2 opacity-50">
                    Developed & Designed by Kelly Mei &copy; {new Date().getFullYear()}
                </p>
            </div>
            
            <div className="p-5">
                <ul className="flex flex-row justify-center gap-5">
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

export default Footer;