import React, { useState } from "react";
import { Menu, User, Home, Settings, Box, BarChart2, HelpCircle, User2 } from "lucide-react";
import "./UserPanel.css";

const menuItems = [
    { name: "Dashboard", icon: <Home size={20} /> },
    { name: "Profile", icon: <User2 size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
    { name: "Orders", icon: <Box size={20} /> },
    { name: "Analytics", icon: <BarChart2 size={20} /> },
    { name: "Support", icon: <HelpCircle size={20} /> },
];

const UserPanel = () => {
    const [active, setActive] = useState("Dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="up-user-panel">
            {/* Sidebar */}
            <aside className={`up-sidebar ${sidebarOpen ? "expanded" : "collapsed"}`}>
                <div className="up-logo">{sidebarOpen ? "MarketGenie" : "MG"}</div>
                <ul className="up-menu">
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            className={active === item.name ? "active" : ""}
                            onClick={() => setActive(item.name)}
                        >
                            <span className="menu-icon">{item.icon}</span>
                            {sidebarOpen && <span className="menu-text">{item.name}</span>}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content */}
            <div className="up-main-wrapper">
                {/* Navbar */}
                <nav className="up-navbar">
                    <div className="up-nav-left">
                        <Menu size={24} className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)} />
                    </div>
                    <div className="up-nav-right">
                        <User onClick={() => setModalOpen(true)} size={24} />
                    </div>
                </nav>

                {/* Main content */}
                <main className="up-main-content">
                    <h2>{active}</h2>
                    <p>
                        This is the <strong>{active}</strong> section. You can put any content here.
                    </p>
                    <div className="up-dummy-content">
                        {[...Array(20)].map((_, i) => (
                            <p key={i}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Section content
                                number {i + 1}.
                            </p>
                        ))}
                    </div>
                </main>
            </div>

            {/* Profile Modal */}
            {modalOpen && (
                <div className="up-modal-overlay" onClick={() => setModalOpen(false)}>
                    <div className="up-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="up-modal-header">
                            <h2>User Profile</h2>
                            {/* Close button using normal text */}
                            <button className="close-icon" onClick={() => setModalOpen(false)}>×</button>
                        </div>
                        <div className="up-modal-body">
                            <p><strong>Name:</strong> Sarah Johnson</p>
                            <p><strong>Email:</strong> sarah@example.com</p>
                            <button className="logout-btn">Logout</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default UserPanel;
