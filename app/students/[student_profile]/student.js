'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Client, Databases, Query } from 'appwrite';

export default function Page() {
    const [student, setStudent] = useState(null);
    const router = useRouter();
    const { student_profile } = router.query;

    useEffect(() => {
        if (!student_profile) return; // Wait until the profile ID is available

        const client = new Client()
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('66487fe600145ff0181e');

        const databases = new Databases(client);

        const fetchStudent = async () => {
            try {
                const response = await databases.listDocuments(
                    'db.appwrt.pixelthreader749404',
                    'db.pixelthreader.studentsdbms4141',
                    [Query.equal('$id', student_profile)]
                );
                setStudent(response.documents[0]);
            } catch (error) {
                console.log(error);
            }
        };

        fetchStudent();
    }, [student_profile]);

    if (!student) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container py-5">
            <h1 className="display-5 fw-bold text-center my-3">Student Information</h1>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Student ID: {student.$id}</h5>
                            <p className="card-text">
                                Student First Name: {student.firstname}<br />
                                Student Last Name: {student.lastname}<br />
                                Student Address: {student.address}<br />
                                Student Joined Institute: {student.joined_institute}<br />
                                Student Age: {student.age}<br />
                                Student Email: {student['student-email']}<br />
                                Student Phone: {student['phone-student']}<br />
                                Student Phone (alt): {student['phone-student-ot-opt']}<br />
                                Student Gender: {student.gender}<br />
                                Student Nationality: {student.nationality}<br />
                                Student Department: {student.department}<br />
                                Student Completion Year: {student['year-complition']}<br />
                                Student Parent: {student['parent-name']}<br />
                                Student Medical Info.: {student['medical-information']}<br />
                                Student Dashboard Link: {student['student-dashboard']}<br />
                                Student Earned CGPA max: {student['max-cgpa-earned']}<br />
                                Student Is Enrolled: {student.is_enrolled ? 'Yes' : 'No'}<br />
                                About Student: {student['about_student']}<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
