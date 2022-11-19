import './ItemListContainer.scss'

export const ItemListContainer = (props) => {
   
    console.log (props)

    return (
        <div className="itemListContainer">
            { props.grettings }
        </div>   
    )
}

