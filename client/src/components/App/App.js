import styles from "./App.module.css";
import Dashboard from "../Dashboard/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className={styles.App}>
                <Dashboard />
            </div>
        </Router>
    );
};

export default App;
