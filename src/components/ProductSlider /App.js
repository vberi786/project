import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./Product";
import "./Style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "https://upload.wikimedia.org/wikipedia/commons/8/81/Portfolio_.gif"
        },
        {
          img: "https://i.pinimg.com/originals/f2/00/eb/f200eb6203aba005f6bb8c46ac157274.gif"
        },
        {
          img: "https://thumbs.gfycat.com/AbsoluteIdealEasteuropeanshepherd-max-1mb.gif"
        },
        {
          img: "https://i.gifer.com/T0WC.gif"
        },
        {
          img: "https://cdn.dribbble.com/users/1323178/screenshots/11020141/media/7ee85e2fc6783dc6029d25c5a5e3cc7f.gif"
        },
        {
          img: "https://cdn.dribbble.com/users/1299339/screenshots/3065748/blogging_d_1.gif"
        },
        {
          img: "https://www.animatedvideo.com/blog/wp-content/uploads/2017/05/Video_Animation_on_Websites-770x360.jpg"
        },
        {
          img: "https://blog.tbhcreative.com/wp-content/uploads/animated-graphics.gif"
        },
        
      ]
    };
  }
  render() {
    var settings = {
      dots: false,
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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div>
        <h2 class="our">OUR WORKS</h2>
        <Slider {...settings}>
          {this.state.slides.map((slide, index) => {
            return (
              <div key={index}>
                <ProductCard imgSrc={slide.img} />
                {/* <img src={slide.img} alt={`slide${index}`} /> */}
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ProductSlider;
