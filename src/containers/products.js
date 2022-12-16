import React from 'react';
import"./Product.css"

const Products = ({ productItems,handleAddProduct }) => {
    return (
        <div className="products">
            {productItems.map((productItems) => (
                <div className="card">
                    <div>
                        <img className="product-image" src={productItems.image} alt={productItems.name} />
                    </div>
                    <div>
                        <h3 className="product-name">{productItems.name} </h3>
                    </div>
                    <div className="product-price">RS :  {productItems.price}
                    </div>
                    <div>
                        <button className="product-add-button" onClick={()=>handleAddProduct(productItems)}>Add to cart</button>
                    </div>
                </div>
            ))}
        </div>




    )
}

export default Products;