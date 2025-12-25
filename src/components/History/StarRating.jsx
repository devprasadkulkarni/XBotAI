import Rating from "@mui/material/Rating";

export default function StarRating({ value }) {
    return <Rating value={value} readOnly size="small" />;
}
