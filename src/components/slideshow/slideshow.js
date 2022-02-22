import './slideshow.css'
import React, {useState} from 'react'
import SlideshowArrow from './slideshowArrow'

const Slider = () => {
    const slidesCount = 4;

    const sliderWidth = window.outerWidth <= 1100 ? '100vw' : '100vw';
    const [slideIndex, setSlideIndex] = useState(1);

    React.useEffect(() => {
        setTimeout(() => nextSlide(), 5000);
    });

    const nextSlide = () => {
        if(slideIndex !== slidesCount){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === slidesCount){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(slidesCount)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider" style={{width: sliderWidth}}>
            {Array.from({length: slidesCount}).map((i, index) => {
                return (
                    <div
                    key={index}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img key={index} src={`/images/slideshow/img${index + 1}.jpg`} />
                    </div>
                )
            })}

            {/* <SlideshowArrow moveSlide={nextSlide} direction={"next"} />
            <SlideshowArrow moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: slidesCount}).map((i, index) => (
                    <div
                    key={index}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div> */}
        </div>
    )
}

export default Slider;
