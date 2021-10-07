import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Kayit from "./components/Kayit/Kayit";
import KullaniciTable from "./components/KullaniciTable/KullaniciTable";
import { Divider } from 'antd';


function App() {
    return (
        <div className="App">
            <div>
                <Kayit/>
            </div>
            <Divider />
            <div>
                <KullaniciTable/>
            </div>
        </div>
    );
}

export default App;
