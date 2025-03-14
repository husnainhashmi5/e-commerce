import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import FiltersSidebar from "../components/FiltersSidebar";
import AllCollections from "../components/AllCollections";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {
    const { productsData, search } = useContext(ShopContext);
    const [filteredData, setFilteredData] = useState(productsData); // Initialize with all products

    // Function to filter products based on categories, subcategories, brands, and search
    const filterByData = ({ categories = [], types = [], brands = [] }) => {
        let newData = [...productsData];

        // Filter by search query
        if (search) {
            newData = newData.filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Filter by selected categories
        if (categories.length > 0) {
            newData = newData.filter((product) =>
                categories.includes(product.category)
            );
        }

        // Filter by selected subcategories (types)
        if (types.length > 0) {
            newData = newData.filter((product) =>
                types.includes(product.subCategory)
            );
        }

        // Filter by selected brands
        if (brands.length > 0) {
            newData = newData.filter((product) =>
                brands.includes(product.brand)
            );
        }

        setFilteredData(newData);
    };

    // Update filtered data whenever search or productsData changes
    useEffect(() => {
        filterByData({ categories: [], types: [], brands: [] }); // Reset all filters
    }, [search, productsData]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="collection-page py-3 pt-405"
        >
            <div className="container">
                <div className="row row-gap-4">
                    {/* Sidebar with filters */}
                    <FiltersSidebar filterByData={filterByData} />

                    {/* Display all collections with the fetched data */}
                    <div className="col-12 col-md-8 col-lg-9 col-xxl-10 position-relative">
                        {filteredData.length > 0 ? (
                            <AllCollections data={filteredData} />
                        ) : (
                            <p className="nomatch-msg position-absolute top-50 start-50 fs-3 text-center">
                                There are no products matching your choice 🙄
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Collection;