const baseUrl = "http://localhost:3000/api/";
import React, { useState, useEffect } from "react";

const Activities = () => {
  const [isUser, setUser] = useState(false);
  const [isToken, setToken] = useState(localStorage.getItem("token"));
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({
    name: "",
    description: "",
  });
  const [error, setError] = useState("");

  // Fetch all activities on component mount
  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await fetch(`${baseUrl}activities`);
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setNewActivity({ ...newActivity, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // const baseUrl = "http://localhost:3000/api/";
    const token = localStorage.getItem("token");
    newActivity.user = token;
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${baseUrl}activities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newActivity),
      });

      if (response.ok) {
        setNewActivity({ name: "", description: "" });
        await fetchActivities();
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userExist = async () => {
    const token = localStorage.getItem("token");
    if (!token) setUser(false);
    else setUser(true);
  };

  useEffect(() => {
    setInterval(() => {
      userExist();
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Activities</h1>

      {/* Activity List */}
      <div>
        <h2>All Activities</h2>
        {activities.map((activity) => (
          <div
            key={activity.id}
            style={{ border: "2px solid", margin: "2%" }}
            className="activities-card"
          >
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
      {isUser ? (
        <>
          <div>
            <h2>Create New Activity</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Activity Name"
                value={newActivity.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="description"
                placeholder="Activity Description"
                value={newActivity.description}
                onChange={handleInputChange}
              />
              <button type="submit">Create Activity</button>
            </form>
            {error && <p>{error}</p>}
          </div>
        </>
      ) : null}
      {/* Create New Activity */}
    </div>
  );
};

export default Activities;
