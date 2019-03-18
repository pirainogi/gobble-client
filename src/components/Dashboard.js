import React from 'react';
import '../css/Dashboard.css';
import Calendar from './Calendar'
import RecipeBoxPreview from './RecipeBoxPreview'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1> dashboard </h1>
      <Calendar />
      <RecipeBoxPreview />
    </div>
  )
}

export default Dashboard;
