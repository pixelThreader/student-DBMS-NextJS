import React from 'react';

export default function Page({ params }) {
    return (
        <>
            <div className="container py-5">
                <h1 className="display-5 fw-bold text-center my-3">Student Information</h1>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Student ID: {params.$id}</h5>
                                <p className="card-text">
                                    Student First Name: {params.firstname}<br />
                                    Student Last Name: {params.lastname}<br />
                                    Student Address: {params.address}<br />
                                    Student Joined Institute: {params.joined_institute}<br />
                                    Student Age: {params.age}<br />
                                    Student Email: {params['student-email']}<br />
                                    Student Phone: {params['phone-student']}<br />
                                    Student Phone (alt): {params['phone-student-ot-opt']}<br />
                                    Student Gender: {params.gender}<br />
                                    Student Nationality: {params.nationality}<br />
                                    Student Department: {params.department}<br />
                                    Student Complition Year: {params['year-complition']}<br />
                                    Student Parent: {params['parent-name']}<br />
                                    Student Medical Info.: {params['medical-information']}<br />
                                    Student Dashboard Link: {params['student-dashboard']}<br />
                                    Student Earned CGPA max: {params['max-cgpa-earned']}<br />
                                    Student Is Enroled: {params.is_enrolled ? 'Yes' : 'No'}<br />
                                    About Student: {params['about_student']}<br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

