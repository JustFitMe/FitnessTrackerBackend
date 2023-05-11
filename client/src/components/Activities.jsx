//As an unregistered visitor on the Activities tab, I want to:

// see a list of all activities which have been created
// As a registered user on the Activities tab, I want to:

// be shown a form to create a new activity (by name and description)
// be shown an error if the activity already exists
const React = require('react');
const { useState, useEffect } = require('react');
const { BrowserRouter, Route, Switch } = require('react-router-dom');

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({
    name: '',
    description: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch all activities from the server
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
    setNewActivity({
      ...newActivity,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the activity already exists
    if (activities.some(activity => activity.name.toLowerCase() === newActivity.name.toLowerCase())) {
      setError('Activity already exists');
      return;
    }

    // Create a new activity
    try {
      await fetch('/api/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newActivity)
      });
      setError('');
      setNewActivity({
        name: '',
        description: ''
      });
      fetchActivities();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div>
      <h2>Activities</h2>
      {activities.length === 0 ? (
        <p>No activities found.</p>
      ) : (
        <ul>
          {activities.map(activity => (
            <li key={activity.id}>
              <strong>{activity.name}</strong>: {activity.description}
            </li>
          ))}
        </ul>
      )}

      <h3>Add New Activity</h3>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={newActivity.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              name="description"
              value={newActivity.description}
              onChange={handleInputChange}
            ></textarea>
          </label>
        </div>
        <button type="submit">Add Activity</button>
      </form>
    </div>
    </>
  );
};

export default Activities;
