import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Venez découvrir notre univers naturel !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-14.jpg'
              text='Découvrez toutes nos créations jardin originales et artisanales'
              label='Jardin'
              path='/Jardin'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Profitez de nos oeuvres pour décorer votre intérieur !'
              label='Décoration'
              path='/decoration'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='Nos minéraux'
              label='Minéraux'
              path='/mineraux'
            />
            <CardItem
              src='images/img-13.jpg'
              text='Nos douceurs'
              label='Dégustations'
              path='/'
            />
            <CardItem
              src='images/img-15.jpg'
              text='Nos bijoux'
              label='Bijoux'
              path='/bijoux'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-14.jpg'
              text='Découvrez toutes nos créations jardin originales et artisanales'
              label='Jardin'
              path='/Jardin'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Profitez de nos oeuvres pour décorer votre intérieur !'
              label='Décoration'
              path='/decoration'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;