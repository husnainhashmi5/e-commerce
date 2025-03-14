import React, { useState } from 'react';
import Dashboard from '../pages/Dashboard'; // Import your Dashboard component
import CategoriesManager from './CategoriesManager'; // Import your CategoriesManager component
import MainSliderManager from './MainSliderManager'; // Import your MainSliderManager component

const ComponentSwitcher = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard'); // State to manage the active component

  // Function to handle button clicks
  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName); // Update the active component based on the button clicked
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Content Manager</h2>

      {/* Buttons */}
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => handleButtonClick('Dashboard')}
          style={{
            padding: '10px',
            backgroundColor: activeComponent === 'Dashboard' ? '#007bff' : '#6c757d',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => handleButtonClick('CategoriesManager')}
          style={{
            padding: '10px',
            backgroundColor: activeComponent === 'CategoriesManager' ? '#28a745' : '#6c757d',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        >
          Categories Manager
        </button>
        <button
          onClick={() => handleButtonClick('MainSliderManager')}
          style={{
            padding: '10px',
            backgroundColor: activeComponent === 'MainSliderManager' ? '#dc3545' : '#6c757d',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Main Slider Manager
        </button>
      </div>

      {/* Displayed Component */}
      <div
        style={{
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
        }}
      >
        {activeComponent === 'Dashboard' && <Dashboard />}
        {activeComponent === 'CategoriesManager' && <CategoriesManager />}
        {activeComponent === 'MainSliderManager' && <MainSliderManager />}
      </div>
    </div>
  );
};

export default ComponentSwitcher;