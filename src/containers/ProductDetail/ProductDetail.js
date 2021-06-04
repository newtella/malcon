import React, { useEffect, useState } from 'react';
import PDstyle from './PDstyle.css';

const ProductDetail = (props) =>
{   
    const [product, setProductState] = useState({});
    const productId = +props.productDetail;
    const productDB = [
        {
            id: 0,
            img: "https://images-na.ssl-images-amazon.com/images/I/716hxkzc4SL._SY445_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$0.05"
        },
        {
            id: 1,
            img: "https://images-na.ssl-images-amazon.com/images/I/71RJjEn8oCL._SX342_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$50"
        },
        {
            id: 2,
            img: "https://images-na.ssl-images-amazon.com/images/I/51P7ctxJSvL._AC_SL1000_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$11"
        },
        {
            id: 3,
            img: "https://images-na.ssl-images-amazon.com/images/I/81WMUxNTRYL._SX342_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$110"
        },
        {
            id: 4,
            img: "https://images-na.ssl-images-amazon.com/images/I/81-JwILO-FL._AC_SL1500_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$50"
        },
        {
            id: 5,
            img: "https://images-na.ssl-images-amazon.com/images/I/81-JwILO-FL._AC_SL1500_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$50"
        }
    ];


    useEffect(() => {
        /* ir al web service.. y obtener detalles del producto seleccionado... */
        const p = (productDB.filter(p => p.id === productId))[0] || {};
        setProductState({...p});
    }, [productId]);

    let objectInfo = <div style={{textAlign: "center"}}><h1>Product not found...</h1></div>;
    if(Object.entries(product).length !== 0)
    {
        objectInfo = (
            <div className="modal app PopUp">
                <button style={{padding: "10px"}} className="close" onClick={()=> props.popUp(false)} >X</button>
                <div className="details" key={product._id}>
                    <div className="big-img">
                        <img src={product.img} alt=""/>
                    </div>
                    <div className="box">
                        <div className="row">
                        <h2>{product.title}</h2>
                        <span style={{marginLeft: "05px"}}>{product.price}</span>
                        </div>
                        <p>{product.title}</p>
                        <p>{product.details}</p>
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