import { useState } from "react";

export default function ChatInput({ onSend, onSave }) {
    const [input, setInput] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        onSend(input);
        setInput("");
    };

    return (
        <form onSubmit={submit} className="flex items-center gap-4 px-8 py-6">
            <input
                placeholder="Message Bot AI..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border border-border rounded-lg px-4 py-3"
            />

            <button type="submit" className="bg-primary px-6 py-3 rounded-lg">
                Ask
            </button>

            <button
                type="button"
                onClick={onSave}
                className="bg-accent px-6 py-3 rounded-lg"
            >
                Save
            </button>
        </form>
    );
}
