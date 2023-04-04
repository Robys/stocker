import React, { useState } from "react";
import {v1} from 'uuid'
import DateFormat from '../utils/DateFormat'

import diskette from '../icons/diskette.png'

const AddProduct = ({ data }) => {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [size, setSize] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  

  const handleSaveInfo = async () => {
    const product = {
        id:v1(),
        name:name,
        category:category,
        size:size,
        price:`R$ ${price}`,
        stock:stock,
        added: DateFormat()
    }

    data.push(product)
    await electron.save(JSON.stringify(data))
    window.location.reload();
    
  };



  return (
    <div>
      <ul className="list">
        <li>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="nome do produto"
          />
        </li>

        <li>
          <select
            name="category"
            id="category"
            placeholder="categoria"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>categoria</option>
            <option>calcinha</option>
            <option>sutiã</option>
            <option>conjunto</option>
            <option>infantil</option>
            <option>roupa</option>
          </select>
        </li>

        <li>
          <input
            onChange={(e) => setSize(e.target.value)}
            type="text"
            placeholder="tamanho"
          />
        </li>

        <li>
        <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="preço"
          />

        </li>

        <li>
            <input type="number" min={0} 
            placeholder="estoque" onChange={e => setStock(e.target.value)}/>
        </li>
        <li>
        <img className="icon" src={diskette} onClick={handleSaveInfo}/>
        </li>
      </ul>
    </div>
  );
};

export default AddProduct;
