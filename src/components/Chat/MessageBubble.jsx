import botIcon from "../../assets/logo-square.svg";
import userIcon from "../../assets/user-avatar.svg";

export default function MessageBubble({ message }) {
    const isBot = message.role === "bot";

    return (
        <div className="flex gap-4 items-start">
            <img
                src={isBot ? botIcon : userIcon}
                alt={isBot ? "Soul AI" : "User"}
                className="w-10 h-10 rounded-full"
            />

            <div>
                {isBot && <span className="font-semibold">Soul AI</span>}
                {!isBot && <span className="font-semibold">You</span>}

                <p>{message.text}</p>
            </div>
        </div>
    );
}
