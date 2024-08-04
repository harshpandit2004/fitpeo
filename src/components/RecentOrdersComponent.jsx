import React from 'react'
import Avatar from "@mui/material/Avatar";
import "./recentorders.css";

function RecentOrdersComponent() {
    const customers = [
        {
            name: "Wade Warren",
            orderNumber: "123456",
            amount: "$100",
            status: "Delivered",
            avatar:
                "https://d.newsweek.com/en/full/1610730/cul-ps-kermit.jpg?w=1280&f=5fc16e63abb1093b42f12c6d1eb2c34e",
        },
        {
            name: "Jane Cooper",
            orderNumber: "123457",
            amount: "$200",
            status: "Delivered",
            avatar:
                "https://sesameworkshop.org/wp-content/uploads/2023/03/presskit_ss_bio_elmo.png",
        },
        {
            name: "Guy Hawkins",
            orderNumber: "123458",
            amount: "$300",
            status: "Cancelled",
            avatar:
                "https://sesameworkshop.org/wp-content/uploads/2023/02/presskit_ss_bio_zoe-750x416.png",
        },
        {
            name: "Kristin Watson",
            orderNumber: "123459",
            amount: "$400",
            status: "Cancelled",
            avatar:
                "https://sesameworkshop.org/wp-content/uploads/2023/02/presskit_ss_bio_rosita-750x416.png",
        },
        {
            name: "Cody Fisher",
            orderNumber: "123460",
            amount: "$500",
            status: "Cancelled",
            avatar:
                "https://sesameworkshop.org/wp-content/uploads/2023/03/presskit_ss_bio_cookiemonster-750x416.png",
        },
        {
            name: "Savannah Nguyen",
            orderNumber: "123461",
            amount: "$600",
            status: "Cancelled",
            avatar:
                "https://interactive.wttw.com/sites/default/files/sesame/character-corner-grover.jpg",
        },
    ];
    return (
        <div className="recent-orders">
            <h2 className="recent-orders-header">Recent Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Order Number</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td className="customer-name">
                                <Avatar
                                    src={customer.avatar}
                                    sx={{ width: "2rem", height: "2rem" }}
                                />
                                {customer.name}
                            </td>
                            <td>{customer.orderNumber}</td>
                            <td>{customer.amount}</td>
                            <td>
                                <p className={customer.status.toLowerCase()}>
                                    {customer.status}
                                </p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RecentOrdersComponent
