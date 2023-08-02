import classNames from 'classnames';
import styles from './Ordenador.module.scss'
import opcoes from './opcoes.json'
import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

interface Props {
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ordenador, setOrdenador} : Props){
    const [open, setOpen] = useState(false);
    const nomeOrdenador = ordenador && opcoes.find(op => op.value === ordenador)?.nome
    return(
        <button 
            className={classNames({
               [styles.ordenador]: true,
               [styles.ordenador__ativo]: ordenador !=='', 
            })} 
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}>

            <span>{nomeOrdenador || "Ordenar Por"}</span>

            {open ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
            <div className={classNames({
                [styles.ordenador__options]:true,
                [styles.ordenador__options__ativo]: open
            })}>
                {opcoes.map((op) => (
                    <div className={styles.ordenador__option} key={op.value}
                    onClick={() => setOrdenador(op.value)}>
                        {op.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}