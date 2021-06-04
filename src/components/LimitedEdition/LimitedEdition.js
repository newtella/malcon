import { useEffect, useState } from 'react';
import axios from 'axios';
import Sales from '../Sales/Sales';

const LimitedEdition = (props) => {
    const [productsState, setProductsState] = useState([]);
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
        </>
    );
}
export default LimitedEdition;