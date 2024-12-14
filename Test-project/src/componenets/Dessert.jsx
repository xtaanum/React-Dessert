import React from 'react'
import DessertCard from './Card';
import { Card } from '@material-tailwind/react';
import Cart from './Cart';

const card1 = [
  {
    image: "/assets/images/image-waffle-desktop.jpg",
    title: "Waffles",
    description: "Waffles with Berries",
    price: `$6.50`,
  },
  {
    image: "./assets/images/image-creme-brulee-desktop.jpg",
    title: "Creme brulee",
    description: "Vanilla Bean creme vrulee",
    price: `$7.00`,
  },
  {
    image: "./assets/images/image-macaron-desktop.jpg",
    title: "Macaron",
    description: "Macaron Mix of Five",
    price: `$8.00`,
  },
  {
    image: "./assets/images/image-tiramisu-desktop.jpg",
    title: "Tiramisu",
    description: "Classic Tiramisu",
    price: `$5.50`,
  },
  {
    image: "/assets/images/image-baklava-desktop.jpg",
    title: "Baklava",
    description: "Pistachio Baklava",
    price: `$4.00`,
  },
  {
    image: "/assets/images/image-meringue-desktop.jpg",
    title: "Pie",
    description: "Lemon Meringue Pie",
    price: `$5.00`,
  },
  {
    image: "/assets/images/image-cake-desktop.jpg",
    title: "Cake",
    description: "Red Velvet Cake",
    price: `$4,50`,
  },
  {
    image: "/assets/images/image-brownie-desktop.jpg",
    title: "Brownie",
    description: "Salted Caramel Brownie",
    price: `$5.50`,
  },
  {
    image: "/assets/images/image-panna-cotta-desktop.jpg",
    title: "Panna Cotta",
    description: "Vannilla Panna Cotta",
    price: `$6.50`,
  },
];

const Dessert = () => {
  return (
    <div>
      <div className='bg-yellow-50'>
        <h3 className="text-3xl font-semibold mx-8 my-8">Dessert</h3>
        <div className="flex flex-row justify-center mx-auto gap-16">
          <div className="grid grid-cols-3  gap-2">
            {card1.map((card) => {
              return (
                <DessertCard
                  img={card.image}
                  title={card.title}
                  description={card.description}
                  price={card.price}
                />
              );
            })}
          </div>

          <div>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dessert
