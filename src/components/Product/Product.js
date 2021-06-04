import Classes from './Product.module.css';
import { Link, link } from 'react-router-dom';
import React, { useState } from 'react';
import ProductDetail from '../../containers/ProductDetail/ProductDetail';

const Product = (props) => {
    const [popUp, setPopUp] = useState(false)
    const duringPopUp = popUp ? " during-popup" : ""
    const [article, setArticle] = useState();

    const setModalToTrue = (id) => {
        setArticle(id);
        setPopUp(true);
    }

    return(
        <>
        <div className={"col-lg-3 col-md-4 col-sm-6 mix women"+ duringPopUp}>
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
                    <button className={"btn btn-block btn-info" + duringPopUp} onClick = {() => setModalToTrue(props.id)}>Comprar</button>
                        {/* <a href={"/product/"+props.id}>Comprar</a> */}
                        {/* <Link className={"btn btn-block btn-secondary"} to={"/product/"+props.id}>Comprar</Link> */}
                    </div>
                </div>
            </div>
        </div>
        {popUp && <ProductDetail popUp = {setPopUp} productDetail = {article}/>}
      </>
    );
}
export default Product;
