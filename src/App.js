import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Layout from './Layout'
import Home from './pages/Home'

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}></Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;