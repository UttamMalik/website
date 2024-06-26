import React, { useEffect, useState, useRef } from 'react';
import './AllBrands.css';

const brands = [
    { name: 'Marriott', src: 'images/Brands/marriott.jpg' },
    { name: 'GE', src: 'images/Brands/ge.jpg' },
    { name: 'Electrolux', src: 'images/Brands/electrolux.jpg' },
    { name: 'T-Mobile', src: 'images/Brands/tmobile.jpg' },
    { name: 'Regal', src: 'images/Brands/regal.jpg' },
    { name: 'Chick-fil-A', src: 'images/Brands/chickfila.jpg' },
    { name: 'Gatorade', src: 'images/Brands/gatorade.jpg' },
    { name: 'UBS', src: 'images/Brands/ubs.jpg' },
    { name: 'Keurig', src: 'images/Brands/keurig.jpg' },
    { name: 'Formula-e', src: 'images/Brands/formulae.jpg' },
    { name: 'Alteon Health', src: 'images/Brands/AlteonHealth.jpg' },
    { name: 'Polestar', src: 'images/Brands/polestar.jpg' },
];

export default function AllBrands() {
    const [visibleBrands, setVisibleBrands] = useState([]);
    const [showBrands, setShowBrands] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setShowBrands(true);
                    handleScroll.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            handleScroll.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                handleScroll.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (showBrands) {
            brands.forEach((brand, index) => {
                setTimeout(() => {
                    setVisibleBrands((prev) => [...prev, brand]);
                }, index * 300); // Adjust the delay as needed
            });
        }
    }, [showBrands]);

    return (
        <div className="brands-container" ref={containerRef}>
            <br/>
            {visibleBrands.map((brand, index) => (
                <div key={index} className={`brand-card ${visibleBrands.length > index ? 'loaded' : ''}`}>
                    <img src={brand.src} alt={brand.name}/>
                </div>
            ))}
        </div>
    );
}
