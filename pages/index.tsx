import React, { useState, useEffect } from 'react';
import { Htag, P, Button, Tag, Rating } from '../components';
import { Layout, withLayout } from './../Layout/Layout';


function Home(): JSX.Element {
   const [rating, setRating] = useState<number>(0)


   return (
      <>
         <Htag tag='h1'>Hello</Htag>
         <Button appearance='primary' arrow='right' >Button</Button>
         <Button appearance='ghost' arrow='down'>Button</Button>
         <P size='l'>Biggest</P>
         <P size='m'>Middle</P>
         <P size='s'>Small</P>
         <Tag size='s' color='ghost'>Ghost</Tag>
         <Tag size='m' color='red'>Ghost-S</Tag>
         <Tag size='m' color='red'>Red-M</Tag>
         <Tag size='m' color='green'>Green-M</Tag>
         <Tag size='m' color='grey'>Grey-M</Tag>
         <Tag size='m' color='primary' href='https://github.com/AlariCode/top-app-demo/blob/main/next.config.js'>Primary-M</Tag>
         <Rating rating={rating} isEditable setRating={setRating} />
      </>
   );
}

export default withLayout(Home)
