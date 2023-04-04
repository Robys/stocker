import React from "react"; 
import RemoveProduct from "./RemoveProduct";
import UpdateProduct from './UpdateProduct'

const DropDownOptions = ({data,id}) =>{

    return (
      <div className="dropdown">
        <button>opções</button>
        <div className="dropdown-options">
          <RemoveProduct data={data} id={id}/>
          <UpdateProduct data={data} id={id}/>
        </div>
      </div>
    );
}

export default DropDownOptions