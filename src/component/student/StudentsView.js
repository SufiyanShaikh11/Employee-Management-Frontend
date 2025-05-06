import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search";
import BASE_URL from "../../config";  // Adjust the path based on your file location

const StudentsView = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/students`);
      if (result.status === 200) {
        setStudents(result.data);
      }
    } catch (err) {
      setError("Failed to load students. Please try again later.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/students/delete/${id}`);
      loadStudents();
    } catch (err) {
      setError("Failed to delete student. Please try again later.");
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4 shadow-sm p-3 bg-light rounded">
        <h3 className="mb-0">Student Directory</h3>
        <Search search={search} setSearch={setSearch} />
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="table-responsive">
        <table className="table table-bordered table-hover shadow text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th colSpan="3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students
              .filter((st) =>
                st.firstName.toLowerCase().includes(search.toLowerCase())
              )
              .map((student, index) => (
                <tr key={student.id} className="align-middle">
                  <td>{index + 1}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.email}</td>
                  <td>
                    <span className="badge bg-primary">{student.department}</span>
                  </td>
                  <td>
                    <Link to={`/student-profile/${student.id}`} className="btn btn-sm btn-outline-info">
                      <FaEye className="me-1" /> View
                    </Link>
                  </td>
                  <td>
                    <Link to={`/edit-student/${student.id}`} className="btn btn-sm btn-outline-warning">
                      <FaEdit className="me-1" /> Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(student.id)}
                    >
                      <FaTrashAlt className="me-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsView;
