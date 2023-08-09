import React, { useState,useContext } from "react";
import { categoryList, productList } from "../content/files/products";
import Categories from "../components/sections/products/categories/Categories";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const [showProducts, setshowProducts] = useState(true);
  const [chosenCategory, setChosenCategory] = useState();
  const ProductCtx = useContext(ProductContext)
  return (
    <div className="">
      <Categories
        setShowProducts={setshowProducts}
        setChosenCategory={setChosenCategory}
        categories={ProductCtx.categoryList}
      />
    
    </div>
  );
};

export default Home;
