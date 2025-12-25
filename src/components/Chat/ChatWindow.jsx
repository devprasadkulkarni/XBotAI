import MessageBubble from "./MessageBubble";

export default function ChatWindow({ messages }) {
    return (
        <div className="flex-1 px-8 py-4 space-y-4 overflow-y-auto">
            {messages.map((msg, idx) => (
                <MessageBubble key={idx} message={msg} />
            ))}
        </div>
    );
}
