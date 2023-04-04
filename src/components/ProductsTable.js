import React from "react"; 
import DropDownOptions from "./DropDownOptions";

export default function ProductsTable({data}){

    return(
        <table className="table">
            <thead>
                <tr>
                    <th style={{width:"300px"}}>nome</th>
                    <th>categoria</th>
                    <th>tamanho</th>
                    <th>preço</th>
                    <th>estoque</th>
                    <th>adicionado</th>
                    <th>-</th>
                </tr>
            </thead>

            <tbody>
                {data.map(item => {
                    if(item!== undefined)
                        return <tr key={item.id}>
                        <td style={{width:"300px", textAlign:"start", paddingLeft:"15px"}}>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.size}</td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                        <td>{item.added}</td>
                        <td>
                            <DropDownOptions data={data} id={item.id}/>
                        </td>
                    </tr>
                })}
            </tbody>

        </table>
    )
}

/**
 * <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.size}</td>
                    <td>{item.price}</td>
                    <td>{item.stock}</td>
                    <td>{item.added}</td>
                </tr>
 */