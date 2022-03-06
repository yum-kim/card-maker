import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate, useLocation } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const historyState = useLocation().state;
  const navigate = useNavigate();

  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = () => {
    authService.logout();
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });

    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });

    cardRepository.removeCard(userId, card);
  };

  /** useEffect는 로직별로 여러개를 만들어쓸 수 있는 장점 */
  //1) userId 변경될 때 마다
  useEffect(() => {
    if (!userId) return;

    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });

    /*
     * useEffect에서 어떤 함수를 리턴하게 되면,
     * unmount 되었을 때 리액트가 자동으로 리턴한 함수를 호출해 줌
     * => 이 함수에서는 리소스를 정리하는 로직을 넣어줄 수 있음
     */
    return () => stopSync();
  }, [userId]);

  //2) 로그인될 때 마다
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
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
