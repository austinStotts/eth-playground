
import ConnectButton from "./ConnectButton"
import Layout from "./Layout";

export default function GridTest() {

    return (
        <div className="grid-wrapper-main">
            <div className="col-a">a</div>
            <div className="col-b"></div>
            <div className="col-c">c</div>
            <div className="col-d"><Layout><ConnectButton /></Layout></div>
        </div>
    )
}