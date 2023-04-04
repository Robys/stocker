import React,{useState,useEffect} from "react";
import AddProduct from "./components/AddProduct"
import ProductsTable from "./components/ProductsTable";
import { compareTwoStrings } from "string-similarity";

import glass from './icons/glass.png'
import reload from './icons/reload.png'

export default function App (){
    const [data,setData] = useState()
    const [query,setQuery] = useState()

    useEffect(() =>{
        const handleAPI = async () =>{
            var res = await electron.products()
            var parsed = JSON.parse(res)
            setData(parsed)
        }

        handleAPI()

    },[])

    const HandleSearch = () => {
      var obj = [];

      data.forEach((element) => {
        var el = compareTwoStrings(query,element.name);
        if(el > .12){
            obj.push(element)
            setData(obj)
        }
      });
    };


    return(
        <div>
            <header>
                <h1>
                    Bem vindo ao STOCKER
                </h1>
                <AddProduct data={data}/>

                <ul className="list">
                <li>
                <input type="search" placeholder="procurar" onChange={e => setQuery(e.target.value)}/>
                </li>
                <li>
                    <img className="icon" src={glass} onClick={HandleSearch}/>
                </li>

                <li>
                <img className="icon" src={reload} onClick={()=> window.location.reload()}/>
                </li>

            </ul>

            </header>


            <hr/>
            {data ? <ProductsTable data={data}/> :""}
            
        </div>
    )
}