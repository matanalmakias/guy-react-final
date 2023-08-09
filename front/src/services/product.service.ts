import axios from "axios";
import { serverUrl } from "../content/content.ts";
import { headers } from "../utils/utils.ts";
const deleteProduct = async(productId:string)=>{
  return await axios.delete(`${serverUrl}/product/deleteProduct/${productId}`,headers)
}
const getCategoryList = async()=>{
  return await axios.get(`${serverUrl}/product/getCategoryList`)
}
const getProductList = async () => {
  return await axios.get(`${serverUrl}/product`);
};

const productServices = {deleteProduct,getCategoryList, getProductList };
export default productServices;
