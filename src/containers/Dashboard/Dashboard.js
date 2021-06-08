import Sales from '../../components/Sales/Sales';
import WelcomeCards from '../../components/WelcomeCards/WelcomeCards';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import ProductGallery from '../../components/ProductGallery/ProductGallery';

const Dashboard = (props) => {
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
            <WelcomeCards/>
            <ProductGallery/>
            <Sales salesProducts={productsState}/>
            <Footer/>
        </>
    );
}
export default Dashboard;