
import Classes from './Sales.module.css';
import Product from '../Product/Product';
import ProductGallery from '../ProductGallery/ProductGallery';

const sales = (props) => {
  let salesProducts = props.salesProducts.map((product, i) => {
      return  <Product
      key = {product.id}
      id = {product.id}
      img = {product.img}
      details = {product.details}
      title = {product.title}
      price = {product.price}/>
  });

  return (
    <>
      <section className={(Classes.product, Classes.spad)}>
        <div className="container">
          <ProductGallery/>
          <div className={"row property__gallery"} id="MixItUpBDF025">
            {salesProducts}
          </div>
        </div>
      </section>
    </>
  );
}
export default sales;