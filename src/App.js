import Content from "./components/content";
import Header from "./components/header";
import SideBar from "./components/sidebar";

function App() {
    return(
        <div className="container-fluid">
            <Header />
            <div className="row">
                <div className="col-3">
                    <SideBar />
                </div>
                <div className="col-9">
                    <Content />
                </div>
            </div>
        </div>
    )
}

export default App;