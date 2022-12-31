import React, { useState, useEffect } from 'react';
import './index.css'
import Page from './components/Page';

function App() {
  // ovdje mi trebaju komponente koje će tvoriti main page/landing page
  // s obzirom da radimo u reactu onda neće efektivno biti hiperlinkove
  // nego će on na klik na "drugu" stranicu ustvari rerenderirati trenutnu
  // to je zasada okej, a okej je i za server - jedino "nije" okej u slučaju
  // kada bi sajt bio ozbiljniji kontender za guglovu tražilicu, u tom slučaju
  // bi trebalo razmišljati od frameworku frameworka (next.js npr.), tj. o 
  // vrsti server-side renderinga koji je SEO friendly.
  // zasad je to nepotrebno.

  const [clicked, setClicked] = useState(0);
  const changeClickStatus = (pageId) => {
    setClicked(pageId);
    // document.querySelector('.mainContainer').classList.add('mainContainerTransition');
    console.log(clicked)
  }
  

  const webpagesContent = [ {
    pageId: 0,
    pageName: 'Landing page',
    header: 'Here be the mighty and prohesied landing page of many more to come',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing at in tellus integer. Enim ut sem viverra aliquet eget sit amet tellus. Quisque id diam vel quam. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Pretium nibh ipsum consequat nisl vel pretium lectus. Molestie ac feugiat sed lectus vestibulum mattis. Urna porttitor rhoncus dolor purus non enim praesent. Pulvinar elementum integer enim neque. Felis bibendum ut tristique et. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Eleifend quam adipiscing vitae proin sagittis. Ac placerat vestibulum lectus mauris ultrices eros in. Donec massa sapien faucibus et. Elementum integer enim neque volutpat ac tincidunt. Arcu vitae elementum curabitur vitae nunc. Mi ipsum faucibus vitae aliquet nec. Felis donec et odio pellentesque diam volutpat commodo. Cursus turpis massa tincidunt dui ut ornare. Fermentum posuere urna nec tincidunt praesent semper. Vitae justo eget magna fermentum iaculis eu non diam.'
  },
  {
    pageId: 1,
    pageName: 'First page',
    header: 'Welcome stranger to the wonder lands of first page',
    paragraph: 'Adipiscing elit duis tristique sollicitudin nibh. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Sed tempus urna et pharetra pharetra. Amet purus gravida quis blandit turpis cursus in hac habitasse. Fames ac turpis egestas sed tempus urna. Mattis enim ut tellus elementum. Arcu vitae elementum curabitur vitae nunc. Mi ipsum faucibus vitae aliquet nec. Felis donec et odio pellentesque diam volutpat commodo. Cursus turpis massa tincidunt dui ut ornare. Fermentum posuere urna nec tincidunt praesent semper. Vitae justo eget magna fermentum iaculis eu non diam. Adipiscing elit duis tristique sollicitudin nibh. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Sed tempus urna et pharetra pharetra. Amet purus gravida quis blandit turpis cursus in hac habitasse. Fames ac turpis egestas sed tempus urna. Mattis enim ut tellus elementum.'
  },
  {
    pageId: 2,
    pageName: 'Second page',
    header: 'Here be something utterly woderfull and befiting page two content',
    paragraph: 'Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Eleifend quam adipiscing vitae proin sagittis. Ac placerat vestibulum lectus mauris ultrices eros in. Donec massa sapien faucibus et. Elementum integer enim neque volutpat ac tincidunt. Arcu vitae elementum curabitur vitae nunc. Mi ipsum faucibus vitae aliquet nec. Felis donec et odio pellentesque diam volutpat commodo. Cursus turpis massa tincidunt dui ut ornare. Fermentum posuere urna nec tincidunt praesent semper. Vitae justo eget magna fermentum iaculis eu non diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing at in tellus integer. Enim ut sem viverra aliquet eget sit amet tellus. Quisque id diam vel quam. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Pretium nibh ipsum consequat nisl vel pretium lectus. Molestie ac feugiat sed lectus vestibulum mattis. Urna porttitor rhoncus dolor purus non enim praesent. Pulvinar elementum integer enim neque. Felis bibendum ut tristique et. Consectetur adipiscing elit duis tristique sollicitudin nibh sit.'
  },
  {
    pageId: 3,
    pageName: 'Third page',
    header: 'Here be something so mighty that even the proudest of proude gonna yelp!',
    paragraph: 'Felis bibendum ut tristique et. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Eleifend quam adipiscing vitae proin sagittis. Ac placerat vestibulum lectus mauris ultrices eros in. Donec massa sapien faucibus et. Elementum integer enim neque volutpat ac tincidunt. Arcu vitae elementum curabitur vitae nunc. Mi ipsum faucibus vitae aliquet nec. Felis donec et odio pellentesque diam volutpat commodo. Cursus turpis massa tincidunt dui ut ornare. Fermentum posuere urna nec tincidunt praesent semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing at in tellus integer. Enim ut sem viverra aliquet eget sit amet tellus. Quisque id diam vel quam. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Pretium nibh ipsum consequat nisl vel pretium lectus. Molestie ac feugiat sed lectus vestibulum mattis. Urna porttitor rhoncus dolor purus non enim praesent. Pulvinar elementum integer enim neque. Vitae justo eget magna fermentum iaculis eu non diam. Adipiscing elit duis tristique sollicitudin nibh. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Sed tempus urna et pharetra pharetra. Amet purus gravida quis blandit turpis cursus in hac habitasse. Fames ac turpis egestas sed tempus urna. Mattis enim ut tellus elementum.'
  }
  ]

  // useEffect(() => {
  //   const changeClickStatus = () => {
  //     if (clicked === false) {
  //       setClicked(true);
  //     } else {
  //       setClicked(false);
  //     };
  //   };

  //   document.addEventListener('click', changeClickStatus);

  //   return () => {
  //     document.removeEventListener('click', changeClickStatus);
  //   }
  // }, [clicked])


  // bratkane, ovo nije (do kraja) dobro - naime, kada gledaš strukturu
  // vidiš da ima zajedničkih elemenata koji se opetovano ponavljaju
  // a koje možeš vrlo elegentno dalje apstrahirati tako što ćeš željeni
  // content/data staviti u array/objekt (u slučaju da je server,
  // JSON vjerovatno) i onda u zavisnosti koji webpage user klikne jednostavno 
  // ćeš isporučiti u odgovarajuće mjesto u komponentu i tako na kraju dana
  // skratiti kod poprilično, a i ispasti macan :3
  
    return (
      <div className='mainContainer bg-gray-600'>
        <Page keyClick={clicked} changeClickStatus={changeClickStatus} webpageContent={webpagesContent[clicked]} />
      </div>
    )
}

export default App;
