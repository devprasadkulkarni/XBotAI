import Conversations from "./Conversations";
import NewChat from "./NewChat";
import Chat from "./Chat";

const Home = () => {
    return (
        <div>
            <div className="flex h-screen w-screen">
                <NewChat />
                {/* <Conversations /> */}
                <Chat />
            </div>
        </div>
    );
};

export default Home;
