import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import { useEffect, useState } from "react";
import {web2,web3} from "../../data"

function Portfolio() {
    const [selected, setSelected] = useState("Web 2.0");
    const [data, setData] = useState([]);
    
    const list = [
        {
            id: "Web 2.0", 
            title: "Web 2.0",
        },
        {
            id: "Web 3.0", 
            title: "Web 3.0",
        }
    ]
    
    useEffect(()=>{

        switch(selected){
            case "Web 2.0":
                setData(web2);
                break;
            case "Web 3.0":
                setData(web3);
                break;
        }

    },[selected])

    const imageClick = (redirect) => {
        window.open(redirect, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="portfolios" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                    key={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(d=>(
                    <div className="item" key={d.id}>
                        <img src={d.img} alt="" onClick={() => imageClick(d.redirect)} />
                        <h3>{d.title}</h3>
                    </div>       
                ))}
            </div>
        </div>
    )
}

export default Portfolio
