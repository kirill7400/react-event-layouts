function ShopItem({ card }) {
  return(
    <div className='card-module'>
      <div className='card-item-module name'>
        { card.name.toUpperCase() }
      </div>
      <div className='card-item-module color'>
        { card.color }
      </div>
      <div className='card-item-module'>
        <img className='card-img' src={ card.img } alt="img"/>
      </div>
      <div className='card-item-module-bottom'>
        <div className='card-item-list-price'>
          ${ card.price }
        </div>
        <div className='card-item-list-btn'>
          <button className='btn'>ADD</button>
        </div>
      </div>

    </div>
  )
}

export default ShopItem