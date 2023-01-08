import Item from '../item/Item'

const ItemList = ({items}) => {
    
    return (
        <div className='col-3'>
            {
                items && items.length > 0 && items.map((item) => {
                    return (
                        <Item key={item.id} item={item} />
                    )
                })
            }
        </div>
    )
}

export default ItemList