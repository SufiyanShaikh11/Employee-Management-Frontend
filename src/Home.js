import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <img
        src={`${process.env.PUBLIC_URL}/employee-management.jpg`}
        alt="Employee"
        className="home-bg"
      />
      <div className="home-overlay">
        <h1>Welcome to Student Management System</h1>
        <p className="lead">Manage students data efficiently and effectively.</p>
        <Link to="/view-students" className="btn btn-warning btn-lg mt-3 shadow">
          View All students
        </Link>
      </div>
    </div>
  );
};

export default Home;
