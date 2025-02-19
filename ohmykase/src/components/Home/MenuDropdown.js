import React from "react";
import Dropdown from "./Dropdown";

export default function MenuDropdown({ selected, setSelected }) {
    const menus = ["고기", "튀김", "스시", "장어", "가이세키"];

    return (
        <Dropdown 
            title="메뉴" 
            options={menus} 
            selected={selected} 
            setSelected={setSelected} 
        />
    );
}
