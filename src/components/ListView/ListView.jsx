import PropTypes from "prop-types"
import { ShopItem } from "./ShopItem"

export default function ListView({items}) {
    return (
        <div className="product-cards-grid">
            {items.map(item => {
            return (
                <ShopItem
                product={item} 
                key={item.name} />
            )})}
        </div>
    )
}

ListView.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
}