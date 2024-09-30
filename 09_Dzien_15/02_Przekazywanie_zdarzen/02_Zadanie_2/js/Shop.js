import React, {useState} from 'react';
import ShopItem from "./ShopItem";

const Shop = () => {

    const [boughtItems, setBoughtItems] = useState([]);

    const handleBuyItem = (item) => {
        setBoughtItems(prevItems => [...prevItems, item]);
    };

  return (
      <div>
          <ShopItem title={'xxxxx'} onBuy={handleBuyItem}/>
          <ShopItem title={'yyyyy'} onBuy={handleBuyItem}/>
          <ShopItem title={'zzzzz'} onBuy={handleBuyItem}/>
          <ul>
              {boughtItems.map((item, index) => (
                  <li key={index}>{item}</li>
              ))}
          </ul>
      </div>



  );
}

export default Shop;