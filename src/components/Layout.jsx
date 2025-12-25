import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo_square from "../assets/logo-square.svg";

export default function Layout({ children, onNewChat }) {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleNewChat = () => {
        onNewChat?.();
        navigate("/");
        setOpen(false);
    };

    return (
        <div className="flex h-screen bg-bg">
            {/* Sidebar */}
            <aside className="hidden md:flex w-64 bg-sidebar p-4 flex-col gap-6">
                <Link
                    to="/"
                    onClick={handleNewChat}
                    className="flex items-center gap-2"
                >
                    <img src={logo_square} alt="logo" className="w-8 h-8" />
                    <span className="font-semibold">New Chat</span>
                    <EditIcon fontSize="small" />
                </Link>

                <Link
                    to="/history"
                    className="bg-primary text-text px-4 py-2 rounded-lg text-sm font-bold"
                >
                    Past Conversations
                </Link>
            </aside>

            {/* MAIN */}
            <div className="flex-1 flex flex-col">
                {/* Page content */}
                <main className="flex-1 flex flex-col overflow-hidden">
                    {children}
                </main>
            </div>

            {/* Mobile sidebar */}
            {open && (
                <div className="fixed inset-0 z-50 flex md:hidden">
                    <div className="w-64 bg-sidebar p-4 flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold">Menu</span>
                            <CloseIcon onClick={() => setOpen(false)} />
                        </div>

                        <Link to="/" onClick={handleNewChat}>
                            New Chat
                        </Link>

                        <Link to="/history" onClick={() => setOpen(false)}>
                            Past Conversations
                        </Link>
                    </div>

                    <div
                        className="flex-1 bg-black/30"
                        onClick={() => setOpen(false)}
                    />
                </div>
            )}
        </div>
    );
}
