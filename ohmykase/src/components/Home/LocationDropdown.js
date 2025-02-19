import React, { useState } from "react";
import Dropdown from "./Dropdown";

export default function LocationDropdown() {
    const locations = ["도쿄", "오사카", "나고야", "교토", "후쿠오카", "홋카이도", "오키나와"];
    const [selectedLocation, setSelectedLocation] = useState("");

    return (
        <Dropdown 
            title="지역" 
            options={locations} 
            selected={selectedLocation} 
            setSelected={setSelectedLocation} 
        />
    );
}
