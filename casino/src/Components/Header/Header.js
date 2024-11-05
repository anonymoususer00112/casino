import "./header.scss"

function Header() {
    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className=" d-flex justify-content-between align-items-center p-3 py-5">
                        <div className="value">
                            <button aria-readonly={"true"}>100,00 AMD</button>
                        </div>
                        <div className="cash">
                            <button className="mx-2 in">Пополнить</button>
                            <button className="mx-2 out">Вывести</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;