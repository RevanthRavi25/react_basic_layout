import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside>
            <h2>Sidebar</h2>
            {/* Sidebar content */}
<div>
            <Link to="/" className="btn btn-success">Content</Link>
            <Link to="/dashboard" className="btn btn-success">Dashboard</Link>
</div>
        </aside>
    );
};

export default Sidebar;
