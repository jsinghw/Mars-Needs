import Home from "./Home/Home";
import NotFound from "./NotFound"
import Proposal from "./Proposal/Proposal"

export default {
  Home: { path: "/", component: Home },
  Proposal: { path: "/proposal", component: Proposal },
  NotFound: { path: "*", component: NotFound }
}
