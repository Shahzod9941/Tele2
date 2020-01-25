import React from 'react'
import './Style.css'


export default function Plan(props) {
    return (
        <div className="basic-div">
            <div className="tariff-h1">{props.name}</div>
            <div className="box-summa">
                <div className="price">{props.price}</div>
                <div className="price-box">
                    <div className="rubl">₽</div>
                    <div className="price-mount">/месяц</div>
                </div>
            </div>
            <div className="unlimited"><strong>безлимит</strong> на Теле2 России</div>
            <div className="russia"><strong>{props.min}</strong> мин на остальные номера Росии</div>
            <div className="gb"><strong>{props.gb} GB </strong> интернета</div><br />
             <center><a href="https://msk.tele2.ru/"><div className="button">{props.button}</div></a></center>
        </div>
    )
}