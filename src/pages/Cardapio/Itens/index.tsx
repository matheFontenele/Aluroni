import Cards from 'data/card.json';
import Item from './item';
import styles from './Itens.module.scss';
import { useEffect, useState } from 'react';

interface Props {
    busca: string;
    filtro: number | null;
    ordenador: string;
}

export default function Itens(props: Props){
  const [lista, setLista] = useState(Cards);
  const { busca, filtro, ordenador } = props;

  function testBusca(title: string){
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testFiltro(id: number) {
    if(filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(newList: typeof Cards){
    switch(ordenador){
    case 'porcao':
      return newList.sort((a, b) => a.size < b.size ? 1 : -1);
    case 'qtd_pessoas':
      return newList.sort((a, b) => a.serving < b.serving ? 1 : -1);
    case 'preco':
      return newList.sort((a, b) => a.price < b.price ? 1 : -1);
    default:
      return newList;
    }
  }

  useEffect(() => {
    const newList = Cards.filter(item => testBusca(item.title) && testFiltro(item.category.id));
    setLista(ordenar(newList));
  },[busca, filtro, ordenador]);

  return(
    <div className={styles.itens}>
      {lista.map(card => (
        <Item 
          key={card.id}
          {...card}/>
      ))}
    </div>
  );
}