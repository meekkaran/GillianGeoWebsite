import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>MANIFESTING MY FAVOURITE DESTINATIONS</h1>
            <p>My top 9 countries</p>
            <div className="cards-container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-1.jpg"
                        text="Explore the hidden waterfall deep
                        inside the Amazon jungle"
                        label="Adventure"
                        path='/joinme'
                        />
                        <CardItem 
                        src="images/img-4.jpg"
                        text="Travel through island of bali in 
                        a private cruise"
                        label="Luxury"
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-3.jpg"
                        text="Travel through island of bali in 
                        a private cruise"
                        label="Luxury"
                        path='/services'
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-4.jpg"
                        text="Explore the hidden waterfall deep
                        inside the Amazon jungle"
                        label="Adventure"
                        path='/aboutme'
                        />
                        <CardItem 
                        src="images/img-5.jpg"
                        text="Travel through island of bali in 
                        a private cruise"
                        label="Luxury"
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-6.jpg"
                        text="Travel through island of bali in 
                        a private cruise"
                        label="Luxury"
                        path='/services'
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-7.jpg"
                        text="Explore the hidden waterfall deep
                        inside the Amazon jungle"
                        label="Adventure"
                        path='/aboutme'
                        />
                        <CardItem 
                        src="images/img-8.jpg"
                        text="Travel through island of bali in 
                        a private cruise"
                        label="Luxury"
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-9.jpg"
                        text="Travel through island of bali in 
                        a private cruise"
                        label="Luxury"
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
