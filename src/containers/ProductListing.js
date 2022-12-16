import React ,{useEffect}from 'react' 
import { useSelector,useDispatch } from 'react-redux';
import {fetchProducts} from'../redux/actions/productActions'
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products=useSelector((state)=> state.products)
    const dispatch = useDispatch();

    // const fetchProducts =async ()=>{
    //     const response =await axios.get('https://fakestoreapi.com/products').catch((err)=>{
    //         console.log( "Err",err);
    //     })
    //     // console.log("responseData",response.data)

    //     dispatch (setProducts (response.data));
    // }
    useEffect(()=>{
        dispatch(fetchProducts());
    },[]);
console.log("products:",products)
return (
    <div className="container"><br/><br/><br/><br/>
      <ProductComponent/>
    </div>
  );
}

export default ProductListing;