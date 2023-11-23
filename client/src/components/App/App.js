import styles from "./App.module.css";
import Dashboard from "../Dashboard/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import { Worker } from "@react-pdf-viewer/core";
import { Provider } from "react-redux";
import store from "../Common/redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <Worker workerUrl="/pdfjs/pdf.worker.min.js">
                <Router>
                    <div className={styles.App}>
                        <Dashboard />
                    </div>
                </Router>
            </Worker>
        </Provider>
    );
};

export default App;
