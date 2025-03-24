'use client'
import React, { useState } from 'react'
import Stripe from 'stripe'
import ProductCard from './ProductCard';

interface Props{
    products:Stripe.Product[];
}



export default function ProductList({products}: Props) {

    const [searchTerm,setSearchTerm] = useState<string>("");

    const filteredProduct = products.filter((products) => {
        const term = searchTerm.toLowerCase();

        const nameMatch = products.name.toLowerCase().includes(term)
        const descriptionMatch = products.description ? products.description.toLowerCase().includes(term): false;

        return nameMatch ||  descriptionMatch;

    })

  return (
    <div>
        <div>
            <input type='text' placeholder='Seach Products....' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>

        <ul>
            {filteredProduct.map((product,key)  =>{
                return <li key={key}><ProductCard product={product} /></li>
            })}
        </ul>
    </div>
  )
}
