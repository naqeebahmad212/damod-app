"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from '@/lib/page';
import Image from 'next/image';
import bg from '@/images/black-bg.png';
import round from '@/images/slidershapeimage/round-diamond.png';
import heart from '@/images/slidershapeimage/heart.png';


export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
    };

    return (
        <div className="w-full h-full no-repeat font-Fahkwang pt-16">
           <div className="absolute top-0 right-0">
                <Image src={bg} alt="Hero Background" />
            </div> 
            <div className="relative mb-5">
                <p className="text-xl lg:text-3xl text-3xl text-[#969696] md:text-white text-center mb-0">WE TRADE </p>
                
            </div>
            <div className="bg-gradient-to-r from-[#EBEBEB] to-[#484848] h-40 max-w-4xl mx-auto opacity-20 rounded-full absolute left-0 right-0 z-50 top-96 hidden 2xl:block" ></div>
        <Slider {...settings} className="overflow-hidden relative z-50 outline-none focus:outline-none focus-visible:outline-none">
            
            <div  className="flex justify-center focus-visible:ring-0 focus-outline-none">
                <h2 className="text-3xl lg:text-5xl md:text-6xl text-[#969696] text-center mb-0 lg:mb-5">Natural Diamond</h2>
                <Image src={round} alt="Round Shape Diamond"  className="mx-auto scale-75 md:scale-100"/>
            </div>
        
            <div  className="flex justify-center">
                <h2 className="text-3xl lg:text-5xl md:text-6xl text-[#969696] text-center mb-0 lg:mb-5">Lab Grown Diamond</h2>
                <Image src={heart} alt="Heart Shape Lab Grown Diamond" className="mx-auto scale-75 md:scale-100"/>
            </div>

        </Slider>
        </div>
    );
}
