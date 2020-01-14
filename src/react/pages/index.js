import Home from "./Home/Home";
<<<<<<< HEAD
import ReviewPage from "./ReviewPage/ReviewPage";
import NotFound from "./NotFound";

export default {
  Home: { path: "/", component: Home },
  ReviewPage: { path: "/reviewpage", component: ReviewPage },
=======
import NotFound from "./NotFound"
import Proposal from "./Proposal/Proposal"

export default {
  Home: { path: "/", component: Home },
  Proposal: { path: "/proposal", component: Proposal },
>>>>>>> 992fb648db4d6434b62e220c493b34860e79b048
  NotFound: { path: "*", component: NotFound }
};
