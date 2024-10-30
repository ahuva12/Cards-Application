import style from '../css/Card.module.css';
import { useState } from 'react';

const Card = ({text, color}) => {

    const BarCard = () => {
        const [isEdit, setIsEdit] = useState(false);

        return (
            <div>
                {isEdit ? (
                    <div className={style.BarCard}>
                        <button className={style.choiseColorButton}></button>
                        <button className={style.choiseColorButton}></button>
                        <button className={style.choiseColorButton}></button>
                        <button className={style.choiseColorButton}></button>
                        <button className={style.choiseColorButton}></button>
                    </div>
                ) : 
                    <div className={style.BarCard}>
                        <button className={style.choiseColorButton} onClick={() => setIsEdit(true)}></button>
                        <img className={style.garbageIcon} src="/img/garbage_icon.png" alt="garbage_icon" />
                    </div>
                }
            </div>
        )
    }

    return (
        <div className={style.Card} style={{ backgroundColor: color }}>
            <p>{text}</p>
            <BarCard />
        </div>
    )
}

export default Card;