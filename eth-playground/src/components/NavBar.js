
import ConnectButton from "./ConnectButton"
import Layout from "./Layout";

export default function NavBar() {

    return (
        <div className="navbar-wrapper-main">
            <div className="col-a"></div>
            <div className="col-b"></div>
            <div className="col-c"></div>
            <div className="col-d"><Layout><ConnectButton /></Layout></div>
        </div>
    )
}