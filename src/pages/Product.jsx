import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils";

export const loader = async ({ params }) => {
  const req = await axiosInstance(`/product/${params.id}`);
  return req.data;
};

function Product() {
  const data = useLoaderData();

  return (
    <div className="single-product">
      <div className="single-product__content">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="single-product__image"
        />
        <div className="single-product__info">
          <h2 className="single-product__title">{data.title}</h2>
          <p>{data.description}</p>
          <span className="single-product__price">${data.price}</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
