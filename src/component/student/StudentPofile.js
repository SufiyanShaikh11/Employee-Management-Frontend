import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { FaUserTie, FaEnvelope, FaBuilding, FaUser, FaArrowLeft } from "react-icons/fa";
import BASE_URL from "../../config";  // Adjust the path if necessary

const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/students/student/${id}`);
      setStudent(result.data);
    } catch (err) {
      setError("Failed to load employee profile. Please try again later.");
    }
  };

  return (
    <div className="container mt-5">
      {error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : (
        <div className="card shadow-lg border-0 mx-auto" style={{ maxWidth: "700px" }}>
          <div className="card-header bg-dark text-white text-center">
            <FaUserTie size={30} className="mb-2" />
            <h3>Employee Profile</h3>
          </div>
          <div className="card-body p-4">
            <div className="mb-3 d-flex align-items-center">
              <FaUser className="text-primary me-3" />
              <strong className="me-2">First Name:</strong> {student.firstName}
            </div>
            <div className="mb-3 d-flex align-items-center">
              <FaUser className="text-primary me-3" />
              <strong className="me-2">Last Name:</strong> {student.lastName}
            </div>
            <div className="mb-3 d-flex align-items-center">
              <FaEnvelope className="text-danger me-3" />
              <strong className="me-2">Email:</strong> {student.email}
            </div>
            <div className="mb-3 d-flex align-items-center">
              <FaBuilding className="text-success me-3" />
              <strong className="me-2">Department:</strong> {student.department}
            </div>
            <div className="text-center mt-4">
              <Link to="/view-students" className="btn btn-outline-secondary">
                <FaArrowLeft className="me-2" />
                Back to List
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentProfile;
