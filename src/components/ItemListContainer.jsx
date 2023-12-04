// const ItemListContainer = (props) => {
//Desestruturandi pasa la propiedad greeting de App.jsx a  ItemListContainer
const ItemListContainer = ({greeting}) => {
    return(
        <div className="mensaje"> {greeting} </div>
    );

}

export default ItemListContainer;