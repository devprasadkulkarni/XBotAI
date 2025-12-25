import sampleData from "../aiData/sampleData.json";

export function getBotResponse(question) {
    const normalizedQuestion = question.trim().toLowerCase();

    const match = sampleData.find(
        (item) => item.question.trim().toLowerCase() === normalizedQuestion
    );

    return match ? match.response : "Sorry, Did not understand your query!";
}
