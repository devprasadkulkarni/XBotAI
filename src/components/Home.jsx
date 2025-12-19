import Conversations from "./Conversations";
import NewChat from "./NewChat";

const Home = () => {
    return (
        <div>
            <div className="flex">
                <NewChat />
                <Conversations />
            </div>
        </div>
    );
};

export default Home;
