import React from 'react'

function TableRow(props) {
    return (
        <tr className='table-row cursor-pointer' target={props.studentId}>
            <th scope="row">{props.sno}</th>
            <td>{props.firstname}</td>
            <td>{props.lastname}</td>
            <td className='d-flex justify-content-start align-items-center gap-2'>
                <button target={props.studentId} className="btn btn-sm btn-info">Edit</button>
                <button target={props.studentId} className="btn btn-sm btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default TableRow
