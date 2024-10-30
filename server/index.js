const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;

let Cards = [
  {
    id: 1,
    text: "card 1",
    color: "#64f01d"
  },
  {
    id: 2, 
    text: "card 2",
    color: "#f0601d"
  },
  {
    id: 3, 
    text: "card 3",
    color: "#1df0b3"
  },
  {
    id: 4,
    text: "card 4",
    color: "#f01dd0"
  },
  {
    id: 5,
    text: "card 5",
    color: "#f0ed1d"
  },
  {
    id: 6,
    text: "card 6",
    color: "#aa1df0"
  }
];

let countCards = Cards.length; 

app.get('/cards', (req, res) => {
    console.log(Cards)
    res.json(Cards);
})

app.get('/cards/:id', (req, res) => {
  const id = req.params.id;
  const card = Cards.find(t => t.id == id);
  if (card)
    res.json(card);

  res.status(404).send('Card not found');
});

app.post('/cards', (req, res) => {
  const newCard = {
    id: ++countCards,
    ...req.body 
};
Cards.push(newCard);
  res.status(201).json(newCard);
});

app.delete('/cards/:id', (req, res) => {
  const id = req.params.id;
  const index = Cards.findIndex(card => card.id == id);
  const delCard = Cards[index];
  if (index !== -1) {
    Cards.splice(index, 1);
    res.status(200).json(delCard); 
  }
  else
      res.status(404).send({ error: 'Card not found' });
})

app.patch('/cards/:id', (req, res) => {
  const id = req.params.id;
  const index = Cards.findIndex(card => card.id == id);
  if (index !== -1) {
      Cards[index] = {
          ...Cards[index],
          ...req.body
      }
      res.status(200).json(Cards[index]); 
  }
  else
      res.status(404).send({ error: 'Card not found' });
})
  
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost: ${PORT}`);
});