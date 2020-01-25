import React from 'react'
import Plan from './components/plan/Plan'

export default function App(){
    const array = [
        {name: 'Мой онлайн+', price: 700, limit:"безлимит на Tele2 в России", min: 800, gb: 30 , button: 'Купит SIM' },
        {name: 'Везде онлайн', price: 500, limit:"безлимит на Tele2 в России", min: 500, gb: 40, button: 'Купит SIM'},
        {name: 'Мой онлайн', price: 400, limit:"безлимит на Tele2 в России", min: 500, gb: 15, button: 'Купит SIM'},
    ];
    return(
        <div>
        <Plan name={array[0].name} price={array[0].price} limit={array[0].limit} min={array[0].min} gb={array[0].gb} button={array[0].button} />
        <Plan name={array[1].name} price={array[1].price} limit={array[1].limit} min={array[1].min} gb={array[1].gb} button={array[1].button} />
        <Plan name={array[2].name} price={array[2].price} limit={array[2].limit} min={array[2].min} gb={array[2].gb} button={array[2].button} />
        </div>
    )
}