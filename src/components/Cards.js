import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>MANIFESTING MY FAVOURITE DESTINATIONS</h1>
            <p>My top 9 DESTINATIONS</p>
            <div className="cards-container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/Mount_Kenya.jpg"
                        text="Explore the largest mountain in kenya"
                        label="Adventure"
                        path='/joinme'
                        />
                        <CardItem 
                        src="images/eiffelTower.jpg"
                        text="Travel through Eiffel Tower in Paris"
                        label="Luxury"
                        path='/services'
                        />
                        <CardItem 
                        src="images/disneyworld.jpg"
                        text="Travel through Disney world in Florida"
                        label="Luxury"
                        path='/services'
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem 
                        src="images/maramigration.jpg"
                        text="watch the wilderbeasts migration 
                        in maasai mara kenya"
                        label="Adventure"
                        path='/aboutme'
                        />
                        <CardItem 
                        src="images/tumpaksewuWaterfall.jpg"
                        text="Explore the Tumpak Sewu waterfall in Arizona"
                        label="Luxury"
                        path='/services'
                        />
                        <CardItem 
                        src="images/sahara.jpg"
                        text="Travel through sahara desert in North Africa"
                        label="Luxury"
                        path='/services'
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem 
                        src="images/cavehouse.jpg"
                        text="Explore Randys cave home in Arizona"
                        label="Explore"
                        path='/aboutme'
                        />
                        <CardItem 
                        src="images/atlanticOcean.jpeg"
                        text="Travel through Atlantic ocean"
                        label="Adventure"
                        path='/services'
                        />
                        <CardItem 
                        src="images/arc.jpg"
                        text="Travel through Arc De Triomple in Paris"
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
