import PropTypes from "prop-types"

export function ShopItem({product}) {
    return (
        <div className="product-list-element">
            <img className="product-image" src={product.img} />
            <div className="product-name">{product.name}</div>
            <div className="product-color">{product.color}</div>
            <div className="product-price">{'$' + product.price}</div>
            <button className="product-button">ADD TO CART</button>
        </div>
    )
}

ShopItem.propTypes = {
    product: PropTypes.object,
}