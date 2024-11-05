import "./style.scss"
import objects from "./data";
function Footer(){
    return (<footer className="d-flex">
        {objects.map((el, i) => {
            return (<div key={i} className="card" style={{backgroundColor: (i % 2 === 0 ? "#ff0041" : "#1ec7de")}}>
                <div dangerouslySetInnerHTML={{__html: el.svg}}></div>
            </div>)
        })}
        </footer>);
}
export default Footer