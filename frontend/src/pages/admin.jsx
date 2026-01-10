import React from "react";

const Admin= () => {
    return (
        <div className="admin">
            <h2>Admin Dashboard</h2>

            <div className="admin-cards">
                <div className="admin-card">
                    <h3>Total Users</h3>
                    <p>128</p>
                </div>

                <div className="admin-card">
                    <h3>Talent Posts</h3>
                    <p>54</p>
                </div>
                <div className="admin-card">
                    <h3>Reports</h3>
                    <p>2 pending</p>
                </div>
            </div>
        </div>
    );
}
export default Admin;