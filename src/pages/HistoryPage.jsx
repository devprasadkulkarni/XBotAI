import { useState } from "react";
import Layout from "../components/Layout";
import { getConversations } from "../utils/storage";
import ConversationCard from "../components/History/ConversationCard";

export default function HistoryPage() {
    const [selectedRating, setSelectedRating] = useState("all");

    const conversations = getConversations();

    const filteredConversations =
        selectedRating === "all"
            ? conversations
            : conversations.filter((c) => c.rating === Number(selectedRating));

    return (
        <Layout>
            <div className="flex flex-col flex-1 px-10 py-6">
                {/* HEADER */}
                <h1 className="text-3xl font-semibold text-center mb-6">
                    Conversation History
                </h1>

                {/* Filter */}
                <div className="mb-6 max-w-xs">
                    <label
                        htmlFor="ratingFilter"
                        className="block text-sm font-medium mb-2"
                    >
                        Filter by Rating
                    </label>

                    <select
                        id="ratingFilter"
                        value={selectedRating}
                        onChange={(e) => setSelectedRating(e.target.value)}
                        className="w-full border border-border rounded-lg px-3 py-2 bg-white"
                    >
                        <option value="all">All</option>
                        <option value="1">1 ⭐</option>
                        <option value="2">2 ⭐</option>
                        <option value="3">3 ⭐</option>
                        <option value="4">4 ⭐</option>
                        <option value="5">5 ⭐</option>
                    </select>
                </div>

                <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                    {filteredConversations.length === 0 && (
                        <p className="text-muted">
                            No conversations found for this rating.
                        </p>
                    )}

                    {filteredConversations.map((conv) => (
                        <ConversationCard key={conv.id} conversation={conv} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}
