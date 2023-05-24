import ShopCard from "./ShopCard";
import ShopItem from "./ShopItem";

function CardsView({ cards, variant }) {
  const card = cards.map((card, i) => {
    if (variant === 'view_module')
      return <ShopCard key={ i } card={ card }/>
    else
      return <ShopItem key={ i } card={ card }/>
  })

  return (
    <div className={ variant === 'view_module' ? 'card-view-list' : 'card-view-module' }>
      { card }
    </div>
  )
}

export default CardsView