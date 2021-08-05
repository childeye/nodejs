import { firebaseDatabase } from "./firebase";

class CardRepository {
    syncCard(userId, onUpdate) {
        const ref = firebaseDatabase.ref(`${userId}/cards`);
        ref.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        })

        return () => ref.off();
    }

    saveCard(userId, card) {
        console.log('save repository', userId, card)
        firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card).catch(e => {
            console.log("save error");
            console.log(e);
        });
    }

    removeCard(userId, card) {
        console.log('delete repository', userId, card)
        firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
    }
}

export default CardRepository;