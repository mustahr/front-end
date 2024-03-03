'use client'
import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft, MapPinned } from 'lucide-react';
import Link from 'next/link';
import { Trip } from '@/types';

interface SliderProps {
    data: Trip[];
}


const Slider = () => {

// const Slider: React.FC<SliderProps> = ({
//     data
// }) => {

    const slidesData = [
        {
            imageUrl: "https://img.freepik.com/free-photo/aerial-view-koh-hong-island-krabi-thailand_335224-1378.jpg?t=st=1709464873~exp=1709468473~hmac=96f7ddc0f64c3aa3b1ce3d2ae76fb6276d886cf3c7b4ffffb75166c848c63b57&w=740",
            title: "MARRAKESH",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur consequuntur cupiditate oditquisquam expedita optio iusto animi.",
            url: "#"
        },
        {
            imageUrl: "https://img.freepik.com/free-photo/landscape-tropical-green-forest_181624-30814.jpg?t=st=1709464909~exp=1709468509~hmac=ba1651880d1ce758afc456ce7f113e8c4ed8fa8079fb7480aab1410fa889fd7f&w=740",
            title: "RABAT",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur consequuntur cupiditate oditquisquam expedita optio iusto animi.",
            url: "#"
        },
        {
            imageUrl: "https://img.freepik.com/free-photo/sunny-scenery-arabian-male-stripped-thawb-walking-big-urban-area_181624-38428.jpg?t=st=1709464891~exp=1709468491~hmac=c4304882a5c5f5dec4da6ed34c31f77de6968da0106c3bcd120cf58e79c826dd&w=740",
            title: "MEKNES",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur consequuntur cupiditate oditquisquam expedita optio iusto animi.",
            url: "#"
        },
        {
            imageUrl: "https://img.freepik.com/free-photo/woman-with-hat-sitting-chairs-beach-beautiful-tropical-beach-woman-relaxing-tropical-beach-koh-nangyuan-island_335224-1111.jpg?t=st=1709464859~exp=1709468459~hmac=f3a5fe67802e7a90e183da9b8389e6779251539d4f7b3bb4431eb2e1e8526833&w=740",
            title: "FES",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur consequuntur cupiditate oditquisquam expedita optio iusto animi.",
            url: "#"
        },
        {
            imageUrl: "https://img.freepik.com/free-photo/beautiful-girl-traditional-carpet-shop-goreme-city-cappadocia-turkey_335224-554.jpg?t=st=1709464841~exp=1709468441~hmac=43c080f503d6263ea604a11c0d665dc977d7b5d4713a8e7bf4474d7a9c72e778&w=740",
            title: "OUARZAZATE",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur consequuntur cupiditate oditquisquam expedita optio iusto animi.",
            url: "#"
        },
        {
            imageUrl: "https://img.freepik.com/free-photo/koutoubia-mosque-marrakech-sunrise_268835-3992.jpg?t=st=1709464823~exp=1709468423~hmac=9ba12b2b03082e1ba1505144e7650cee7c28fb1a2ecf22685a209a9c09444034&w=740",
            title: "ZAGOURA",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur consequuntur cupiditate oditquisquam expedita optio iusto animi.",
            url: "#"
        },
    ];


    const slider = useRef<HTMLDivElement>(null);

    function nextSlide() {
        let firstSlide = slider.current?.firstElementChild;
        if (firstSlide) {
            slider.current?.removeChild(firstSlide);
            slider.current?.appendChild(firstSlide);
        }
    }
    function prevSlide() {
        let lastSlide = slider.current?.lastElementChild;
        if (lastSlide) {
            slider.current?.removeChild(lastSlide);
            slider.current?.prepend(lastSlide);
        }
    }
    return (
        <div className="relative w-full h-screen overflow-hidden flex justify-center items-center">
            <div className="absolute top-0 right-0 bottom-16 left-0 animate-fromTop-anime duration-500 ease-in" ref={slider}>
                {slidesData.map((slide, index) => (
                    <div key={index} className='slides absolute top-[60%] transform translate-x-0 -translate-y-[40%] w-[140px] h-[200px] bg-full bg-center rounded-2xl shadow-2xl transition-all duration-500 flex items-center justify-start overflow-hidden'
                        style={{ backgroundImage: "url('" + slide.imageUrl + "')" }}>
                        <div className="content text-white absolute p-10 pl-24 transition-all delay-300 transform translate-x-0 translate-y-[40px] z-10 opacity-0 blur-[33px]">
                            <h2 className='text-8xl font-black'>{slide.title}</h2>
                            <p className='max-w-[600px] mb-10 mt-5'>
                                {slide.text}
                            </p>
                            <Link href={slide.url} className="button-50">
                                Learn More
                            </Link>
                        </div>
                        <div className="content-2 absolute right-0 bottom-0 left-0 h-1/2 flex items-end rounded-xl pt-3 pr-0 pb-6 pl-3 bg-gradient-to-b from-transparent to-black">
                            <div className='flex items-center'>
                                <MapPinned className="w-4 h-4 mr-2 text-white" />
                                <h2 className='text-sm font-extrabold text-white tracking-[1px]'>{slide.title}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-28 left-[50%] transform -translate-x-[50%] flex gap-5 z-20">
                <div onClick={prevSlide} className='cursor-pointer bg-black/70 border border-white/50 p-2 rounded-full active:opacity-50'>
                    <ChevronLeft className='text-white' />
                </div>
                <div onClick={nextSlide} className='cursor-pointer bg-black/70 border border-white/50 p-2 rounded-full active:opacity-50'>
                    <ChevronRight className='text-white' />
                </div>
            </div>
        </div >
    );
};

export default Slider