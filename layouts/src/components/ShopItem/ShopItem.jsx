import './ShopItem.css'

function ShopItem ({ item }) {
  return (
    <div className="item">
      <img 
        src={item.img} 
        alt={item.name} 
        className="item_img"
      />
      <div 
        className="item_name">
          {item.name}
      </div>
      <div 
        className="item_color">
          {item.color}
      </div>
      <div 
        className="item_price">
          ${item.price}
      </div>
      <button 
        className="button_add">
          ADD TO CART
      </button>
    </div>
  )
}

export default ShopItem;