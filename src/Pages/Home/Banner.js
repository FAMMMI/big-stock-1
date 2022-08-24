import React from 'react';

const Banner = () => {
    return (
        <div className='m-10'>
            <div class="carousel w-full h-100">
                <div id="slide2" class="carousel-item relative w-full">
                    <img className='w-full h-50 ' src="https://thumbs.dreamstime.com/b/honda-cars-dealer-stock-prepare-sales-ubon-ratchathani-thailand-sep-sep-ubon-ratchathani-thailand-35287918.jpg" ></img>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img className='w-full h-50' src="https://d1lzrgdbvkolkd.cloudfront.net/large_1758_B_cdff2c01c2.jpg" class="w-full "></img> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img className='w-full h-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrtwAAwxEwQeG6RZqyf20rxbEKITtmFX2O1Kn0hk7VHe6k_QDXSWUWEHKJhmqdq8ic5FY&usqp=CAU" class="w-full"></img> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;