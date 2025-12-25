import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export default function FeedbackActions({ onThumbsUp, onThumbsDown }) {
    return (
        <div className="flex items-center gap-3 mt-2">
            <ThumbUpIcon
                onClick={onThumbsUp}
                className="cursor-pointer text-muted hover:text-text"
            />
            <ThumbDownIcon
                onClick={onThumbsDown}
                className="cursor-pointer text-muted hover:text-text"
            />
        </div>
    );
}
