import styles from "./App.module.css";
import Dashboard from "../Dashboard/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import { Worker } from "@react-pdf-viewer/core";

const App = () => {
    return (
        <Worker workerUrl="/pdfjs/pdf.worker.min.js">
            <Router>
                <div className={styles.App}>
                    <Dashboard />
                </div>
            </Router>
        </Worker>
    );
};

export default App;
