import ShopCard from "../ShopCard/ShopCard"
import './CardView.css'

function CardView ({ cards }) {
  return (
    <div className="cards-container">    
      {cards.map((card) => (
        <ShopCard
          key={card.name}
          card={card}
        />
      ))}
    
    </div>
  )
}

export default CardView