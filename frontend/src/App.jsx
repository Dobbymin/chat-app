import { useEffect } from 'react';
import './App.css';
// import socket from './server';
import askUserName from './components/askUserName';
import inputField from './components/inputField/inputField';

function App() {
    useEffect(() => {
        askUserName();
    }, []);

    return (
        <div>
            <div className="App">
                <inputField />
            </div>
        </div>
    );
}

export default App;
