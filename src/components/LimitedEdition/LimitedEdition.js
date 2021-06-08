import { useEffect, useState } from 'react';
import axios from 'axios';
import Sales from '../Sales/Sales';
import Footer from '../Footer/Footer';

const LimitedEdition = (props) => {
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
            <div className="jumbotron jumbotron-fluid bg-primary">
                <div className="container">
                <h1 className="display-4 text-light">Exclusive Drop</h1>
                <p className="lead text-light">Malcon Exclusive drop - Limited Edition</p>
                </div>
            </div>
            <Sales salesProducts={productsState}/>
            <Footer/>
        </>
    );
}
export default LimitedEdition;