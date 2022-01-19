import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';
import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    const card = [
      {
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
      {
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
      {
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
    ];
    setCards(card);
  }, []);

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
        <CardMaker cards={cards}></CardMaker>
        <CardPreview cards={cards}></CardPreview>
      </div>
      <Footer className={styles.footer} />
    </section>
  );
};

export default Maker;
