import React from 'react';
import Alert from '@mui/material/Alert';

const Todo = (props) => {
  return (
    <div>
        <Alert severity="info">{props.data}</Alert>
    </div>
  )
}

export default Todo
