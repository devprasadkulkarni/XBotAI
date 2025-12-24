import logo from "../assets/logo.svg";

const Conversations = () => {
    const questions = [
        "Hi, what is the weather",
        "Hi, what is my location",
        "Hi, what is the temperature",
        "Hi, how are you",
    ];

    return (
        <div className="flex-1 h-screen overflow-y-auto bg-[#f5f2fb]">
            <div className="flex flex-col h-full">
                <div>
                    <h1 className="text-3xl font-bold text-[#9785BA] pt-5 pl-5">
                        Bot AI
                    </h1>
                </div>
                <div className="flex flex-col items-center mt-auto">
                    <h2 className="font-bold text-2xl">
                        How Can I Help You Today?
                    </h2>
                    <img src={logo} alt="logo" />
                </div>
                <div className="mt-auto">
                    <div className="grid grid-cols-2 gap-5 px-10">
                        {questions.map((question) => (
                            <div
                                key={question}
                                className=" h-[10vh] bg-white rounded-md cursor-pointer px-5 py-5"
                            >
                                <div className="flex flex-col gap-5">
                                    <p className="text-xl font-bold">
                                        {question}
                                    </p>
                                    <p className="text-gray-500">
                                        Get immediate AI generated response
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-5 px-10 py-5 w-full">
                        <input
                            className="flex-1 p-3 bg-white border border-gray-400 rounded-md"
                            type="text"
                        />
                        <button className="px-4 py-2 rounded-md cursor-pointer bg-[#d7c7f4]">
                            Ask
                        </button>
                        <button className="px-4 py-2 rounded-md cursor-pointer bg-[#d7c7f4]">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Conversations;
