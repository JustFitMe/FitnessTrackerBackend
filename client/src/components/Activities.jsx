import React, { useState, useEffect } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({
    name: '',
    description: ''
  });
  const [error, setError] = useState('');

  // Fetch all activities on component mount
  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await fetch('/api/activities');
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
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newActivity)
      });

      if (response.ok) {
        setNewActivity({ name: '', description: '' });
        await fetchActivities();
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Activities</h1>

      {/* Activity List */}
      <div>
        <h2>All Activities</h2>
        {activities.map((activity) => (
          <div key={activity.id}>
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>

      {/* Create New Activity */}
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
    </div>
  );
};

export default Activities;
