export default function SubjectiveFeedback({ value, onChange }) {
    return (
        <textarea
            className="w-full border p-2 rounded"
            placeholder="Tell us more about your experience..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}
