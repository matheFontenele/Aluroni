import React from 'react'
import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';

interface Opcao {
    id: number;
    label: string;
}

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({filtro, setFiltro}: Props){

    function selectFiltro(op : Opcao){
        if(filtro === op.id) return setFiltro(null);
        return setFiltro(op.id);
    }

    return(
        <div className={styles.filtros}>
            {filtros.map((op) => (
                <button 
                    className={classNames({
                        [styles.filtros__filtro]: true,
                        [styles.filtros__filtro__ativo]: filtro === op.id
                    })}
                    key={op.id} 
                    onClick={() => selectFiltro(op)}>
                        {op.label}
                </button>
            )) }
        </div>
    )
}