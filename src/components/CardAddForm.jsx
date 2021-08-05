import React, {memo, useRef, useState} from 'react';
import styles from "./cardAddForm.module.css"
import Button from "./Button";

// onAdd, FileInput 가 바뀌지 않으면 업데이트 될 필요가 없다.
const CardAddForm = memo(
    ({onAdd, FileInput}) => {
        const formRef = useRef();
        const nameRef = useRef();
        const companyRef = useRef();
        const themeRef = useRef();
        const titleRef = useRef();
        const emailRef = useRef();
        const messageRef = useRef();
        const [file, setFile] = useState({fileName: null, fileURL: null});

        const onSubmit = (event) => {
            event.preventDefault();
            const card = {
                id: Date.now(),
                name: nameRef.current.value || '',
                company: companyRef.current.value || '',
                theme: themeRef.current.value || '',
                title: titleRef.current.value || '',
                email: emailRef.current.value || '',
                message: messageRef.current.value || '',
                fileName: file.fileName || '',
                fileURL: file.fileURL || ''
            }

            formRef.current.reset();
            setFile({fileName: null, fileURL: null});
            onAdd(card);
        };

        const empty = () => {
        }

        const onFileChange = (file) => {
            setFile({
                fileName: file.name,
                fileURL: file.url
            })
        }

        return (
            <form ref={formRef} className={styles.form}>
                <input
                    ref={nameRef}
                    className={styles.input} type="text" name="name" placeholder="name" defaultValue=''/>
                <input
                    ref={companyRef}
                    className={styles.input} type="text" name="company" placeholder="company" defaultValue=''/>
                <select
                    ref={themeRef}
                    className={styles.select} name="theme" value="light" onChange={empty}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="colorful">Colorful</option>
                </select>
                <input
                    ref={titleRef}
                    className={styles.input} type="text" name="title" placeholder="title" defaultValue=''/>
                <input
                    ref={emailRef}
                    className={styles.input} type="text" name="email" placeholder="email" defaultValue=''/>
                <textarea
                    ref={messageRef}
                    className={styles.textarea} name="message" placeholder="message" defaultValue=''></textarea>
                <div className={styles.fileInput}>
                    <FileInput name={file.fileName} onFileChange={onFileChange}/>
                </div>
                <Button name="Add" onClick={onSubmit} />
            </form>
        );
    }
);

export default CardAddForm;