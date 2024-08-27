import React, { useState } from "react";
import { Container } from "@mui/material";
import TabsComponent from "../../components/Tabs";
import SwiperComponent from "../../components/Swiper";
import CreativeSwiper from "../../components/CreatuveSwiper";
import SuperCubeSwiper from "../../components/SuperCubeSwiper";
import GroupSwiper from "../../components/GroupSwiper";
import MouseSwiper from "../../components/MouseSwiper";


const VALUES = {
    one: 'one',
    two: 'two',
    three: 'three',
    four: 'four',
    five: 'five'
}

const GetCategories = ({ value }) => {
    switch (value) {
        case VALUES.one: {
            return <SwiperComponent/>
        }
        case VALUES.two: {
            return <CreativeSwiper/>
        }
        case VALUES.three: {
            return <SuperCubeSwiper/>
        }
        case VALUES.four: {
            return <GroupSwiper/>
        }
        case VALUES.five: {
            return <MouseSwiper/>
        }
        default: return <></>
    }
}

const MainPage = () => {

    const categoriesSelect = [
        {value: VALUES.one, label: 'Item one'},
        {value: VALUES.two, label: 'Item two'},
        {value: VALUES.three, label: 'Item three'},
        {value: VALUES.four, label: 'Item four'},
        {value: VALUES.five, label: 'Item five'},
    ]

    const [value, setValue] = useState(categoriesSelect?.[0].value)

    return (
        <Container>
            <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue}/>
            <GetCategories value={value}/>
            {/* <SwiperComponent/> */}
        </Container>
    )
}

export default MainPage;