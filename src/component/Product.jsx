import React from 'react'
import { Button } from 'react-bootstrap'
import products from "../product"
import Rating from './Rating'


const Product = ({product}) => {
  return (
    <div>
        <div className="card mb-10">
            <div className='card-body'>
                <div className="card-img-actions">
                    <img className='card-img img-fluid' src={product.image} width={96} height={350} />
                </div>
            </div>
            <div className="card-body bg-light text-center">
                <div className='mb-2'>
                    <h6>
                        <a href={"/product/${product._id}"} className="product-title"> {product.name}</a>
                    </h6>
                    <span className='product-category'>{product.category}</span>
                </div>

                <div>
                    <Rating value={product.rating} color={"#ffdf00"}></Rating>
                    {/* <i class="fa-solid fa-star star"></i>
                    <i class="fa-solid fa-star star"></i>
                    <i class="fa-solid fa-star star"></i>
                    <i class="fa-solid fa-star star"></i>
                    <i class="fa-solid fa-star star"></i> */}
                </div>

                <div className="text-muted mb-3">{product.numReviews}</div>
                <h3 className="mb-10">$ {product.price}</h3>
                <Button variant="warning"><i class="fa-solid fa-cart-shopping"></i>Sepete Ekle</Button>
            </div>
        </div>
    </div>
  )
}

export default Product