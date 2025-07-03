import { useState } from "react";
import IconSwitch from "../IconSwitch/IconSwitch";
import './Store.css'
import CardView from "../CardsView/CardView";
import ListView from "../ListView/ListView";

function Store() {

  const [stateIcon, setStateIcon] = useState('view_list');

  const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

  const onSwitch = (stateIcon) => {
    stateIcon === 'view_list' 
    ? setStateIcon('view_module') 
    : setStateIcon('view_list')
  }

  return (
    <>     
      <div className="container"> 
        <IconSwitch 
        stateIcon={stateIcon}
        onSwitch={onSwitch}/>
        {stateIcon === 'view_list'
        ? <CardView 
        cards={products}
        />
        : <ListView 
        items={products}/> 
        }
      </div>
    </>
  )
}

export default Store;