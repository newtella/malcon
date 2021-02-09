import Sales from '../../components/Sales/Sales';
import WelcomeCards from '../../components/WelcomeCards/WelcomeCards';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';


const Dashboard = (props) => {
    const [productsState, setProductsState] = useState({
        Products: []
    });
    useEffect(() => {
        axios.get('https://swapi.dev/api/films')
        .then(response => {
            let productsinfo = response.data.results;
            productsinfo = productsinfo.map(product => ({
              title: product.title,
              episode_id: product.episode_id,
              opening_crawl: product.opening_crawl,
              img: 'https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/1F1402A6F6F4A6/1F1402A6F6F4A6-50F2F15A7633-GS1-TC0-WHT/front/thumb.jpg',
              characters: [...product.characters]
            }));
            setProductsState({Products: [...productsinfo]})
        });
    }, []);
    return(
        <>
            <WelcomeCards/>
            <Sales salesProducts={productsState}/>
            <Footer/>
        </>
    );
}
export default Dashboard;