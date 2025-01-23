import React, { useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

const CarouselAd = ({ slides, type }) => {
    // Calculate the total number of pages
    const itemsPerPage = 4;
    const totalSlides = Math.ceil(slides.length / itemsPerPage);
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };
    const groupedSlides = [];
    for (let i = 0; i < slides.length; i += itemsPerPage) {
        groupedSlides.push(slides.slice(i, i + itemsPerPage));
    }

    return (
        <div className="relative overflow-hidden">
            <div
                className={`flex transition-transform ease-out duration-300`}
                style={{ transform: `translateX(-${current * 100 / 2}%)`, width: `${totalSlides * 100}%` }}
            >
                {groupedSlides.map((group, index) => (
                    <div
                        key={index}
                        className="flex flex-shrink-0 w-full"
                        style={{ width: `${100 / totalSlides}%` }}
                    >
                        {group.map((s, idx) => (
                            <div key={idx} className="flex flex-col w-1/4 p-2 border-2 border-white hover:border-black">
                                {type === "product" ? (
                                    <><div className="relative">
                                        <img className="pe-5" src={s} alt={`Slide ${idx}`} />
                                        <p className="absolute bottom-0 bg-white text-sm">800.000d</p>
                                    </div><div className="text-sm">
                                            <p>Ao thun</p>
                                            <p>Sportwear</p>
                                        </div></>
                                ) : (
                                    <><div className="relative">
                                    <img className="pe-5" src={s} alt={`Slide ${idx}`} />
                                </div><div className="space-y-5">
                                        <p className='text-xl font-bold'>Quan legging tap luyen</p>
                                        <p className='text-sm'>Tap quat nang,nang ta va chay bo</p>
                                        <button className='text-xl font-bold border-b-2 border-black'>
                                            Mua ngay
                                        </button>
                                    </div></>
                                )}

                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                <button onClick={previousSlide}>
                    <BsFillArrowLeftCircleFill />
                </button>
                <button onClick={nextSlide}>
                    <BsFillArrowRightCircleFill />
                </button>
            </div>
            <div className="py-4 flex justify-center gap-3 w-full">
                {Array.from({ length: totalSlides }).map((_, i) => (
                    <div
                        key={`circle-${i}`}
                        onClick={() => setCurrent(i)}
                        className={`w-full h-full ${i === current ? "bg-black border-2 border-black" : "bg-white"} cursor-pointer transition-all duration-300`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarouselAd;
