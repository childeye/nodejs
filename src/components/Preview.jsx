import React from 'react';
import styles from "./preview.module.css"
import Card from "./Card";

// data 가 빈번히 변경되는 부분은 불필요하게 memo 를 사용하지 않아도 된다.
const Preview = ({cards}) => (
    <section className={styles.preview}>
        <h1 className={styles.title}>Card Preview</h1>
        <ul className={styles.cards}>
        {
            Object.keys(cards).map(key => (
                <Card key={key} card={cards[key]} />
            ))

            //cards.map(card => (
            //    <Card key={card.id} card={card} />
            //))
        }
        </ul>
    </section>
);

export default Preview;