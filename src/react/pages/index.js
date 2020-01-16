import Home from "./Home/Home";
import NotFound from "./NotFound"
import Proposal from "./Proposal/Proposal"
import ReviewPage from "./ReviewPage/ReviewPage";
import NextSteps from "./NextSteps/NextSteps"

export default {
  Home: { path: "/", component: Home },
  Proposal: { path: "/proposal", component: Proposal },
  ReviewPage: { path: "/reviewpage", component: ReviewPage },
  NextSteps: { path: "/next-steps", component: NextSteps},
  NotFound: { path: "*", component: NotFound }
};
