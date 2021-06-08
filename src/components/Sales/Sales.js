import Classes from './Sales.module.css';
import Product from '../Product/Product';


const sales = (props) => {
  let salesProducts = props.salesProducts.map((product, i) => { 
      return  <Product
      key = {product.id}
      id = {product.id}
      image = {product.image}
      details = {product.description}
      title = {product.title}
      price = {product.price.$numberDecimal}/>
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