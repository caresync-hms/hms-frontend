import React from 'react'
import { useState } from 'react';
import{ Icons } from '../../../assets/icons';
import Table from '../../../components/Table/Table';
import SearchBar from '../../../components/SearchBar/SearchBar';
function OperationHistory() {
    const [search, setSearch] = useState("");
    const columns=[
        {key:"operationName", label:"Operation Name"},
        {key:"operationDate", label:"Operation Date"},  
        {key:"surgeon", label:"Surgeon"},
    ];
    const operations=[
        {
            operationName:"Appendectomy",   
            operationDate:"2022-06-15",
            surgeon:"Dr. John Smith",
           
        },
        {
            operationName:"Cholecystectomy",   
            operationDate:"2022-07-20",
            surgeon:"Dr. Emily Davis",
            
        },
        {
            operationName:"Hernia Repair",   
            operationDate:"2022-08-05",
            surgeon:"Dr. Michael Johnson",  
        }
    ];
    const filteredData=operations.filter(
        (o)=>
        o.operationName.toLowerCase().includes(search.toLowerCase())||
        o.surgeon.toLowerCase().includes(search.toLowerCase())||
        o.operationDate.toLowerCase().includes(search.toLowerCase())
    )
  return (
        <div className='mt-3'>
            <SearchBar
            value={search}
            placeholder={"Search operation history"}
            onChange={setSearch}
             />
            <Table
            columns={columns}
            data={filteredData}
            />
        </div>
  )
}

export default OperationHistory
