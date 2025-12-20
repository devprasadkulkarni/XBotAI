import logo from "../assets/logo.svg";

const Conversations = () => {
    const questions = [
        "Hi, what is the weather",
        "Hi, what is my location",
        "Hi, what is the temperature",
        "Hi, how are you",
    ];

    return (
        <div className="bg-[#f5f2fb] w-[80vw] h-screen">
            <div className="flex flex-col">
                <div>
                    <h1 className="text-3xl font-bold text-[#9785BA]">
                        Bot AI
                    </h1>
                </div>
                <div>
                    <h2>How Can I Help You Today?</h2>
                    <img src={logo} alt="logo" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                    {questions.map((question) => (
                        <div key={question} className=" h-[10vh] bg-white">
                            <div>
                                <p>{question}</p>
                                <p>Get immediate AI generated response</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <input className="p-3 bg-white rounded-md" type="text" />
                    <button className="px-3 py-2 bg-[#d7c7f4]">Ask</button>
                    <button className="px-3 py-2 bg-[#d7c7f4]">Save</button>
                </div>
            </div>
        </div>
    );
};

export default Conversations;
