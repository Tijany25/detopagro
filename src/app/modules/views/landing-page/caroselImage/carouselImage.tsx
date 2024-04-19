
    //carousels/Responsive.js
"use client";

    import { Carousel } from "react-responsive-carousel";
    import { items } from "./items.json";
    import "react-responsive-carousel/lib/styles/carousel.min.css";
    export default function ResponsiveCarousel() {
      const { responsive } = items;
      return (
        <div className="">
          <Carousel
            showArrows={true}
            showIndicators={true}
            infiniteLoop={true}
            dynamicHeight={false}
            autoPlay={true}
          >
            {responsive.map((item) => (
              <div className="carouselContainer relative" key={item.id}>
                <div className="h-full">
                  <img className="w-full h-full" src={item.imageUrl} alt="slides" />
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
                  <div className="carouselText" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '15px', borderRadius: '10px' }}>
                    <h1 className="text-deep-green font-bold text-2xl lg:text-5xl">{item.title}</h1>
                    <div className="text-deep-green text-md lg:text-2xl font-semibold lg:mt-5">{item.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      );
    }

