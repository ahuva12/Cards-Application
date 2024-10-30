import { http } from "./https";

// get all the cards
export const getCards = async () => {
    try {
        const response = await http.get('/cards');
        console.log(response.data);  
        return response.data; 
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
    }
};

//get specific card
export const getOneCard = async (id) => {
    try {
        console.log('getOneTab');
        const response = await http.get(`/cards/${id}`);
        console.log(response.data);  
        return response.data; 
    } catch (error) {
        console.error('Error fetching card:', error);
        throw error; 
    }
};

// Post card
export const postCard = async (newCard) => {
    try {
        console.log('postCard');
        const response = await http.post('/cards/', newCard);
        console.log('Card posted:', response.data);  
        return response.data; 
    } catch (error) {
        console.error('Error posting card:', error); 
        throw error; 
    }
};

// update card
export const updateCard = async (newCard) => {
    try {
        console.log('updateCard');
        const response = await http.patch(`/cards/${newCard.id}`, newCard);
        console.log(response.data);  
        return response.data; 
    } catch (error) {
        console.error('Error updating card:', error);
        throw error; 
    }
};


// delete card
export const deleteCard = async (id) => {
    try {
        console.log('deleteCard');
        const response = await http.delete(`/cards/${id}`); 
        console.log(response.data);  
        return response.data; 
    } catch (error) {
        console.error('Error deleting card:', error); 
        throw error; 
    }
};

