import { Link } from "react-router";
import "./product_detail.css";

export default function ProductDetails() {
    return (
        <div className="product">
            <h1>You are on the Product Details Page!</h1>
            <div className="product-info">
                <h2>Detail 1</h2>
                <h3>Detail 2</h3>
                <h4>Detail 3</h4>
            </div>
            <Link to="/">Back to Home</Link>
        </div>
    );
}
