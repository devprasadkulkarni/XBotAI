import Rating from "@mui/material/Rating";
import botIcon from "../../assets/logo-square.svg";
import userIcon from "../../assets/user-avatar.svg"; // optional

export default function HistoryMessage({ message, conversation, isLast }) {
    const isBot = message.role === "bot";

    return (
        <div className="flex gap-4 items-start">
            <img
                src={isBot ? botIcon : userIcon}
                alt={isBot ? "Soul AI" : "User"}
                className="w-10 h-10 rounded-full shrink-0"
            />

            <div className="flex-1">
                <p className="font-semibold">{isBot ? "Soul AI" : "You"}</p>

                <p className="mt-1">{message.text}</p>

                {isBot && isLast && conversation?.rating && (
                    <Rating
                        value={conversation.rating}
                        readOnly
                        size="small"
                        className="mt-2"
                    />
                )}

                {isBot && isLast && conversation?.feedback && (
                    <p className="text-sm text-muted mt-2">
                        <strong>Feedback:</strong> {conversation.feedback}
                    </p>
                )}
            </div>
        </div>
    );
}
