import React from 'react'

export default function PatentTable() {
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
                <tr>
                    <td className="name-column">
                            <h4>Artificial intelligence disease type analysis method, smart server and storage</h4>
                            <h4 className="uuid">UID: 144 18332341</h4>
                        </td>
                        <td className="date-column">
                            <h4>12/12/2020</h4>
                        </td>
                        <td className="membership">
                            <h4>inventor</h4>
                        </td>
                </tr>
                <tr>
                    <td className="name-column">
                            <h4>Artificial intelligence disease type analysis method, smart server and storage</h4>
                            <h4 className="uuid">UID: 144 18332341</h4>
                        </td>
                        <td className="date-column">
                            <h4>12/12/2020</h4>
                        </td>
                        <td className="membership">
                            <h4>inventor</h4>
                        </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
