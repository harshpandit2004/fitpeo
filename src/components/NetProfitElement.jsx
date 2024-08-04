import React from 'react'
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DoughnutChart from "./DoughnutChart";
import './netprofit.css';
function NetProfitElement() {
    return (
        <div className="net-profit">
            <div className="np-text">
                <h4 className="np-text-head">Net Profit</h4>
                <h1 className="np-text-body">$ 6759.25</h1>
                <div className={"np-text-stonks"}>
                    <ArrowDropUpIcon />
                    3%
                </div>
            </div>
            <div className="">
                <DoughnutChart />
            </div>
        </div>
    )
}

export default NetProfitElement
