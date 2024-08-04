import React from 'react'
import "./cardelement.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function CardElement({ card_logo, card_theme, card_heading, card_value, card_stonks, card_stonks_value }) {
    return (
        <div className="cardelement">
            <div className={"ce-logo " + card_theme}>{card_logo}</div>
            <div className="ce-subheader">{card_heading}</div>
            <div className="ce-header-wrapper">
                <div className="ce-header">{card_value}</div>
                <div className={"stonks " + (card_stonks ? "s-success" : "s-fail")}>
                    {card_stonks ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    {card_stonks_value}
                </div>
            </div>
        </div >
    )
}

export default CardElement
