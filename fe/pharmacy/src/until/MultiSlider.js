import Slider from "react-slick";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import productService from "../service/productService";
import carDetailService from "../service/cartDetailService";
import {toast} from "react-toastify";

export default function MultiSlider() {
    const [products, setProducts] = useState([]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    useEffect(()=> {
        (async () => {
            const productRes =  await productService.findAll();
            setProducts(productRes.data.content);
        })();
    },[]);

    const handleAddCartDetail = async (productId, productPrice) => {
        try {
            await carDetailService.save({
                quantity: 1,
                productDTO: { id: productId },
                totalMoney: productPrice,
            });
            toast.success("Thêm vào giỏ thành công");
        } catch (error) {
            console.warn(error);
        }
    };

    return (
        <>
            <Slider {...settings}>
                {products.map((product, index) => (

                    <div className="ProductCarousel_item__X0_ju" aria-hidden="false" tabIndex={0}>
                        <Link to={`/product-detail/${product.id}`} className="ProductItem_product-item__Scx6a" href="/test-nuoc-bot-covid-19-antigen-rapid-test-kit-saliva-hop-20-test.html">
                            <div className="ProductItem_head__JbsLQ">
                                <figure className="ProductItem_image__Q5HLa">
                                    <img  src={product.productImgDTO[0]?.url} alt="" loading="lazy" style={{ zIndex: 1 }}/>
                                </figure>
                            </div>
                            <div className="ProductItem_body__tGvw7">
                                <div className="ProductItem_title__dd1Vx">
                                    {product.name}
                                </div>
                                <div className="ProductItem_discount-price__YcO7h">
                                    <span>
                                        {product.price.toLocaleString("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        })}

                                    </span>
                                </div>
                                <button  onClick={(event) => {
                                    event.preventDefault();
                                    handleAddCartDetail(product.id, product.price);
                                }} className="ProductItem_add-to-card__7P2PF" style={{ position: "relative", zIndex: 2 }}>
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </Link>
                    </div>

                ))}


            </Slider>
        </>
    )
}