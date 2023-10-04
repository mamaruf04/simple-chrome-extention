import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function Popup() {

    const [headers, setHeaders] = useState([]);

    const handleClick = () => {
        chrome.runtime.sendMessage({ action: 'get-user-data' }, (response) => {
            setHeaders(response);
            console.log(response);
        });
    }

    return (
        <div>
            <button onClick={handleClick}> Get headers</button>
            <ul>
                {
                    headers?.map((hdr, index) => <li key={index}>{hdr}</li>)
                }
            </ul>
        </div>
    )
}

createRoot(document.getElementById("react-target")).render(<Popup />)