import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import nike1 from "../assets/buzo.png"

export default function ItemListContainer() {
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
            Buzo blanco full fachero descripción.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography
         size="small" color="primary"
        >
        {"$" + 500}
        </Typography>
        <Button size="small" color="primary">
          Añadir carrito
        </Button>
      </CardActions>
    </Card>
  );
}