import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import productsData from '../components/FixedData';

const FiltersSidebar = ({ filterByData }) => {
    // State to show/hide category filter (for small screens)
    const [showCategory, setShowCategory] = useState(false);
    // State for selected categories, brands, and subcategories
    const [activeCategories, setActiveCategories] = useState([]);
    const [activeBrands, setActiveBrands] = useState([]);
    const [activeSubCategories, setActiveSubCategories] = useState([]);
    const { search } = useContext(ShopContext);

    // Extract unique categories, brands, and subcategories from productsData
    const categories = [...new Set(productsData.map(product => product.category))];
    const brands = [...new Set(productsData
        .map(product => product.brand) // Extract brands
        .filter(brand => brand && brand.trim() !== "") // Filter out undefined, null, and empty strings
    )];
    const subCategories = [...new Set(productsData
        .map(product => product.subCategory) // Extract subcategories
        .filter(subCategory => subCategory && subCategory.trim() !== "") // Filter out undefined, null, and empty strings
    )];

    // Filter subcategories based on selected category
    const filteredSubCategories = activeCategories.length > 0
        ? [...new Set(productsData
            .filter(product => activeCategories.includes(product.category))
            .map(product => product.subCategory)
            .filter(subCategory => subCategory && subCategory.trim() !== "") // Filter out undefined, null, and empty strings
        )]
        : [];

    // Trigger filter function whenever categories, brands, or subcategories change
    useEffect(() => {
        filterByData({
            categories: activeCategories,
            types: activeSubCategories, // Pass subcategories as "types"
            brands: activeBrands
        });
    }, [activeCategories, activeSubCategories, activeBrands, search]);

    // Toggle selected categories
    const manageActiveCategories = (e) => {
        const value = e.target.value;
        setActiveCategories(prev => prev.includes(value) ? prev.filter(el => el !== value) : [...prev, value]);
    };

    // Toggle selected brands
    const manageActiveBrands = (e) => {
        const value = e.target.value;
        setActiveBrands(prev => prev.includes(value) ? prev.filter(el => el !== value) : [...prev, value]);
    };

    // Toggle selected subcategories
    const manageActiveSubCategories = (e) => {
        const value = e.target.value;
        setActiveSubCategories(prev => prev.includes(value) ? prev.filter(el => el !== value) : [...prev, value]);
    };

    return (
        <aside className="filters-sidebar col-12 col-md-4 col-lg-3 col-xxl-2">
            {/* Toggle button for small screens */}
            <h3
                className="small-screen fw-normal fs-4 d-flex align-items-center gap-2 fit-content p-2 trans-3 rounded"
                role="button"
                aria-expanded={showCategory}
                onClick={() => setShowCategory((prev) => !prev)}
            >
                FILTERS
                <i
                    className={`fs-2 mt-1 c-gray bx bxs-chevron-right ${showCategory && "active"}`}
                ></i>
            </h3>

            {/* Filters label for large screens */}
            <h3 className="large-screen fw-normal fs-4 d-none mt-2">FILTERS</h3>

            {/* Category filter */}
            {categories.length > 0 && (
                <div className={`category border rounded p-3 mt-405 ${showCategory ? "d-block" : "d-none"}`}>
                    <h4 className="fs-6 mb-205">CATEGORIES</h4>
                    <ul className="list-unstyled mb-0">
                        {categories.map((category, index) => (
                            <li key={index}>
                                <input
                                    type="checkbox"
                                    name="category"
                                    id={`category-${index}`}
                                    value={category}
                                    onClick={manageActiveCategories}
                                    aria-label={`${category} category`}
                                />
                                <label className="ps-2 mt-1 fw-light" htmlFor={`category-${index}`}>
                                    {category}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Subcategory filter (only shown if a category is selected and subcategories exist) */}
            {activeCategories.length > 0 && filteredSubCategories.length > 0 && (
                <div className={`subcategory border rounded p-3 mt-4 ${showCategory ? "d-block" : "d-none"}`}>
                    <h4 className="fs-6 mb-205">SUBCATEGORIES</h4>
                    <ul className="list-unstyled mb-0">
                        {filteredSubCategories.map((subCategory, index) => (
                            <li key={index}>
                                <input
                                    type="checkbox"
                                    name="subCategory"
                                    id={`subCategory-${index}`}
                                    value={subCategory}
                                    onChange={manageActiveSubCategories} // Use onChange instead of onClick
                                    aria-label={`${subCategory} subcategory`}
                                />
                                <label className="ps-2 mt-1 fw-light" htmlFor={`subCategory-${index}`}>
                                    {subCategory}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Brand filter (only shown if brands exist) */}
            {brands.length > 0 && (
                <div className={`brand border rounded p-3 mt-4 ${showCategory ? "d-block" : "d-none"}`}>
                    <h4 className="fs-6 mb-205">BRANDS</h4>
                    <ul className="list-unstyled mb-0">
                        {brands.map((brand, index) => (
                            <li key={index}>
                                <input
                                    type="checkbox"
                                    name="brand"
                                    id={`brand-${index}`}
                                    value={brand}
                                    onClick={manageActiveBrands}
                                    aria-label={`${brand} brand`}
                                />
                                <label className="ps-2 mt-1 fw-light" htmlFor={`brand-${index}`}>
                                    {brand}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </aside>
    );
};

export default FiltersSidebar;