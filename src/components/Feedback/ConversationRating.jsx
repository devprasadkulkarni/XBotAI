import Rating from "@mui/material/Rating";

export default function ConversationRating({ value, onChange }) {
    return <Rating value={value} onChange={(_, v) => onChange(v)} />;
}
