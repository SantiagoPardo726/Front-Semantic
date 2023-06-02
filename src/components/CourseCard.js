import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import axios from 'axios';

export function CourseCard(props) {
  const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU";

  return (
    <Card sx={{ maxWidth: 345, height:450}}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.course["urlImage"]}
        title="Imagen del curso"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.course["name"]}
        </Typography>
        <Typography variant="h5" color="text.secondary">
        {props.course["language"]=="pt"?"Potugueis":props.course["language"]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.course["description"].substring(0, 200)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={'/course/'+props.course["name"]} size="small">Detalle</Button>
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

