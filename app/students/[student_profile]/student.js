import React from 'react';

export default function Page({ params }) {
    return (
        <>
            <div>Student First Name: {params.firstname}</div>
            <div>Student Last Name: {params.lastname}</div>
            <div>Student Address: {params.address}</div>
            <div>Student Joined Institute: {params.joined_institute}</div>
            <div>Student Age: {params.age}</div>
            <div>Student Email: {params['student-email']}</div>
            <div>Student Phone: {params['phone-student']}</div>
            <div>Student Phone (alt): {params['phone-student-ot-opt']}</div>
            <div>Student Gender: {params.gender}</div>
            <div>Student Nationality: {params.nationality}</div>
            <div>Student Department: {params.department}</div>
            <div>Student Complition Year: {params['year-complition']}</div>
            <div>Student Parent: {params['parent-name']}</div>
            <div>Student Medical Info.: {params['medical-information']}</div>
            <div>Student Dashboard Link: {params['student-dashboard']}</div>
            <div>Student Earned CGPA max: {params['max-cgpa-earned']}</div>
            <div>Student Is Enroled: {params.is_enrolled}</div>
            <div>About Student: {params['about_student']}</div>
        </>
    );
}
