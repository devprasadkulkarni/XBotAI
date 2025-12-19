import logo_square from "../assets/logo-square.svg";
import { TbEdit } from "react-icons/tb";

const NewChat = () => {
    return (
        <div className="w-80">
            <div className="flex bg-[#9785BA] justify-between items-center p-5 ">
                <img src={logo_square} alt="logo" />
                <h2 className="text-2xl">New Chat</h2>
                <TbEdit size={30} />
            </div>
            <div className="flex justify-center items-center">
                <button className="mt-5 rounded-md px-5 py-3 text-xl  bg-[#9785BA]">
                    Past Conversations
                </button>
            </div>
        </div>
    );
};

export default NewChat;
