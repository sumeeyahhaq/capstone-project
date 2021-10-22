import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import EducationPrograms from "./Components/Pages/EducationPrograms";
import JobBoard from "./Components/Pages/JobBoard";
import SignOut from "./Components/Pages/SignOut";
import AWSAcademy from "./Components/Pages/AWSAcademy";
import AWSEducate from "./Components/Pages/AWSEducate";
import AWSReStart from "./Components/Pages/AWSReStart";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/education-programs" exact component={EducationPrograms} />
        <Route path="/job-board" exact component={JobBoard} />
        <Route path="/contact-us" exact component={Contact} />
        <Route path="/sign-out" exact component={SignOut} />
        <Route path="/aws-academy" exact component={AWSAcademy} />
        <Route path="/aws-educate" exact component={AWSEducate} />
        <Route path="/aws-re-start" exact component={AWSReStart} />
      </Switch>
    </Router>
  );
}

export default App;
