import React from "react";
import { Link } from "react-router-dom";

const DashboardIndex = () => {
  return (
    <>
      <li>
        <Link className="headerarea__has__dropdown" to="/dashboard">
          Dashboard
          <i className="icofont-rounded-down"></i>
        </Link>
        <ul className="headerarea__submenu headerarea__submenu--third--wrap">
          <li>
            <Link>
              Admin <i className="icofont-rounded-right"></i>
            </Link>
            <ul className="headerarea__submenu--third">
              <li>
                <Link to="/dashboard/admin-dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/dashboard/admin-profile">Profile</Link>
              </li>
              <li>
                <Link to="/dashboard/admin-message">Message</Link>
              </li>
              <li>
                <Link to="/dashboard/admin-courses">Courses</Link>
              </li>
              <li>
                <Link to="/dashboard/admin-review">Review</Link>
              </li>
              <li>
                <Link to="/dashboard/admin-quiz">Quiz</Link>
              </li>
              <li>
                <Link to="/dashboard/admin-settings">Settings</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>
              Instructor <i className="icofont-rounded-right"></i>
            </Link>
            <ul className="headerarea__submenu--third">
              <li>
                <Link to="/dashboard">
                 Dashboard
                </Link>
              </li>
              <li>
                <Link to="/dashboard/instructor-profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/dashboard/instructor-message">Message</Link>
              </li>
              <li>
                <Link to="/dashboard/instructor-wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/dashboard/instructor-reviews">Review</Link>
              </li>
              <li>
                <Link to="/dashboard/instructor-my-quiz">
                  My Quiz
                </Link>
              </li>
              <li>
                <Link to="/dashboard/instructor-order-history">
                  Order History
                </Link>
              </li>
              <li>
                <Link to="/dashboard/instructor-course">My Courses</Link>
              </li>
              <li>
                <Link to="dashboard/instructor-announcments">
                  Announcements
                </Link>
              </li>
              <li>
                <Link to="/dashboard/instructor-quiz-attempts">
                  Quiz Attempts
                </Link>
              </li>
              <li>
                <Link to="/dashboard/instructor-assignments">
                  Assignment
                </Link>
              </li>
              <li>
                <Link to="/dashboard/instructor-settings">Settings</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="dashboard/student-dashboard.html">
              Student <i className="icofont-rounded-right"></i>
            </Link>
            <ul className="headerarea__submenu--third">
              <li>
                <Link to="dashboard/student-dashboard.html">Dashboard</Link>
              </li>
              <li>
                <Link to="dashboard/student-profile.html">Profile</Link>
              </li>
              <li>
                <Link to="dashboard/student-message.html">Message</Link>
              </li>
              <li>
                <Link to="dashboard/student-enrolled-courses.html">
                  Enrolled Courses
                </Link>
              </li>
              <li>
                <Link to="dashboard/student-wishlist.html">Wishlist</Link>
              </li>
              <li>
                <Link to="dashboard/student-reviews.html">Review</Link>
              </li>
              <li>
                <Link to="dashboard/student-my-quiz-attempts.html">
                  My Quiz
                </Link>
              </li>
              <li>
                <Link to="dashboard/student-assignments.html">Assignment</Link>
              </li>
              <li>
                <Link to="dashboard/student-settings.html">Settings</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </>
  );
};

export default DashboardIndex;
