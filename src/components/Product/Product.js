import Classes from './Product.module.css';
import { Link, link } from 'react-router-dom';
const product = (props) => {
    return(
        <>
        <div className={"col-lg-3 col-md-4 col-sm-6 mix women"}>
            <div className={Classes.product__item}>
                <div className={Classes.ProductTumb}>
                    <img src={props.img} alt=""/>
                </div>
                <div className={Classes.product__item__text}>
                    <h6><a href="#">{props.title}</a></h6>
                    <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                    </div>
                    <div className={Classes.product__price}>{props.price}</div>
                    <div className={Classes.ProductLinks}>
                        {/* <a href={"/product/"+props.id}>Comprar</a> */}
                        <Link to={"/product/"+props.id}>Comprar</Link>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}
export default product;