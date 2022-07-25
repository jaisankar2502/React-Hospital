import React from 'react';
import Footer from '../AdminComponent/adminFooter';
import Tables from '../AdminComponent/AdminTables';
import Sidebar from '../AdminComponent/AdminSidebar';
import Navbar from '../AdminComponent/adminNav';

import '../AdminComponent/admin.css';


function AdminPage() {
    return (
        <div className="wrapper">
                <Navbar />
                <Sidebar />
                <Tables />
            <aside className="control-sidebar control-sidebar-dark" />
            <Footer />
        </div>
    );
}

export default AdminPage;
