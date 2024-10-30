import style from '../css/Card.module.css';
import { useState } from 'react';
import ColorSelector from './ColorSelector';
import {updateCard as updateCardAxios, postCard, deleteCard} from '../logic/axios';

const Card = ({ cardId, text, color, isEdit, isFormAddCard, onAddCard, onDeleteCard}) => {

    const [isEditing, setIsEditing] = useState(isEdit);
    const [editedText, setEditedText] = useState(text); 
    const [selectedColor, setSelectedColor] = useState(color); 

    const updateCard = async () => {
        console.log('updateCard', selectedColor, editedText);
            try {
                const res = await updateCardAxios({
                    id: cardId,
                    text: editedText,
                    color: selectedColor
                });
                console.log(res);
            } catch (error){
                alert('Error updating card:', error);
            }
    }

    const addCard = async () => {
        console.log('addCard', selectedColor, editedText);
            try {
                const res = await postCard({
                    text: editedText,
                    color: selectedColor
                });
                console.log(res);
                onAddCard(res); 
            } catch (error){
                alert('Error adding card:', error);
            }
    }

    const handleDeleteCard = async () => {
        console.log('handleDeleteCard');
        try {
            const res = await deleteCard(cardId);
            console.log(res);
            onDeleteCard(cardId); 
        } catch (error){
            alert('Error deleting card:', error);
        }
    }


    const BarCard = () => {
        return (
            <div>
                {isEditing ? (
                    <ColorSelector 
                        setSelectedColor={setSelectedColor} 
                        setIsEditing={setIsEditing}
                        isEditing={isEditing}
                        updateOrAddCard={isFormAddCard ? addCard : updateCard} 
                    />
                ) : (
                    <div className={style.BarCard}>
                        <button className={style.choiseColorButton} onClick={() => setIsEditing(true)}></button>
                        <img className={style.garbageIcon} src="/img/garbage_icon.png" alt="garbage_icon" onClick={() => handleDeleteCard()}/>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={style.Card} style={{ backgroundColor: selectedColor }}>
            {isEditing ? (
                <input
                    type="text"
                    value={editedText} 
                    onChange={(e) => setEditedText(e.target.value)} 
                    placeholder={isFormAddCard ? "enter text" : editedText} 
                    />
            ) : (
                <p>{editedText}</p>
            )}
            <BarCard />
        </div>
    );
};

export default Card;
