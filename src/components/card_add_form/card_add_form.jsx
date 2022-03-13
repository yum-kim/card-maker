import React, { useRef, useState, memo } from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';

const CardAddForm = memo(({ FileInput, onAdd }) => {
  const formRef = useRef();
  const companyRef = useRef();
  const nameRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const card = {
      id: Date.now(), //uuid
      company: companyRef.current.value || '',
      name: nameRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };

    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
      />
      <select ref={themeRef} className={styles.select} name="theme">
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="Message"
      />
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={onSubmit}></Button>
    </form>
  );
});

export default CardAddForm;
