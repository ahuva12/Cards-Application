import style from '../css/Card.module.css';
import { useState } from 'react';
import ColorSelector from './ColorSelector';
import {updateCard as updateCardAxios, postCard} from '../logic/axios';

const Card = ({ cardId, text, color, isEdit, isFormAddCard, onAddCard, handleDeleteCard}) => {

    const [isEditing, setIsEditing] = useState(isEdit);
    const [editedText, setEditedText] = useState(text); 
    const [selectedColor, setSelectedColor] = useState(color); 

    const updateCard = async () => {
            try {
                const res = await updateCardAxios({
                    id: cardId,
                    text: editedText,
                    color: selectedColor
                });
                console.log(res);
                setIsEditing(!isEditing);
            } catch (error){
                alert('Error updating card:', error);
            }
    }

    const addCard = async () => {
            try {
                const res = await postCard({
                    text: editedText,
                    color: selectedColor
                });
                setIsEditing(!isEditing);
                onAddCard(res); 
            } catch (error){
                alert('Error adding card:', error);
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
                        <img className={style.garbageIcon} src="/img/garbage_icon.png" alt="garbage_icon" onClick={() => handleDeleteCard(cardId)}/>
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
