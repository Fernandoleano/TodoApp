import { React, useState } from 'react';
import './Main.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Todo from '../Todo/Todo';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const Main = () => {
    const [items, setItems] = useState([]);
    const [itemList, setItemList] = useState('');

    // add item to list
    const addItem = (item1) => {
        const newItems = [...items, item1];
        setItems(newItems);
    }

    // delete item from list
    const deleteItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }

    // delete all items from list
    const deleteAllItems = () => {
        setItems([]);
    }

  return (
    <div className="main">
        <h1 className="mainHeader">What is on today's agenda?</h1>
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
      className="inputMain"
    >
      <TextField fullWidth label="Add your Todo" id="fullWidth" onChange={(e) => {setItemList(e.target.value)}} />
    </Box>
    <IconButton aria-label="delete" size="large" style={{'position': 'absolute', 'top': '34%', 'left': '52%'}} onClick={() => {deleteAllItems(items)}}>
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    <Button variant="contained" style={{'position': 'absolute', 'top': '35%', 'left': '48%'}} onClick={() => {addItem(itemList)}}>Add</Button>
    <div className="todoList">
        {items.map((item, index) => {
            return (
                <div>
                    <Todo data={item} />
                    <Button onClick={() => {deleteItem(item)}}>Delete</Button>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Main