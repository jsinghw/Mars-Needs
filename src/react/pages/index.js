import Home from "./Home/Home";
import NotFound from "./NotFound"

export default {
  Home: { path: "/", component: Home },
  NotFound: { path: "*", component: NotFound }
}
