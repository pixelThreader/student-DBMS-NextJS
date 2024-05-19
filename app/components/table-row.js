'use client';

import React, { useState, useEffect } from 'react';  // Import React and hooks correctly
import { Client, Databases, Query } from 'appwrite';
import Link from 'next/link';

function TableRow(props) {
    const [student, setStudent] = useState({});
    
    useEffect(() => {
        const client = new Client()
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('66487fe600145ff0181e');
        
        const databases = new Databases(client);

        const fetchStudent = async () => {
            try {
                const response = await databases.listDocuments(
                    'db.appwrt.pixelthreader749404',
                    'db.pixelthreader.studentsdbms4141',
                    [
                        Query.equal('$id', props?.studentId)
                    ]
                );
                setStudent(response.documents[0] || {});
            } catch (error) {
                console.log(error);
            }
        };

        fetchStudent();
    }, [props?.studentId]);

    return (
        <tr className='table-row' target={props?.studentId}>
            <th scope="row">{props?.sno}</th>
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td>{props.email}</td>
            <td className='d-flex justify-content-start align-items-center gap-2'>
                <Link href={props['student-dashboard']} className="btn btn-sm btn-primary">View</Link>
                <button target={props?.studentId} className="btn btn-sm btn-info">Edit</button>
                <button target={props?.studentId} className="btn btn-sm btn-outline-danger">Delete</button>
            </td>
        </tr>
    );
}

export default TableRow;
