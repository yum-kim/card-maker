import { firebaseDatabase } from './firebase';

class CardRepository {
  saveCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
  }

  syncCards(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/cards`);

    ref.on('value', (snapshot) => {
      const val = snapshot.val();
      val && onUpdate(val);
    });

    return () => ref.off();
  }
}

export default CardRepository;
