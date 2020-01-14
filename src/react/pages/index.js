import Home from "./Home/Home";
import ReviewPage from "./ReviewPage/ReviewPage";
import NotFound from "./NotFound";
import Proposal from "./Proposal/Proposal";

export default {
  Home: { path: "/", component: Home },
  Proposal: { path: "/proposal", component: Proposal },
  ReviewPage: { path: "/reviewpage", component: ReviewPage },
  NotFound: { path: "*", component: NotFound }
};
