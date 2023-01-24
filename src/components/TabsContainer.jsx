import React, { useState } from "react";
import TabButton from "./TabButton";
import TabContent from "./TabContent";

const TabsContainer = () => {
    const [state, setState] = useState({
        selectedTab: 1
    });
    const tabOnClick = (e, value) => {
        setState({
            selectedTab: value
        });
    };

    const tabs = [1, 2, 3, 4]; // Array de tabs dinamico

    return (
        <div>
            {tabs.map((val, index) => (
                <TabButton
                    key={index}
                    onClick={e => tabOnClick(e, val)}
                    selected={state.selectedTab === val}
                >
                    Tab {val}
                </TabButton>
            ))}
            <TabContent>Tab {state.selectedTab} content is showing here.</TabContent>
        </div>
    );
};
export default TabsContainer;