import React from "react";
import { Box, Tabs, Tab } from "@mui/material"

const TabsComponent = ({categoriesSelect, value, setValue}) => {

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box>
            <Tabs
             centered
             value={value}
             onChange={handleChange}
             >
                {categoriesSelect.map((tab) =>
                    <Tab
                        key={tab['value']}
                        value={tab['value']}
                        label={tab['label']}
                    />
                )}
            </Tabs>
        </Box>
    )
}

export default TabsComponent;