import React, { useEffect } from "react";
import Home from './layout/home';
import "./App.scss";
import { AppProvider } from './contexts/context';;

// const context = React.createContext()

function App() {
    const [loading, setLoading] = React.useState(true);
    return (
        <AppProvider>
            <Home></Home>
        </AppProvider>
    );
}

export default App;
