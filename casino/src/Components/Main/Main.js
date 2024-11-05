import data from "./maindata"
import Card from "./Card/Card";

function Main() {
    return (
        <section className="main">
            <div className="container-fluid">
                <h2>Play2winGames</h2>
                <div className="row">
                    {data.map((item, i) => {
                        return (
                            <Card key={i} {...item} />
                        )
                    })}
                </div>
            </div>
        </section>

    )
}

export default Main;