import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSave, FaTimes } from "react-icons/fa";
import BASE_URL from "../../config"; // Adjust the path if necessary

const AddStudent = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const { firstName, lastName, email, department } = student;

  const handleInputChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const saveStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/students`, student);
      navigate("/view-students");
    } catch (err) {
      console.error("Error saving student:", err);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "700px" }}>
        <h2 className="text-center mb-4 text-primary">Add New Student</h2>

        <form onSubmit={saveStudent}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              required
              value={firstName}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              required
              value={lastName}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="department" className="form-label">
              Department
            </label>
            <input
              className="form-control"
              type="text"
              name="department"
              id="department"
              placeholder="Enter department"
              required
              value={department}
              onChange={handleInputChange}
            />
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success">
              <FaSave className="me-2" />
              Save
            </button>
            <Link to="/view-students" className="btn btn-danger">
              <FaTimes className="me-2" />
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
