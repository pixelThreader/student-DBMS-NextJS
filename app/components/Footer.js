import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <Link
                        href="/"
                        className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
                    >
                        <img src="/favicon.png" alt="" width={32} height={32} />
                    </Link>
                    <span className="mb-3 mb-md-0 text-body-secondary">
                        © 2024 Company, Inc
                    </span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <Link className="text-body-secondary" target='_blank' href="https://github.com/piyush20B/student-DBMS-NextJS">
                            <img src="/github-mark.png" height={28} width={28} alt="GitHub" />
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>

    )
}

export default Footer
