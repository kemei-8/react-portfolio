import React from 'react';

function Footer() {
    return (
        <section className="py-[5%] text-center">
            <div>
                <p className="text-sm mt-2 opacity-50">
                    Developed & Designed by Kelly Mei &copy; {new Date().getFullYear()}
                </p>
            </div>
        </section>
    )
}

export default Footer;