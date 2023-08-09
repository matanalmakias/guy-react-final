import React, { createContext, useState, useEffect } from "react";
import { ChildrenType } from "../utils/types";
import { toast } from "react-toastify";
import productServices from "../services/product.service";

type ProductContextValue = {
  productList: any[];
  categoryList: any[]; 
  crudHandler:(action:string,productId:string,filteredProducts:any[],setFilteredProducts:any)=>void
};

const initialContextValue: ProductContextValue = {
  productList: [],
  categoryList: [],  
  crudHandler:()=>{},

};

export const ProductContext = createContext<ProductContextValue>(initialContextValue);

export const ProductContextProvider: React.FC<ChildrenType> = ({ children }) => {
  const [productList, setProductList] = useState<any[]>([]);
  const [categoryList, setCategoryList] = useState<any[]>([]); 

  useEffect(() => {
    productServices
      .getProductList()
      .then((res) => setProductList(res.data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    productServices
      .getCategoryList()
      .then((res) => setCategoryList(res.data))
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);
const crudHandler = async (
  action: string,
  productId: string,
  filteredProducts: any[],
  setFilteredProducts: React.Dispatch<React.SetStateAction<any[]>> // Correct type for setFilteredProducts
) => {
  if (action === "delete") {
    const updatedProducts = filteredProducts.filter(item => item?._id !== productId);
    setFilteredProducts(updatedProducts);
    productServices.deleteProduct(productId).then(res=>toast(res.data))
  }
};
  const contextValue: ProductContextValue = { crudHandler,categoryList, productList };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
