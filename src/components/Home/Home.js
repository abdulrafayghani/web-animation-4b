import React from 'react'
import useWebAnimations, { fadeInUp } from '@wellyshen/use-web-animations'
import { data } from '../../util'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const { ref: topText } = useWebAnimations({...fadeInUp})

    const { keyframes, timing } = fadeInUp
    const { ref: selection } = useWebAnimations({
        keyframes,
        timing: {
            ...timing,
            delay: 300,
            iterations: 1,
            easing: 'ease-in-out'
        }
    })

    const { ref: shoes } = useWebAnimations({
        keyframes,
        timing: {
            ...timing,
            delay: 500,
            iterations: 1,
            easing: 'ease'
        }
    })

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    }

    return (
        <div >
            <div ref={topText} style={{ width:'100px', height:'20px',margin:'0 auto 10px', fontSize:'19px', fontWeight: 'bold' }}>
                Shoe Store
            </div>
            <div ref={selection} style={{ width:'350px', height:'60px', margin:'0 auto', fontSize:'25px', fontWeight:'bold'}}>
                Choose what to wear today
            </div>
            <div style={{height:'100%', width: '100%'}} ref={shoes}>
                <Slider {...settings} >
                        {data.map((item) => {
                            return(
                                <div key={item.id}>
                                    <img  src={item.image}              
                                      style={{
                                          height:'400px',
                                        display: "block",
                                        margin: "0 auto",
                                        cursor: "pointer",
                                        }}/>
                                </div>
                            )})}
                </Slider>
            </div>
        </div>
    )
}

export default Home
