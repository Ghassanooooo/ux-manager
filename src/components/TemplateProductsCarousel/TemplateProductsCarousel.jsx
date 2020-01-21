import React from 'react';
import './TemplateProductsCarousel.less';
import Slider from 'react-slick';
import { oneProdect } from '../../data/supplementData/supplementData';

const TemplateProductsCarousel = () => {
    const settings = {
        arrows: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <h2> Responsive </h2>
            <Slider {...settings} className="TemplateProductsCarousel">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                    <div>
                        <img style={{ width: 200 }} src={oneProdect.image} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TemplateProductsCarousel;
