import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard/ProductCard";
import "./Product.css";

const Products = () => {
  const [items, setItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  const [sortOrderPrice, setSortOrderPrice] = useState("");
  const [sortOrderTitle, setSortOrderTitle] = useState("");
  const [searchString, setSearchString] = useState("");
  const params = useParams();

  const fetchProducts = async () => {
    try {
      let url = "https://fakestoreapi.com/products";
      if (params.category) {
        url = `${url}/category/${params.category}`;
      }
      const response_c = await axios.get(url);
      const data = response_c.data;

      setItems(data);
      applyFiltersAndSorting(
        data,
        searchString,
        sortOrderPrice,
        sortOrderTitle,
      );
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [params, items]);

  const applyFiltersAndSorting = (data, searchStr, priceOrder, titleOrder) => {
    let filteredData = data;

    // Apply search filter
    if (searchStr) {
      filteredData = filteredData.filter((itemEntry) =>
        itemEntry.title.toLowerCase().includes(searchStr.toLowerCase()),
      );
    }

    // Apply sorting by price
    if (priceOrder === "asc") {
      filteredData.sort((a, b) => a.price - b.price); // Ascending order by price
    } else if (priceOrder === "desc") {
      filteredData.sort((a, b) => b.price - a.price); // Descending order by price
    }

    // Apply sorting by title
    if (titleOrder === "asc") {
      filteredData.sort((a, b) => a.title.localeCompare(b.title)); // Ascending order by title
    } else if (titleOrder === "desc") {
      filteredData.sort((a, b) => b.title.localeCompare(a.title)); // Descending order by title
    }

    setSearchedItems(filteredData);
  };

  useEffect(() => {
    applyFiltersAndSorting(items, searchString, sortOrderPrice, sortOrderTitle);
  }, [searchString, sortOrderPrice, sortOrderTitle]);

  const handleSearch = (e) => {
    const searchStr = e.target.value.toLowerCase();
    setSearchString(searchStr);
  };

  return (
    <div>
      <div>
        <input
          className="m-5 rounded-lg border-2 border-black p-1"
          type="text"
          placeholder="Search"
          onChange={handleSearch}
        />

        <label htmlFor="sortOrderPrice" className="m-2 text-white">
          Price:
        </label>
        <select
          className="m-2 rounded-lg border-2 border-black p-1"
          value={sortOrderPrice}
          onChange={(e) => setSortOrderPrice(e.target.value)}
        >
          <option value="">Select an Option</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>

        <label htmlFor="sortOrderTitle" className="m-2 text-white">
          Title:
        </label>
        <select
          className="m-2 rounded-lg border-2 border-black p-1"
          value={sortOrderTitle}
          onChange={(e) => setSortOrderTitle(e.target.value)}
        >
          <option value="">Select an Option</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="cardsGrid">
        {searchedItems.map((itemEntry) => {
          return <ProductCard key={itemEntry.id} item={itemEntry} />;
        })}
      </div>
    </div>
  );
};

export default Products;
