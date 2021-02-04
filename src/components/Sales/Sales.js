
import Classes from './Sales.module.css';
import Product from '../Product/Product';
import sportImg from '../../assets/img/categories/1.jpg'

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
      <div className="row">
        <div className="col-lg-6">
          <div className={Classes.categories__item} style={{backgroundImage: `url(${sportImg})`, height: '102vh'}}>
            <div className={Classes.categories__text}>
              <h4>Sports</h4>
              <p>Break your records</p>
              <a role="button" className="btn btn-sm" href="#">Explore</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
              <div className={Classes.categories__item} style={{backgroundImage: `url(${sportImg})`, height: '50vh'}}>
                <div className={Classes.categories__text}>
                  <h4>Basics</h4>
                  <p>Essentials</p>
                  <a role="button" className="btn btn-sm" href="#">Explore</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
              <div className={Classes.categories__item} style={{backgroundImage: `url(${sportImg})`, height: '50vh'}}>
                <div className={Classes.categories__text}>
                  <h4>Classics</h4>
                  <p>Formal Wear</p>
                  <a role="button" className="btn btn-sm" href="#">Explore</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 p-0">
              <div className={Classes.categories__item} style={{backgroundImage: `url(${sportImg})`, height: '50vh'}}>
                <div className={Classes.categories__text}>
                  <h4>Trending</h4>
                  <p>New Styles</p>
                  <a role="button" className="btn btn-sm" href="#">Explore</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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