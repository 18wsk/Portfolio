import { useState, useRef, useEffect } from 'react';

const Banner = ({items}: {items: any[]}) => {
    const bannerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % items.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [currentIndex, items.length]);

    const handleTransitionEnd = () => {
        if (bannerRef.current !== null) {
            (bannerRef.current as HTMLDivElement).style.transition = 'none';
            if (currentIndex === items.length - 1) {
                setCurrentIndex(0);
                (bannerRef.current as HTMLDivElement).style.transform = `translateX(0)`;
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        }
    };

    const bannerStyles = {
        display: 'flex',
        transition: 'transform 2s',
        transform: `translateX(-${currentIndex * 100}%)`,
    };

    return (
        <div className="relative w-full h-full overflow-hidden p-8">
            <div className="absolute top-0 left-0 w-full h-full flex" style={bannerStyles}>
                <div className="flex-none w-full h-full " ref={bannerRef} style={{ display: 'flex' }} onTransitionEnd={handleTransitionEnd}>
                    {items.map((item: any, index: number) => (
                        <div key={index} className="flex flex-col justify-center items-center" style={{ minWidth: '100%' }}>
                            <img src={item.img} alt={item.name} className="object-contain w-full h-full xs:pb-10 lg:pt-4"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;