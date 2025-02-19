import React from "react";
import Dropdown from "./Dropdown";

export default function LocationDropdown({ selected, setSelected }) {
    const locations = ["도쿄", "오사카", "나고야", "교토", "후쿠오카", "홋카이도", "오키나와"];

    return (
        <Dropdown 
            title="지역" 
            options={locations} 
            selected={selected} 
            setSelected={setSelected} 
        />
    );
}
