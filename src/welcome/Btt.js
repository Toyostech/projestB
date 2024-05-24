import { useState } from "react";
import './Styleaa.css'
import Pros_Example from './Pros_Example';


function Btt(props) {
    const [count, setcount] = useState(0)
    function handlerclick() {
        setcount(count + 1);
    }

    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ];
    const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    );
    const menus = [
        { title: 'HOME', id: 1 },
        { title: 'MENU', id: 2 },
        { title: 'CONTACT', id: 3 },
        { title: 'ABOUT-US', id: 4 }
    ]
    const displayMenu = menus.map(menus =>
        <li key={menus.id}>
            {menus.title}
        </li>


    )
    




    return (
        <div>
            <button onClick={handlerclick}>counting the {count}values</button>
            <ul>{listItems}</ul>


            <div className="menu-box">
                <ul className="bar-menu">{displayMenu}</ul>
            </div>

            <Pros_Example title = {props.title}>hg</Pros_Example>




        </div>
    )


}
export default Btt; 
