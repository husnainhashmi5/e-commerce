import React, { useState } from 'react';
import categoriesData from './categoriesData';

const CategoriesManager = () => {
  const [categories, setCategories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newCategory, setNewCategory] = useState({ title: '', content: '', image: '' });

  // Function to update categories data on the backend
  const updateCategoriesData = async (updatedCategories) => {
    console.log('test:', updatedCategories)
    try {
      const response = await fetch('http://localhost:5000/update-categories-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ categories: updatedCategories }),
      });

      const result = await response.json();
      if (result.success) {
        console.log('Categories updated successfully');
      } else {
        console.error('Failed to update categories:', result.message);
      }
    } catch (error) {
      console.error('Error updating categories:', error);
    }
  };

  // Handle category selection
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  // Handle form submission for updating a category
  const handleUpdateCategory = (e) => {
    e.preventDefault();
    const { title, content, image } = e.target;

    const updatedCategory = {
      ...selectedCategory,
      title: title.value,
      content: content.value,
      image: image.value,
    };

    const updatedCategories = categories.map((cat) =>
      cat.id === selectedCategory.id ? updatedCategory : cat
    );
    setCategories(updatedCategories);
    updateCategoriesData(updatedCategories);
  };

  // Handle form submission for adding a new category
  const handleAddCategory = (e) => {
    e.preventDefault();

    const newCategoryWithId = {
      ...newCategory,
      id: Date.now(), // Generate a unique ID using timestamp
    };

    const updatedCategories = [...categories, newCategoryWithId];
    setCategories(updatedCategories);
    updateCategoriesData(updatedCategories);
    setNewCategory({ title: '', content: '', image: '' }); // Reset the form
  };

  // Handle removing a category
  const handleRemoveCategory = () => {
    if (!selectedCategory) return;

    const updatedCategories = categories.filter((cat) => cat.id !== selectedCategory.id);
    setCategories(updatedCategories);
    updateCategoriesData(updatedCategories);
    setSelectedCategory(null);
  };

  return (
    <div style={{ display: 'flex', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Left Side: List of Categories */}
      <div style={{ 
                flex: 1, 
                marginRight: '20px', 
                maxHeight: '80vh', 
                overflowY: 'auto', 
                border: '1px solid #ddd', 
                borderRadius: '5px', 
                padding: '10px',
                scrollbarWidth: 'thin',
                scrollbarColor: '#888 #f1f1f1',
            }}>
                <style>
                    {`
                        ::-webkit-scrollbar { width: 8px; }
                        ::-webkit-scrollbar-track { background: #f1f1f1; }
                        ::-webkit-scrollbar-thumb { background: #888; border-radius: 4px; }
                        ::-webkit-scrollbar-thumb:hover { background: #555; }
                    `}
                </style>
        <h2>Categories</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {categories.map((category) => (
            <li
              key={category.id} // Ensure unique key
              onClick={() => handleSelectCategory(category)}
              style={{
                cursor: 'pointer',
                marginBottom: '10px',
                padding: '10px',
                backgroundColor: selectedCategory?.id === category.id ? '#f0f0f0' : '#fff',
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <img
                src={category.image}
                alt={category.title}
                width="50"
                style={{ borderRadius: '5px', marginRight: '10px' }}
              />
              <div>
                <strong>{category.title}</strong>
                <p>{category.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: Update Form and Add New Category Form */}
      <div style={{ width: '70%', padding: '10px' }}>
        {/* Update Category Form */}
        {selectedCategory && (
          <div style={{ marginBottom: '30px' }}>
            <h2>Update Category</h2>
            <form onSubmit={handleUpdateCategory} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={selectedCategory.title}
                  required
                  style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </div>
              <div>
                <label>Content:</label>
                <input
                  type="text"
                  name="content"
                  defaultValue={selectedCategory.content}
                  required
                  style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </div>
              <div>
                <label>Image URL:</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img
                    src={selectedCategory.image}
                    alt="Preview"
                    style={{ width: '100px', height: '100px', borderRadius: '5px' }}
                  />
                  <input
                    type="text"
                    name="image"
                    value={selectedCategory.image}
                    onChange={(e) =>
                      setSelectedCategory({
                        ...selectedCategory,
                        image: e.target.value,
                      })
                    }
                    style={{ width: 'calc(100% - 120px)', padding: '8px', border: '1px solid #ddd', borderRadius: '5px' }}
                  />
                </div>
              </div>
              <button
                type="submit"
                style={{
                  padding: '10px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Update
              </button>
              <button
                type="button"
                onClick={handleRemoveCategory}
                style={{
                  padding: '10px',
                  backgroundColor: '#dc3545',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Remove Category
              </button>
            </form>
          </div>
        )}

        {/* Add New Category Form */}
        <div>
          <h2>Add New Category</h2>
          <form onSubmit={handleAddCategory} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={newCategory.title}
                onChange={(e) => setNewCategory({ ...newCategory, title: e.target.value })}
                required
                style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>
            <div>
              <label>Content:</label>
              <input
                type="text"
                name="content"
                value={newCategory.content}
                onChange={(e) => setNewCategory({ ...newCategory, content: e.target.value })}
                required
                style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>
            <div>
              <label>Image URL:</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src={newCategory.image}
                  alt="Preview"
                  style={{ width: '100px', height: '100px', borderRadius: '5px' }}
                />
                <input
                  type="text"
                  name="image"
                  value={newCategory.image}
                  onChange={(e) => setNewCategory({ ...newCategory, image: e.target.value })}
                  style={{ width: 'calc(100% - 120px)', padding: '8px', border: '1px solid #ddd', borderRadius: '5px' }}
                />
              </div>
            </div>
            <button
              type="submit"
              style={{
                padding: '10px',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Add Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoriesManager;