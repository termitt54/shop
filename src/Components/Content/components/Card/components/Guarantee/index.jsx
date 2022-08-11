import React from "react";
import "./index.scss";

export const Guarantee = ({guaranteePrice, setGuarenteePrice, setGuarantee}) => {

    const pickGuarantee = [
        {
            value: '6 месяцев',
            id: '6 месяцев'
        },
        {
            value: '1 год',
            id: '1 год'
        },
        {
            value: '1.5 года',
            id: '1.5 года'
        },
        {
            value: '2 года',
            id: '2 года'
        },
        {
            value: '3 года',
            id: '3 года'
        },
        {
            value: '5 лет',
            id: '5 лет'
        }
    ]

    const guarantee = (e) => {
        setGuarenteePrice(e.target.value)
        setGuarantee(e.target.value)
    }

    return (
        <select className="guarantee" name="" id="" onChange={guarantee}>
            {pickGuarantee.map(function(item) {
                return (
                    <option value={item.id}>{item.value}</option>
                )
            })}
        </select>
    )
}