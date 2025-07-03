import './ShopCard.css'
function ShopCard ({ card }) {
  return (
    <div className="card"
    style={{
      backgroundImage: `url(${card.img})`,
      backgroundSize: "cover"
    }}>
      <h4 className="product_name">
        {card.name}
      </h4>

      <div className="product_color">
        {card.color}
      </div>

      <div className="card_footer">
        <div className="product_price">
          ${card.price}
        </div>
        <button className="button_add">ADD TO CART</button>
      </div>
    </div>
  )
}

export default ShopCard