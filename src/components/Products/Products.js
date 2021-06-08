import { useEffect, useState } from 'react';
import axios from 'axios';
import Sales from '../Sales/Sales';
import Footer from '../Footer/Footer';

const Products = (props) => {
    const [productsState, setProductsState] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:2000/articles')
        .then(response => {
            let productsinfo = response.data.results;
            productsinfo = productsinfo.map(product => ({
                id: product._id,
                title: product.title,
                description: product.description,
                price: product.price,
                image: product.image
            }));
            setProductsState([...productsinfo])
        });
    }, []);
    return(
        <>
            <div className="jumbotron jumbotron-fluid bg-success">
                <div className="container">
                <h1 className="display-4 text-light">Sale</h1>
                <p className="lead text-light">Malcon big deals only on June</p>
                </div>
            </div>
            <Sales salesProducts={productsState}/>
            <Footer/>
        </>
    );
}
export default Products;