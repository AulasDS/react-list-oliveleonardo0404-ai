    import { useState } from 'react';
    import styles from './styles.module.scss';

    export default function Lista() {
    const [items, setItems] = useState([
        { id: 1, nome: 'Resident Evil' },
        { id: 2, nome: 'Uncharted' },
        { id: 3, nome: 'Mario' }
    ]);

    const [novoItem, setNovoItem] = useState('');

    const criarId = () => Date.now();

    const adicionarItem = () => {
        if (novoItem.trim() === '') return;

        const novo = {
        id: criarId(),
        nome: novoItem
        };

        setItems([...items, novo]);
        setNovoItem('');
    };


    const excluirItem = (id) => {
        const listaAtualizada = items.filter(item => item.id !== id);
        setItems(listaAtualizada);
    };

    return (
        <div className={styles.model + ' ' + styles.flex + ' ' + styles.centro}>
        <h2 className='h2'>Lista de Jogos</h2>

        <div>

        {items.map(item => (
            <div key={item.id} className={styles.list}>
            {item.nome}
            <button className={styles.button} onClick={() => excluirItem(item.id)}>
                excluir
            </button>
            </div>
        ))}

        </div>
        
        <input
            type="text"
            placeholder="jogo"
            value={novoItem}
            onChange={(e) => setNovoItem(e.target.value)}
            className={styles.input}
        />

        <button className={styles.button} onClick={adicionarItem}>
            Inserir
        </button>
        </div>
    );
    }