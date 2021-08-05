import React, {useCallback, useEffect, useState} from 'react';
import styles from "./maker.module.css"
import Header from "./Header";
import Footer from "./Footer";
import {useHistory} from "react-router-dom";
import Editor from "./Editor";
import Preview from "./Preview";

const Maker = ({authService, FileInput, cardRepository}) => {
    const history = useHistory();
    const historyState = history?.location?.state;

    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id);
    //const [cards, setCards] = useState();

    const onLogout = useCallback(() => {
        authService.logout();
    }, [authService]);

    // userId 값이 변경됐을 시 처리.
    useEffect(() =>{
        if(!userId) {
            return;
        };

        const stopSync = cardRepository.syncCard(userId, cards => {
            setCards(cards);
        });

        return () => {
            stopSync();
        }
    }, [userId, cardRepository]);

    // login
    useEffect(() => {
        authService.onAuthChange(user => {
            if (user) {
                setUserId(user.uid);
                console.log(userId);
            } else {
                history.push('/');
            }
        });
    }, [userId, authService, history])

    /*
    const addCard = (card) => {
        console.log('Add Card');
        const updated = [...cards, card];
        setCards(updated);
    }

    const updateCard = (card) => {
        console.log('update Card', card);
        const updated = cards.map(item => {
            if(card.id === item.id) {
                return card;
            }

            return item;
        })

        setCards(updated);
    }
     */

    const createOrUpdateCard = (card) => {
        console.log('createOrUpdateCard Card', card);
        setCards(prevCards => {
            const updated = {...prevCards};
            updated[card.id] = card;

            return updated;
        })

        console.log('cardRepository.saveCard')
        cardRepository.saveCard(userId, card);
    }

    const deleteCard = (card) => {
        const updated = {...cards};
        delete updated[card.id];
        setCards(updated);

        cardRepository.removeCard(userId, card);
    }

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} FileInput={FileInput}/>
                <Preview cards={cards}/>
            </div>
            <Footer />
        </section>
    );
}

export default Maker;