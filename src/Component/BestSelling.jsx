import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Rate } from "antd";

import Container from "./Container";
import Card from "./Card";
import Btn from "./Btn";
import SecHeading from "./SecHeading";
import Scalation from "./Scalation";

const BestSelling = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    // ========= Fetch same products =========
    const getBestSellingProducts = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products");
            setProducts(res.data.products.slice(0, 8)); // limit if needed
            setLoading(true);
        } catch (error) {
            console.error("Best selling fetch error:", error);
        }
    };

    useEffect(() => {
        getBestSellingProducts();
    }, []);

    // ========= Slider settings =========
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="mt-17.5">
            <Container>
                {/* Heading */}
                <div className="flex justify-between items-end">
                    <SecHeading
                        heading="This Month"
                        Title="Best Selling Products"
                        className="ml-2 lg:ml-0"
                    />
                    <div className="lg:mb-11 mb-7">
                        <Btn btn="View All" />
                    </div>
                </div>

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
                                rating={item.rating}
                                star={<Rate allowHalf disabled defaultValue={item.rating} />}
                            />
                        ))
                        : Array.from({ length: 6 }).map((_, i) => (
                            <Scalation key={i} />
                        ))}
                </Slider>
            </Container>
        </div>
    );
};

export default BestSelling;
