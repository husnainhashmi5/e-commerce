import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import productsData from '../components/FixedData';

const Dashboard = () => {
    const [products, setProducts] = useState(productsData);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [newFieldName, setNewFieldName] = useState('');
    const [newFieldType, setNewFieldType] = useState('text');
    const navigate = useNavigate();

    // Function to update FixedData on the backend
    const updateFixedData = async (updatedProducts) => {
        try {
            const response = await fetch('http://localhost:5000/update-fixed-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ products: updatedProducts }),
            });

            const result = await response.json();
            if (result.success) {
                console.log('FixedData updated successfully');
            } else {
                console.error('Failed to update FixedData:', result.message);
            }
        } catch (error) {
            console.error('Error updating FixedData:', error);
        }
    };

    // Filter products based on search query
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSelectedProduct({
            ...selectedProduct,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleEditButtonClick = (productId) => {
        window.open(`${window.location.origin}/products/${productId}`, '_blank');
    };

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const updatedProducts = products.map(product =>
            product._id === selectedProduct._id ? selectedProduct : product
        );
        setProducts(updatedProducts);
        updateFixedData(updatedProducts); // Send updated data to the backend
        alert("Product updated successfully!");
    };

    const handleAddNewProduct = () => {
        const newProduct = {
            _id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
            name: "New Product",
            description: "Description of the new product",
            price: 0,
            image: [""],
            category: "",
            subCategory: "",
            sizes: [],
            date: Date.now(),
            bestseller: false
        };
        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        setSelectedProduct(newProduct); // Automatically select the new product
        updateFixedData(updatedProducts); // Send updated data to the backend
    };

    const handleAddNewFieldToProduct = () => {
        if (!newFieldName) return alert("Please enter a field name.");

        // Create a new object for the selected product with the new field
        const updatedSelectedProduct = {
            ...selectedProduct,
            [newFieldName]: newFieldType === 'checkbox' ? false : "" // Default value based on field type
        };

        // Update the selected product in the products list
        const updatedProducts = products.map(product =>
            product._id === selectedProduct._id ? updatedSelectedProduct : product
        );

        // Update both states
        setSelectedProduct(updatedSelectedProduct);
        setProducts(updatedProducts);
        updateFixedData(updatedProducts); // Send updated data to the backend

        setNewFieldName(""); // Clear the input field
        setNewFieldType("text"); // Reset field type
    };

    const handleAddNewFieldToAllProducts = () => {
        if (!newFieldName) return alert("Please enter a field name.");

        // Add the new field to ALL products
        const updatedProducts = products.map(product => ({
            ...product,
            [newFieldName]: product[newFieldName] || (newFieldType === 'checkbox' ? false : "") // Preserve existing value or set default
        }));

        // Update the products list
        setProducts(updatedProducts);
        updateFixedData(updatedProducts); // Send updated data to the backend

        // Also add the new field to the selected product (if any)
        if (selectedProduct) {
            setSelectedProduct({
                ...selectedProduct,
                [newFieldName]: newFieldType === 'checkbox' ? false : ""
            });
        }

        setNewFieldName(""); // Clear the input field
        setNewFieldType("text"); // Reset field type
    };

    return (
        <div style={{ display: 'flex', padding: '20px' }}>
            {/* Left Side: Product List */}
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

                <h2>Product List</h2>
                <button
                    onClick={handleAddNewProduct}
                    style={{
                        padding: '8px 12px',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginBottom: '10px'
                    }}
                >
                    Add New Product
                </button>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
                />
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {filteredProducts.map(product => (
                        <li
                            key={product._id}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '10px',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                backgroundColor: selectedProduct?._id === product._id ? '#f0f0f0' : '#fff'
                            }}
                            onClick={() => handleSelectProduct(product)}
                        >
                            <img
                                src={product.image[0]}
                                alt={product.name}
                                style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '5px' }}
                            />
                            <div>
                                <h4 style={{ margin: 0 }}>{product.name}</h4>
                                <p style={{ margin: 0, color: '#666' }}>${product.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Side: Edit Form */}
            <div style={{ flex: 2 }}>
                {selectedProduct ? (
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <h2 style={{ margin: 0 }}>Edit Product</h2>
                            <button
                                onClick={() => handleEditButtonClick(selectedProduct._id)}
                                style={{
                                    marginLeft: '10px',
                                    padding: '5px 10px',
                                    backgroundColor: '#007bff',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer'
                                }}
                            >
                                Product Detail Page
                            </button>
                        </div>
                        <form onSubmit={handleUpdateProduct} style={{ maxWidth: '600px' }}>
                            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                                {/* Product Details */}
                                <div style={{ flex: 1 }}>
                                    <h3>Product Details</h3>
                                    {Object.keys(selectedProduct).map((key) => (
                                        key !== "_id" && key !== "date" && (
                                            <div key={key} style={{ marginBottom: '10px' }}>
                                                <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                                                {typeof selectedProduct[key] === 'boolean' ? (
                                                    <input
                                                        type="checkbox"
                                                        name={key}
                                                        checked={selectedProduct[key]}
                                                        onChange={handleInputChange}
                                                        style={{ marginLeft: '10px' }}
                                                    />
                                                ) : (
                                                    <input
                                                        type={typeof selectedProduct[key] === "number" ? "number" : "text"}
                                                        name={key}
                                                        value={selectedProduct[key]}
                                                        onChange={handleInputChange}
                                                        style={{ width: '100%', padding: '8px' }}
                                                    />
                                                )}
                                            </div>
                                        )
                                    ))}
                                </div>

                                {/* Product Images */}
                                <div style={{ flex: 1 }}>
                                    <h3>Product Images</h3>
                                    {selectedProduct.image.map((img, index) => (
                                        <div key={index} style={{ marginBottom: '10px' }}>
                                            <img
                                                src={img}
                                                alt={`Product Image ${index + 1}`}
                                                style={{ width: '100px', height: '100px', marginRight: '10px', borderRadius: '5px' }}
                                            />
                                            <input
                                                type="text"
                                                value={img}
                                                onChange={(e) => {
                                                    const updatedImages = [...selectedProduct.image];
                                                    updatedImages[index] = e.target.value;
                                                    setSelectedProduct({
                                                        ...selectedProduct,
                                                        image: updatedImages
                                                    });
                                                }}
                                                style={{ width: 'calc(100% - 120px)', padding: '8px', border: '1px solid #ddd', borderRadius: '5px' }}
                                            />
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSelectedProduct({
                                                ...selectedProduct,
                                                image: [...selectedProduct.image, '']
                                            });
                                        }}
                                        style={{
                                            padding: '8px 12px',
                                            backgroundColor: '#28a745',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '5px',
                                            cursor: 'pointer',
                                            marginTop: '10px'
                                        }}
                                    >
                                        Add New Image
                                    </button>
                                </div>
                            </div>

                            {/* Add New Field */}
                            <div style={{ marginBottom: '20px' }}>
                                <h3>Add New Field</h3>
                                <input
                                    type="text"
                                    placeholder="Enter new field name"
                                    value={newFieldName}
                                    onChange={(e) => setNewFieldName(e.target.value)}
                                    style={{ width: 'calc(100% - 240px)', padding: '8px', marginRight: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
                                />
                                <select
                                    value={newFieldType}
                                    onChange={(e) => setNewFieldType(e.target.value)}
                                    style={{ padding: '8px', marginRight: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
                                >
                                    <option value="text">Text</option>
                                    <option value="number">Number</option>
                                    <option value="checkbox">Checkbox</option>
                                </select>
                                <button
                                    type="button"
                                    onClick={handleAddNewFieldToProduct}
                                    style={{
                                        padding: '8px 12px',
                                        backgroundColor: '#28a745',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        marginRight: '10px'
                                    }}
                                >
                                    Add Field to This Product
                                </button>
                                <button
                                    type="button"
                                    onClick={handleAddNewFieldToAllProducts}
                                    style={{
                                        padding: '8px 12px',
                                        backgroundColor: '#007bff',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Add Field to All Products
                                </button>
                            </div>

                            {/* Update Product Button */}
                            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                                Update Product
                            </button>
                        </form>
                    </div>
                ) : (
                    <p>Select a product to edit.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;