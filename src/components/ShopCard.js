function ShopCard({ card }) {

  return (
    <div className='card-list'>
      <div className='card-item-list'>
        <img className='card-img' src={ card.img } alt="img"/>
      </div>
      <div className='card-item-list name'>
        { card.name.toUpperCase() }
      </div>
      <div className='card-item-list color'>
        { card.color }
      </div>
      <div className='card-item-list price'>
        ${ card.price }
      </div>
      <div className='card-item-list-btn'>
        <button className='btn'>ADD</button>
      </div>
    </div>
  )
}

export default ShopCard