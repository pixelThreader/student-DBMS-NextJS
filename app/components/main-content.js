'use client';

import React, { useState, useEffect } from 'react';
import { Client, Databases } from 'appwrite';
import Link from 'next/link';

function MainContent() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const client = new Client()
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('66487fe600145ff0181e');

        const databases = new Databases(client);

        const fetchStudents = async () => {
            try {
                const response = await databases.listDocuments(
                    'db.appwrt.pixelthreader749404',
                    'db.pixelthreader.studentsdbms4141'
                );
                setStudents(response.documents);
            } catch (error) {
                console.log(error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <>
            <div className="px-4 py-5 my-5 text-center">
                <img
                    className="d-block mx-auto mb-4"
                    src="/favicon.png"
                    alt=""
                    width={72}
                    height={72}
                />
                <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        Quickly design and customize responsive mobile-first sites with Bootstrap,
                        the world’s most popular front-end open source toolkit, featuring Sass
                        variables and mixins, responsive grid system, extensive prebuilt
                        components, and powerful JavaScript plugins.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                            Primary button
                        </button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                            Secondary
                        </button>
                    </div>
                </div>
            </div>

            <hr className="my-5" />

            <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length === 0 && <tr><td colSpan={4}>Loading...</td></tr>}
                        {students.map((student, index) => (
                            <tr key={student.$id}>
                                <th scope="row">{index + 1}</th>
                                <td>{student.firstname}</td>
                                <td>{student.lastname}</td>
                                <td className='d-flex justify-content-start align-items-center gap-2'>
                                    <Link href={`/students/${student.$id}/student`}>
                                        <a className="btn btn-sm btn-info">View</a>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default MainContent;
