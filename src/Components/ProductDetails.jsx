import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="card mb-3 mt-5 container shadow-lg p-3 mb-5 bg-body rounded ">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={product.image}
            className="img-fluid p-4 rounded "
            alt={product.title}
            style={{ objectFit: "contain", maxHeight: "400px", width: "100%" }}
          />
        </div>
        <div className="col-md-8 border-start shadow-md mt-5">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="card-text">
              <strong>Rating:</strong> {product.rating.rate} / 5 (
              {product.rating.count} reviews)
            </p>
            <h4 className="text-success">${product.price}</h4>
          </div> 
          <div className="card-footer  bg-white border-0">
            <Link to="/products" className="btn btn-primary w-50">
              Back to Products
            </Link>               
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProductDetails;
