"use client"

import useState from 'react'
import { Client, Databases, Query } from 'appwrite';

function TableRow(props) {
    

    const [student, setStudent] = useState();

    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('66487fe600145ff0181e');

    const databases = new Databases(client);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await databases.listDocuments(
                    'db.appwrt.pixelthreader749404',
                    'db.pixelthreader.studentsdbms4141',
                    [
                        Query.equal('$id', props?.studentId)
                    ]
                );
                setStudent(response.documents[0]);
            } catch (error) {
                console.log(error);
            }
        };

        fetchStudents();
    }, []);


    return (
        <tr role='button' className='table-row' target={props?.studentId}>
            <th scope="row">{props?.sno}</th>
            <td>{props?.firstname}</td>
            <td>{props?.lastname}</td>
            <td className='d-flex justify-content-start align-items-center gap-2'>
                <button target={props?.studentId} className="btn btn-sm btn-info">Edit</button>
                <button target={props?.studentId} className="btn btn-sm btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default TableRow
