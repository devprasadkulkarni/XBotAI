const Chat = () => {
    return (
        <div className="flex-1 h-screen overflow-y-auto bg-[#f5f2fb]">
            <div className="flex flex-col h-full">
                <div>
                    <h1 className="text-3xl font-bold text-[#9785BA] pt-5 pl-5">
                        Bot AI
                    </h1>
                </div>
                <div className="mt-auto">
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

export default Chat;
