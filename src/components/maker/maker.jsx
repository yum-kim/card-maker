import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import ImageUploder from '../../service/image_uploader';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'yumi',
      company: 'tnh',
      theme: 'dark',
      title: 'developer',
      email: 'dwkimym93@gmail.com',
      message: 'hello',
      fileName: 'yumifile',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'yumi2',
      company: 'tnh',
      theme: 'colorful',
      title: 'developer',
      email: 'dwkimym93@gmail.com',
      message: 'hello',
      fileName: 'yumifile',
      fileURL: null,
    },
    3: {
      id: '3',
      name: 'yumi3',
      company: 'tnh',
      theme: 'light',
      title: 'developer',
      email: 'dwkimym93@gmail.com',
      message: 'hello',
      fileName: 'yumifile',
      fileURL: 'yumi.png',
    },
  });

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  const createOrUpdateCard = (card) => {
    // const updated = { ...cards };
    // updated[card.id] = card;
    // setCards(updated);

    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} className={styles.header} />
      <div className={styles.markerContent}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        ></Editor>
        <Preview cards={cards}></Preview>
      </div>
      <Footer className={styles.footer} />
    </section>
  );
};

export default Maker;
