import React from "react";
import ReactDOM from "react-dom/client";
import { App as AppBase } from './App';
import TargetCursor from './components/ui/TargetCursor';
import "./index.css";

export const App = () => {
    return (
        <>
            <TargetCursor
                targetSelector="button, a, .cursor-target"
                spinDuration={4}
                hideDefaultCursor
                parallaxOn
                hoverDuration={2}
            />
            <AppBase />
        </>
    );
};
ReactDOM.createRoot(document.getElementById("root")!).render(

    <App />

);