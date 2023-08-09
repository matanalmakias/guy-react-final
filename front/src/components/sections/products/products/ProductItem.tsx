import React, { useContext ,useState} from 'react';
import ShekelSymbol from '../../../ui/ShekelSymbol';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { AuthContext } from '../../../../contexts/AuthContext';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { ProductContext } from '../../../../contexts/ProductContext';

interface ProductItemProps {
  item: {
    title: string;
    price: number;
    _id: string;
  };
  filteredProducts:any[],
  setFilteredProducts:()=>void
}

const ProductItem: React.FC<ProductItemProps> = ({ filteredProducts,setFilteredProducts,item: prItem  }) => {
  const AuthCtx = useContext(AuthContext);
  const ProductCtx = useContext(ProductContext);

  return (
    <tr >
                <td>{prItem?.title}</td>
                <td>{prItem?.price}</td>
                <td>
                  <img src="../assets/shooes.jpg" />
                </td>
                <td>
                  <button className="btn2 p-1 fs_12 ls2">
                    <BsFillCartPlusFill size={20} />
                    הוסף לסל
                  </button>
                  {AuthCtx.isAdmin && <div>
                    <span onClick={()=>ProductCtx.crudHandler(`delete`,prItem?._id,filteredProducts,setFilteredProducts)}   className="cursor"> <AiFillDelete size={25}/></span>
                    <span className="cursor"><AiFillEdit size={25}/></span>
                    </div>}
                </td>
              </tr>
  );
};

export default ProductItem;
