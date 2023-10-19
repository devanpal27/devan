import React from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div id="com" className='container'>
            <h1 id="name" className='text-center mt-2 md-3'>Devan Pal</h1>
            <img id='im' src="https://imgs.search.brave.com/egYP_BH3Mq0VZP4_dFt3C3fOzQhhCyLejHo7MYPg4kk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY29udGVudHN0/YWNrLmlvL3YzL2Fz/c2V0cy9ibHRiNjUz/MGIyNzFmZGRkMGIx/L2JsdGQ0MDgwZjhl/ZmIzNjU3NTEvNWZm/NTY2MGJiNDdjZGY3/ZmM3ZDZjM2RjL1Zf/QUdFTlRTXzU4N3g5/MDBfeW9ydS5wbmc" alt="img not found" />
        </div>
    )
}
export default Header