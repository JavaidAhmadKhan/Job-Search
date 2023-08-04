import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <nav className="grid grid-cols-3 p-6">
            <h1 className="text-black/60 font-bold text-xl">Job Search</h1>
            <ul className="flex items-center justify-between gap-4 ml-auto font-semibold text-[16px] text-black/60">
                <li>Home</li>
                <li>Servies</li>
                <li>Team</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <div className='flex items-end justify-end gap-6'>
                <a href="https://www.instagram.com" target='_blank' rel="noreferrer" >
                    <Instagram size={26} />
                </a>
                <a href="https://www.facebook.com" target='_blank' rel="noreferrer" >
                    <Facebook size={26} />
                </a>
                <a href="https://www.linkedin.com" target='_blank' rel="noreferrer" >
                    <Linkedin size={26} />
                </a>
                <a href="https://www.twitter.com" target='_blank' rel="noreferrer" >
                    <Twitter size={26} />
                </a>
            </div>
        </nav>
    )
}

export default Footer