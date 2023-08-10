import Cards from 'assets/cardapio/json/itens.json'
import Item from './item'
import styles from './Itens.module.scss'

export default function Itens(){
    return(
        <div className={styles.itens}>
            {Cards.map(card => (
                <Item 
                key={card.id}
                {...card}/>
            ))}
        </div>
    )
}