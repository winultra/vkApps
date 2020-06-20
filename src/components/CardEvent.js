import React from 'react';
import { Group, Button, Avatar, Card, CardGrid, RichCell } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

function CardEvent() {
  return ( 
    <CardGrid >
      <Card size = "l" mode = "outline" >
      <RichCell disabled multiline before = {
        <Avatar size = {72}/>}
          text = "Задание от Магнита"
          caption = "Пройти 10000 шагов"
          after = "50 баллов"
          actions = {
            <React.Fragment ><Button > Давай! </Button> <Button mode = "secondary" > Отклонить </Button> </React.Fragment>
          } 
          >
          Магнит
      </RichCell> 
      </Card> 
    </CardGrid>
    );
  }

  export default CardEvent;