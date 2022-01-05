import Home from "./views/Home";
import Shorts from "./views/Shorts";
import History from "./views/History";
import Library from "./views/Library";
import Downloads from "./views/Downloads";
import Subscription from "./views/Subscription";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shorts" component={Shorts} />
        <Route path="/subscription" component={Subscription} />
        <Route path="/downloads" component={Downloads} />
        <Route path="/history" component={History} />
        <Route path="/library" component={Library} />
      </Switch>
    </>
  );
}
