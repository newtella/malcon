
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
            <div className={"col-lg-3 col-md-4 col-sm-6 mix women"}>
              <div className={Classes.product__item}>
                <div className={Classes.product__item__pic, Classes.set_bg} data-setbg={`url(${sportImg})`} style={{backgroundImage: `url(${sportImg})`, height: "40vh"}}>
                  {/* <div class="label new">New</div> */}

                </div>
                <div className={Classes.product__item__text}>
                  <h6><a href="#">Tee Hologram Blue</a></h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className={Classes.product__price}>Q399.00</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix men">
              <div className={Classes.product__item}>
                <div className={Classes.product__item__pic, Classes.set_bg} data-setbg={`url(${sportImg})`} style={{backgroundImage: `url(${sportImg})`, height: "40vh"}}>

                </div>
                <div className={Classes.product__item__text}>
                  <h6><a href="#">Flowy striped skirt</a></h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className={Classes.product__price}>Q29.99</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix accessories">
              <div className={Classes.product__item}>
                <div className={Classes.product__item__pic, Classes.set_bg} data-setbg={`url(${sportImg})`} style={{backgroundImage: `url(${sportImg})`, height: "40vh"}}>
                  {/* <div class="label stockout">out of stock</div> */}

                </div>
                <div className={Classes.product__item__text}>
                  <h6><a href="#">Cowboy Jeans SkyBlue</a></h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className={Classes.product__price}>Q499.00</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix cosmetics">
              <div className={Classes.product__item}>
                <div className={Classes.product__item__pic, Classes.set_bg} data-setbg={`url(${sportImg})`} style={{backgroundImage: `url(${sportImg})`, height: "40vh"}}>
                  {/* <div class="label stockout">out of stock</div> */}

                </div>
                <div className={Classes.product__item__text}>
                  <h6><a href="#">Clear T-Shirt</a></h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className={Classes.product__price}>Q499.00</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix kid">
              <div className={Classes.product__item}>
                <div className={Classes.product__item__pic, Classes.set_bg} data-setbg={`url(${sportImg})`} style={{backgroundImage: `url(${sportImg})`, height: "40vh"}}>

                </div>
                <div className={Classes.product__item__text}>
                  <h6><a href="#">Cotton Socks Blue</a></h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className={Classes.product__price}>Q79.99</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix kid">
              <div className={Classes.product__item}>
                <div className={Classes.product__item__pic, Classes.set_bg} data-setbg={`url(${sportImg})`} style={{backgroundImage: `url(${sportImg})`, height: "40vh"}}>

                </div>
                <div className={Classes.product__item__text}>
                  <h6><a href="#">Flat Triangles Tie</a></h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className={Classes.product__price}>Q79.99</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix kid">
              <div className={Classes.product__item}>
                <div className={Classes.product__item__pic, Classes.set_bg} data-setbg={`url(${sportImg})`} style={{backgroundImage: `url(${sportImg})`, height: "40vh"}}>

                </div>
                <div className={Classes.product__item__text}>
                  <h6><a href="#">Banana SunGlasses</a></h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className={Classes.product__price}>Q79.99</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix kid">
              <div className={Classes.product__item}>
                <div className={Classes.product__item__pic, Classes.set_bg} data-setbg={`url(${sportImg})`} style={{backgroundImage: `url(${sportImg})`, height: "40vh"}}>

                </div>
                <div className={Classes.product__item__text}>
                  <h6><a href="#">California Blue Tank</a></h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className={Classes.product__price}>Q79.99</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default sales;