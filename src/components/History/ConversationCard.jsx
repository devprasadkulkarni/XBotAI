import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Rating from "@mui/material/Rating";
import botIcon from "../../assets/logo-square.svg";
import userIcon from "../../assets/user-avatar.svg";
import ConversationRating from "../Feedback/ConversationRating";
import FeedbackModal from "../Feedback/FeedbackModal";
import { getConversations } from "../../utils/storage";

export default function ConversationCard({ conversation }) {
    const [showRating, setShowRating] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);

    const updateConversation = (updates) => {
        const all = getConversations().map((c) =>
            c.id === conversation.id ? { ...c, ...updates } : c
        );

        localStorage.setItem("bot-ai-conversations", JSON.stringify(all));
    };

    const userMsg = conversation.messages.find((m) => m.role === "user");
    const botMsg = conversation.messages.find((m) => m.role === "bot");

    return (
        <div className="bg-white rounded-xl p-5 shadow-sm space-y-4">
            {/* USER MESSAGE */}
            {userMsg && (
                <div className="flex gap-4 items-start">
                    <img
                        src={userIcon}
                        alt="User"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-semibold">You</p>
                        <p className="text-sm">{userMsg.text}</p>
                    </div>
                </div>
            )}

            {/* BOT MESSAGE */}
            {botMsg && (
                <div className="flex gap-4 items-start">
                    <img
                        src={botIcon}
                        alt="Soul AI"
                        className="w-10 h-10 rounded-full"
                    />

                    <div className="flex-1">
                        <p className="font-semibold">Soul AI</p>
                        <p className="text-sm">{botMsg.text}</p>

                        {conversation.rating && (
                            <Rating
                                value={conversation.rating}
                                readOnly
                                size="small"
                                className="mt-2"
                            />
                        )}

                        {conversation.feedback && (
                            <p className="text-sm text-muted mt-2">
                                {conversation.feedback}
                            </p>
                        )}

                        {!conversation.rating && !conversation.feedback && (
                            <div className="flex gap-3 mt-2 text-muted">
                                <ThumbUpIcon
                                    onClick={() => setShowRating(true)}
                                    className="cursor-pointer hover:text-text"
                                />
                                <ThumbDownIcon
                                    onClick={() => setShowFeedback(true)}
                                    className="cursor-pointer hover:text-text"
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}

            {showRating && (
                <ConversationRating
                    onSubmit={(value) => {
                        updateConversation({ rating: value });
                        setShowRating(false);
                    }}
                    onClose={() => setShowRating(false)}
                />
            )}

            {showFeedback && (
                <FeedbackModal
                    onSubmit={(text) => {
                        updateConversation({ feedback: text });
                        setShowFeedback(false);
                    }}
                    onClose={() => setShowFeedback(false)}
                />
            )}
        </div>
    );
}
