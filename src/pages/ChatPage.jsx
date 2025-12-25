import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ChatInput from "../components/Chat/ChatInput";
import ChatWindow from "../components/Chat/ChatWindow";
import SuggestionCard from "../components/Chat/SuggestionCard";
import logo from "../assets/logo.svg";
import { getBotResponse } from "../utils/getBotResponse";
import { saveConversation } from "../utils/storage";

export default function ChatPage() {
    const [messages, setMessages] = useState([]);

    const handleSend = (text) => {
        const botReply = getBotResponse(text);
        setMessages((prev) => [
            ...prev,
            { role: "user", text },
            { role: "bot", text: botReply },
        ]);
    };

    const handleSave = () => {
        if (!messages.length) return;

        saveConversation({
            id: Date.now(),
            messages,
            rating: null,
            feedback: "",
        });

        setMessages([]);
    };

    const handleNewChat = () => setMessages([]);

    const showLanding = messages.length === 0;

    return (
        <Layout onNewChat={handleNewChat}>
            <div className="px-8 py-4">
                <Link to="/" onClick={handleNewChat}>
                    <h1 className="text-2xl font-semibold text-primary cursor-pointer">
                        Bot AI
                    </h1>
                </Link>
            </div>

            {showLanding ? (
                <>
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                        <h2 className="text-2xl font-semibold mb-4">
                            How Can I Help You Today?
                        </h2>
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="grid grid-cols-2 gap-6 px-12 mb-8">
                        <SuggestionCard
                            text="Hi, what is the weather"
                            onClick={handleSend}
                        />
                        <SuggestionCard
                            text="Hi, what is my location"
                            onClick={handleSend}
                        />
                        <SuggestionCard
                            text="Hi, what is the temperature"
                            onClick={handleSend}
                        />
                        <SuggestionCard
                            text="Hi, how are you"
                            onClick={handleSend}
                        />
                    </div>
                </>
            ) : (
                <ChatWindow messages={messages} />
            )}

            <ChatInput onSend={handleSend} onSave={handleSave} />
        </Layout>
    );
}
