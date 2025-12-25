import { Link, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import logo_square from "../assets/logo-square.svg";

export default function Layout({ children, onNewChat }) {
    const navigate = useNavigate();

    const handleNewChat = () => {
        onNewChat?.();
        navigate("/");
    };

    return (
        <div className="flex h-screen bg-bg">
            {/* Sidebar */}
            <aside className="w-64 bg-sidebar p-4 flex flex-col gap-6">
                {/* New Chat */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={handleNewChat}
                >
                    <img src={logo_square} alt="logo" className="w-8 h-8" />
                    <span className="font-semibold">New Chat</span>
                    <EditIcon fontSize="small" />
                </div>

                {/* History */}
                <Link
                    to="/history"
                    className="bg-primary text-text px-4 py-2 rounded-lg text-sm font-bold"
                >
                    Past Conversations
                </Link>
            </aside>

            {/* Main */}
            <main className="flex-1 flex flex-col overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
