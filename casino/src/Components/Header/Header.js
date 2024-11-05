import "./header.scss"

function Header() {
    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className=" d-flex justify-content-between">
                        <div className="value">
                            <button aria-readonly={"true"}>100</button>
                        </div>
                        <div className="cash">
                            <button>cash in</button>
                            <button>cash out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;