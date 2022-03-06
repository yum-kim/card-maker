import firebaseApp from './firebase';

class CardRepository {
  saveCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }

  syncCards(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/cards`);

    ref.on('value', (snapshot) => {
      const val = snapshot.val();
      val && onUpdate(val);
    });

    return () => ref.off();
  }
}

export default CardRepository;
