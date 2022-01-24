import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../card_edit_form/card_edit_form';

const Editor = ({ cards }) => {
  return (
    <section className={styles.maker}>
      <h1 className={styles.title}>Card Maker</h1>
      <div>
        {cards.map((card) => (
          <CardEditForm key={card.id} card={card}></CardEditForm>
        ))}
      </div>
    </section>
  );
};

export default Editor;
