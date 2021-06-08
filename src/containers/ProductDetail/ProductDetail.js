import React, { useEffect, useState } from 'react';
import PDstyle from './PDstyle.css';

const ProductDetail = (props) =>
{   
    let objectInfo = <div style={{textAlign: "center"}}><h1>Product not found...</h1></div>;
    if(Object.entries(props).length !== 0)
    {
        objectInfo = (
            <div className="modal app PopUp">
                <button style={{padding: "10px"}} className="close" onClick={()=> props.popUp(false)} >X</button>
                <div className="details" key={props.productDetail._id}>
                    <div style={{padding: "10px"}} className="big-img">
                        <img src={props.productDetail.image} alt=""/>
                    </div>
                    <div className="box">
                        <div className="row">
                        <h2>{props.productDetail.title}</h2>
                        <span style={{marginLeft: "05px"}}>{` Q${props.productDetail.price}`}</span>
                        </div>
                        <p>{props.productDetail.title}</p>
                        <p>{props.productDetail.details}</p>
                        <button className="cart">Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }if (props.popUp == false) {
        return null;
    }
    return (
        <>
            {objectInfo}
        </>
    );
    
}

export default ProductDetail;