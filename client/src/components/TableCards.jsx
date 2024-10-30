import Card from "./Card";
import style from '../css/TableCards.module.css';
import React, { useEffect, useState } from 'react';
import { getCards } from "../logic/axios";

const TableCards = () => {
    const [cards, setCards] = useState([]); 

    useEffect(() => {
        const fetchCards = async () => {
            const cards = await getCards(); 
            setCards(cards); 
        };

        fetchCards(); 
    }, []);

    return (
        <div className={style.TableCards}>
            {cards.map(card => (
                <Card
                    key={card.id}
                    text={card.text}
                    color={card.color}
                />
            ))}
            <div className={style.addCard}><span className={style.buttonAddCard}>+</span></div>
        </div>
    );
};

export default TableCards;


