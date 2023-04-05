import React from "react";
import { CSVLink } from "react-csv";

const ExportTable = ({data}) =>{
    return (
        <CSVLink data={data}>exportar</CSVLink>
    )
}

export default ExportTable