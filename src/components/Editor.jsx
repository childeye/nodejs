import React from 'react';
import styles from "./editor.module.css"
import CardEditForm from "./CardEditForm";
import CardAddForm from "./CardAddForm";

const Editor = ({cards, addCard, updateCard, deleteCard, FileInput}) => (
    <section className={styles.editor}>
        <h1 className={styles.title}>Card Maker</h1>
        {
            Object.keys(cards).map(key => (
                <CardEditForm key={key} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} FileInput={FileInput} />
            ))

            //cards.map(card => (
            //    <CardEditForm key={card.id} card={card} updateCard={updateCard} deleteCard={deleteCard} />
            //))
        }
        <CardAddForm onAdd={addCard} FileInput={FileInput}/>
    </section>
);

export default Editor;