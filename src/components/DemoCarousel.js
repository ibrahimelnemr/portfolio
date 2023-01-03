import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import blogImg from '../blog.jpg'
import landingPageImg from '../landing page.jpg'
import weatherJournalAppImg from '../weather journal app.jpg'
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop={'true'}>
                <div>
                    <img src={blogImg} className="carousel-img"/>
                    
                </div>
                <div>
                    <img src={landingPageImg} className="carousel-img"/>
                   
                </div>
                <div>
                    <img src={weatherJournalAppImg} className="carousel-img"/>
                
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel