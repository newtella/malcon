
import Classes from './Sales.module.css';
import Product from '../Product/Product';

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
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className={(Classes.section_title)}>
                <h4>Product Gallery</h4>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <ul className={(Classes.filter__controls)}>
                <li className="active" data-filter="*">All</li>
                <li data-filter=".women">Sport</li>
                <li data-filter=".men">Basics</li>
                <li data-filter=".kid">Classics</li>
                <li data-filter=".accessories">New Arrivals</li>
                <li data-filter=".cosmetic">Sales</li>
              </ul>
            </div>
          </div>
          <div className={"row property__gallery"} id="MixItUpBDF025">
            {salesProducts}
          </div>
        </div>
      </section>
    </>
  );
}
export default sales;