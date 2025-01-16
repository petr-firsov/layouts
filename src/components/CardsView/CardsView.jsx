import PropTypes from "prop-types"
import { ShopCard } from "./ShopCard"

export default function CardsView({products}) {
    return (
        <div className="product-cards-grid">
            {products.map(product => {
            return (
                <ShopCard 
                product={product}
                key={product.name}  />
            )})}
        </div>
    )
}

CardsView.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object)
}