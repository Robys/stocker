import React from "react";
import trash from '../icons/trash.png'

const RemoveProduct = ({data,id}) =>{

    const HandleRemove = async () =>{
        data.forEach(element => {
            if(element.id === id){
                data.pop(element)
            }
        });

        await electron.save(JSON.stringify(data))
        window.location.reload();

    }

    return(
        <button onClick={HandleRemove}>
            <img className="icon" src={trash}/>
        </button>
        
    )
}

export default RemoveProduct