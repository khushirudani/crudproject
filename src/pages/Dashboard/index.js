import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.scss';

const Dashboard = () => {
    return (
        <>
            In Dashboard <br/>
           
            
            <Link to="/addproduct">Add Product</Link><br></br>
            <Link to="/viewproduct">View Product</Link>
        </>
    );
}

export default Dashboard;
