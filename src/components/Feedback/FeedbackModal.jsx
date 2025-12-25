import { useState } from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import CloseIcon from "@mui/icons-material/Close";

export default function FeedbackModal({ onSubmit, onClose }) {
    const [text, setText] = useState("");

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            {/* Modal */}
            <div className="w-[90%] max-w-3xl bg-[#F7F3FF] rounded-xl p-6 shadow-lg">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <LightbulbOutlinedIcon />
                        <h2 className="text-xl font-semibold">
                            Provide Additional Feedback
                        </h2>
                    </div>

                    <button onClick={onClose}>
                        <CloseIcon />
                    </button>
                </div>

                {/* Textarea */}
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder=""
                    className="w-full h-40 rounded-xl border border-gray-400 p-4 resize-none focus:outline-none bg-white"
                />

                {/* Footer */}
                <div className="flex justify-end mt-6">
                    <button
                        onClick={() => onSubmit(text)}
                        className="bg-[#D9CCF9] text-black px-8 py-3 rounded-lg font-medium"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
