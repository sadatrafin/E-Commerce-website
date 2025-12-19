import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Rate } from "antd";

import Container from "./Container";
import Card from "./Card";
import Btn from "./Btn";
import SecHeading from "./SecHeading";
import Scalation from "./Scalation";

const OurProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    // ========= Fetch products =========
    const getProducts = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products");
            setProducts(res.data.products);
            setLoading(true);
        } catch (error) {
            console.error("Our products fetch error:", error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    // ========= Custom Arrows =========
    const SampleNextArrow = ({ onClick }) => (
        <div
            className="absolute lg:-top-22 -top-14 right-0 cursor-pointer"
            onClick={onClick}
        >
            <div className="bg-gray-100 rounded-full lg:h-[46px] h-8 lg:w-[46px] w-8 flex items-center">
                <FaArrowRight className="text-black lg:text-2xl m-auto" />
            </div>
        </div>
    );

    const SamplePrevArrow = ({ onClick }) => (
        <div
            className="absolute lg:-top-22 -top-14 lg:right-15 right-10 cursor-pointer"
            onClick={onClick}
        >
            <div className="bg-gray-100 rounded-full lg:h-[46px] h-8 lg:w-[46px] w-8 flex items-center">
                <FaArrowLeft className="text-black lg:text-2xl m-auto" />
            </div>
        </div>
    );

    // ========= Slider Settings =========
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, rows: 2 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2, rows: 1 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, rows: 1 },
            },
        ],
    };

    return (
        <div className="mt-[71px]">
            <Container className="change">
                {/* Heading */}
                <SecHeading
                    heading="Our Products"
                    Title="Explore Our Products"
                    className="ml-2 lg:ml-0"
                />

                {/* Slider */}
                <Slider {...settings}>
                    {loading
                        ? products.map((item) => (
                            <Card
                                key={item.id}
                                id={item.id}
                                productDetails={item}
                                cardimg={item.thumbnail}
                                title={item.title}
                                price={Math.floor(
                                    item.price * (1 - item.discountPercentage / 100)
                                )}
                                lessprice={item.price}
                                less={Math.round(item.discountPercentage)}
                            />
                        ))
                        : Array.from({ length: 8 }).map((_, i) => (
                            <Scalation key={i} />
                        ))}
                </Slider>

                {/* Button */}
                <Btn
                    btn="View All Products"
                    className="mt-[37px] m-auto block"
                />
            </Container>
        </div>
    );
};

export default OurProducts;
