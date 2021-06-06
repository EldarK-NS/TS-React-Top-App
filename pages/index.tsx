import React from 'react';
import { Htag, P, Button, Tag } from '../components';


export default function Home(): JSX.Element {


   return (
      <div>
         <Htag tag='h1'>Text</Htag>
         <Button appearance='primary' arrow='right'>Button</Button>
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
      </div>
   );
}
