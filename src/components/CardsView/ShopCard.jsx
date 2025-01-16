import PropTypes from "prop-types"

export function ShopCard({product}) {
    return (
        <div className="product-card" style={{backgroundImage: `url(${product.img})`, backgroundSize: 'contain'}}>
            <div className="product-name-box">
                <div className="product-name">{product.name}</div>
                <div className="product-color">{product.color}</div>
            </div>
            <div className="product-empty-box"></div>
            <div className="product-purchase-box">
                <div className="product-price">{'$' + product.price}</div>
                <button className="product-button">ADD TO CART</button>
            </div>
        </div>
    )
}

ShopCard.propTypes = {
    product: PropTypes.object,
}