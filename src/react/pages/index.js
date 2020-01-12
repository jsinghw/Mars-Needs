import Home from "./Home/Home";
import ReviewPage from "./ReviewPage/ReviewPage";
import NotFound from "./NotFound";

export default {
  Home: { path: "/", component: Home },
  ReviewPage: { path: "/reviewpage", component: ReviewPage },
  NotFound: { path: "*", component: NotFound }
};
