import style from '../css/Card.module.css';

const ColorSelector = ({ setSelectedColor,setIsEditing, isEditing, updateOrAddCard}) => {

    const handeCloseColorSelector = () => {
        console.log(updateOrAddCard);
        updateOrAddCard();
        setIsEditing(!isEditing);
    }

    return (
        <div className={style.BarCard}>
            <button className={style.choiseColorButton} onClick={() => handeCloseColorSelector()}></button>
            <button className={style.choiseColorButton} style={{ backgroundColor: '#f0601d' }} onClick={() => setSelectedColor('#f0601d')}></button>
            <button className={style.choiseColorButton} style={{ backgroundColor: '#1df0b3' }} onClick={() => setSelectedColor('#1df0b3')}></button>
            <button className={style.choiseColorButton} style={{ backgroundColor: '#f01dd0' }} onClick={() => setSelectedColor('#f01dd0')}></button>
            <button className={style.choiseColorButton} style={{ backgroundColor: '#f0ed1d' }} onClick={() => setSelectedColor('#f0ed1d')}></button>
        </div>
    )
}

export default ColorSelector;