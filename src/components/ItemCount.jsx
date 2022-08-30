import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import nike1 from "../assets/buzo.png"
import React, { useState } from 'react';

export const ItemCount = ({ inicial, max, onAdd}) => {
    
  const [count, setCount] = useState(inicial)
  
  const sumar = () => {
      count < max ? setCount(count + 1) : alert('No se pueden agregar mas productos')
  }

  const restar = () => {
      count > inicial ? setCount(count - 1) : alert('No podes quitar mas productos')
  }

  const reset = () => {
      setCount(inicial)
  }

  return (
    <Card sx={{ maxWidth: 300 }}>

      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={nike1}
          alt="Nike1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hoodie whites
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Buzo blanco descripción.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography
         size="small" color="primary"
        >
        {"$" + 500}
          <div>
            <h2>{count}</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={() => {onAdd(count)}}>Agregar al carrito</button>
            <button onClick={reset}>Borrar Carrito</button>
          </div>
        </Typography>
      </CardActions>
    </Card>
  );
}