const KEY = "bot-ai-conversations";

export const getConversations = () =>
    JSON.parse(localStorage.getItem(KEY)) || [];

export const saveConversation = (conversation) => {
    const existing = getConversations();
    localStorage.setItem(KEY, JSON.stringify([...existing, conversation]));
};
