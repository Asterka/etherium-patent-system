import React from 'react'

export default function PatentTable({data, type}) {
    let data_rows = [];
    if(type === "my"){
        data_rows = data.map((element)=>{
            return(
                <tr>
                            <td className="name-column">
                                    <h4>{element.name}</h4>
                                    <h4 className="uuid">{element.uuid}</h4>
                                </td>
                                <td className="date-column">
                                    <h4>{element.date}</h4>
                                </td>
                                <td className="membership">
                                    <h4>{element.membership}</h4>
                                </td>
                </tr>
                )
        })
    }
    else{
        data_rows = data.map((element)=>{
            return(
                <tr>
                            <td className="name-column">
                                    <h4>{element.name}</h4>
                                    <h4 className="uuid">{element.uuid}</h4>
                                </td>
                                
                                <td className="inventor">
                                    <h4>{element.inventor}</h4>
                                </td>

                                <td className="date-column">
                                    <h4>{element.date}</h4>
                                </td>
                </tr>
                )
        })
    }

    return (
        <div className="patent-table">
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        <td className="name-column">
                            <h4>name</h4>
                        </td>
                        <td className="date-column">
                            <h4>creation date</h4>
                        </td>
                        <td className="membership">
                            <h4>your membership</h4>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {data_rows}
                </tbody>
            </table>
        </div>
    )
}
