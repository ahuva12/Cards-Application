import Card from "./Card";
import style from '../css/TableCards.module.css';
import React, { useEffect, useState } from 'react';
import { getCards } from "../logic/axios";

const TableCards = () => {
    const [cards, setCards] = useState([]); 
    const [isFormAddCard, setIsFormAddCard] = useState(false); 

    useEffect(() => {
        const fetchCards = async () => {
            const cards = await getCards();
            console.log(cards) 
            setCards(cards); 
        };

        fetchCards(); 
    }, []);

    const handleAddCard = () => {
        console.log('handleAddCard')
        setIsFormAddCard(true);
    }

    const handleAddNewCard = (newCard) => {
        setCards((prevCards) => [...prevCards, newCard]); 
        setIsFormAddCard(false); 
    };

    const handleDeleteCard = (cardId) => {
        setCards((prevCards) => prevCards.filter(card => card.id !== cardId));
    };


    return (
        <div className={style.TableCards}>
            {cards.map(card => (
                <Card
                    key={card.id}
                    cardId={card.id}
                    text={card.text}
                    color={card.color}
                    isEdit={false}
                    isFormAddCard={false}
                    onDeleteCard={handleDeleteCard} 
                />
            ))}
            <div className={style.addCard}><span className={style.buttonAddCard} onClick={() => handleAddCard()}>+</span></div>
            {isFormAddCard && <Card
                    key={0}
                    text=""
                    color={"#a3a0a0"}
                    isEdit={true}
                    isFormAddCard={true}
                    onAddCard={handleAddNewCard} 
                />}
        </div>
    );
};

export default TableCards;


