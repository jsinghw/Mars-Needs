import Home from "./Home";
import Profile from "./Profile";
import Register from "./Register";
import MessageFeed from "./MessageFeed";
import NotFound from "./NotFound";

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  Register: { path: "/register", component: Register },
  MessageFeed: { path: "/messagefeed", component: MessageFeed },
  NotFound: { path: "*", component: NotFound }
};
