import ShopItem from "../ShopItem/ShopItem";
import './ListView.css'

function ListView ({ items }) {
    return (
      <div className="items_container">
        {items.map((item) => (
          <ShopItem 
            key={item.name}
            item={item}
          />
        ))}
      </div>
      
    )
}

export default ListView;