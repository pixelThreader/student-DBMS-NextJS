import React from 'react';

export default function Page({ params }) {
    return (
        <>
            <div>Student: {params.firstname}</div>
            <div>Student: {params.lastname}</div>
            <div>Student: {params.address}</div>
            <div>Student: {params.joined_institute}</div>
            <div>Student: {params.age}</div>
            <div>Student: {params['student-email']}</div>
            <div>Student: {params['phone-student']}</div>
            <div>Student: {params['phone-student-ot-opt']}</div>
            <div>Student: {params.gender}</div>
            <div>Student: {params.nationality}</div>
            <div>Student: {params.department}</div>
            <div>Student: {params['year-complition']}</div>
            <div>Student: {params['parent-name']}</div>
            <div>Student: {params['medical-information']}</div>
            <div>Student: {params['student-dashboard']}</div>
            <div>Student: {params['max-cgpa-earned']}</div>
            <div>Student: {params.is_enrolled}</div>
            <div>Student: {params['about_student']}</div>
        </>
    );
}
