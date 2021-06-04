import Classes from './Sales.module.css';
import Product from '../Product/Product';


const sales = (props) => {
  let salesProducts = props.salesProducts.map((product, i) => {
      return  <Product
      key = {product.episode_id}
      id = {product.episode_id}
      img = {product.img}
      details = {product.details}
      title = {product.title}
      price = {product.price}/>
  });

  return (
    <>
      <section className={(Classes.product, Classes.spad)}>
        <div className="container">
          <div className={"row property__gallery"} id="MixItUpBDF025">
            {salesProducts}
          </div>
        </div>
      </section>
    </>
  );
}
export default sales;