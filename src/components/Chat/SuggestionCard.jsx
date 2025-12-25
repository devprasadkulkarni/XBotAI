export default function SuggestionCard({ text, onClick }) {
    return (
        <div
            onClick={() => onClick(text)}
            className="bg-white border border-border rounded-xl p-5 shadow-sm cursor-pointer hover:bg-accent transition"
        >
            <p className="font-medium">{text}</p>
            <p className="text-sm text-muted mt-1">
                Get immediate AI generated response
            </p>
        </div>
    );
}
