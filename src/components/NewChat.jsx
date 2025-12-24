import logo_square from "../assets/logo-square.svg";
import { TbEdit } from "react-icons/tb";

const NewChat = () => {
    return (
        <div className="w-[15vw] min-w-50 h-screen">
            <div className="flex bg-[#d7c7f4] justify-between items-center p-3 ">
                <img src={logo_square} alt="logo" />
                <h2 className="text-2xl">New Chat</h2>
                <TbEdit size={30} />
            </div>
            <div className="flex justify-center items-center">
                <button className="mt-5 rounded-md px-5 py-3 text-xl  bg-[#d7c7f4]">
                    Past Conversations
                </button>
            </div>
        </div>
    );
};

export default NewChat;
