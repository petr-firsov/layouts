import { useState } from "react";
import { products } from "./products";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView/CardsView";
import ListView from "./ListView/ListView";


export default function Store() {
    let [icon, setIcon] = useState('view_module');

    function switchView() {
        if (icon == 'view_module') {
            setIcon(icon = 'view_list');
        } else {
            setIcon(icon = 'view_module');
        }
    }

    function ShowProducts() {
        if (icon == 'view_module') {
            return (
                <CardsView 
                products={products}/>
            )
        } else {
            return (
                <ListView 
                items={products} />
            )
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>
            <IconSwitch 
            icon={icon}
            onSwitch={switchView} />
            <ShowProducts />
        </>
    )
}