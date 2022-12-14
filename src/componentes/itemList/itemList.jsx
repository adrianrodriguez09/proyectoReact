import Item from "../item/item"
import estilos from './itemList.module.css'


const ItemList = ({items})=>{

    return<div className={estilos.container}>
    {
        items.map((items)=>{
            return(
               
                <Item items={items} key={items.id}/>
                
            )
        })
    }
</div>
    
};
export default ItemList