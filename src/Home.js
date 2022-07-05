import React from 'react';
import './Home.css';
import Product from './Product';

function Home(){
    return(
        <div className='home'>
            <div className="home-container">
                <img 
                className='home-image'
                src="https://m.media-amazon.com/images/I/61POs0fQEsL._SX3000_.jpg" 
                alt="" />
                <div className="home-row">
<Product 
id="12"
title='(Renewed) HP 14s AMD Ryzen 7-5700U 14 inch(35.6 cm) Thin & Light FHD Laptop ( 8GB RAM/512GB SSD/ Radeon Graphics/ Windows 10/ MS Office 2019/ Backlit Keyboard/ Natural Silver/ 1.41kg) - 14s-fq1083AU'
price={345}
image="https://m.media-amazon.com/images/I/81TRHOdoD+L._SL1500_.jpg"
rating={3}
/>
<Product
               id="34"
               title="(Renewed) Dell Latitude Ultralight Laptop 7370 Intel Core i7 Mobile-6th Gen - M7-6Y75 Processor , 4 GB Ram & 128 GB SSD, 13.3 Inches FHD Screen 1.18 KG Notebook Computer"
                price={345}
                image="https://m.media-amazon.com/images/I/41jaXlvjSPL.jpg"
                rating={3} 
                />

                </div>

                <div className="home-row">
                <Product
                id="345"
                title="zia carpets Super Soft Microfiber Modern Shag Area Rug Carpet with 2 inch Thickness, 5 x 8 feet, Multicolour"
                price={345}
                image="https://m.media-amazon.com/images/I/91OTY9rx0tS._SL1500_.jpg"
                rating={3} 
                />
                <Product
                id="56"
                title="zia carpets Extra Soft Luxury Area Rug Fluffy Carpet Living Room Shag Carpet 2-inch Thick Carpet 5 X 7 Feet"
                price={345}
                image="https://m.media-amazon.com/images/I/81ic4lA3tDL._SL1500_.jpg"
                rating={3}
                />
                <Product
                id="567"
                image="https://m.media-amazon.com/images/I/71QuhZnM9QL._SL1200_.jpg"
                price={345}
                title="Mansi Enterprises Brown & Gold Color Wooden with Brass Work 3 Leg Stool"
                rating={3}
                />
                </div>
                <div className="home-row">
                <Product
                id="78"
                title="OnePlus 125.7 cm (50 inches) U Series 4K LED Smart Android TV 50U1S (Black) (2021 Model)"
                price={345}
                image="https://m.media-amazon.com/images/I/71Sdj04A8dS._SL1500_.jpg"
                rating={3}
                />
                </div>
            </div>
        </div>
    )
}

export default Home;