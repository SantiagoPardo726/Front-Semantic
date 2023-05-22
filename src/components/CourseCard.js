import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import axios from 'axios';

export function CourseCard() {
  // const [imageUrl, setImageUrl] = useState('');

  // useEffect(() => {
  //   const obtenerImagen = async () => {
  //     try {
  //       const url = await getImageByKeyword('perro');
  //       setImageUrl(url);
  //     } catch (error) {
  //       // Manejo de errores
  //     }
  //   };

  //   obtenerImagen();
  // }, []);
  const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU";

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title="Imagen del curso"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

async function getImageByKeyword(keyword) {
  
  const accessKey = '5vJW71kwQOqg7x-dp82TT0dovJtKF6MmsaMulBbr7BU';
  try {
    const response = await axios.get(`https://api.unsplash.com/photos/random?query=${keyword}&client_id=${accessKey}`);
    const imageUrl = response.data.urls.regular;
    return imageUrl;
  } catch (error) {
    console.error('Error al obtener la imagen:', error.message);
    throw error;
  }
}

