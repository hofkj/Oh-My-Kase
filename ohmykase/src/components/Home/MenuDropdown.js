import React, { useState } from "react";
import Dropdown from "./Dropdown";

export default function MenuDropdown() {
    const menus = ["고기", "튀김", "스시", "장어", "가이세키"];
    const [selectedMenu, setSelectedMenu] = useState("");

    return (
        <Dropdown 
            title="메뉴" 
            options={menus} 
            selected={selectedMenu} 
            setSelected={setSelectedMenu} 
        />
    );
}
