import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { plusOne, plusTen, reset, minusOne, minusTen } from "../../store/MainPageSlice";


const MainPage = () => {
    const mainTitle = useSelector(state => state.mainReducer.mainTitle)
    const dispatch = useDispatch()

    // const [input, setInput] = useState()

    // const changeTitle = () => {
    //     dispatch(mainInfo())
    // }
    // const changeTitleWithParams = () => {
    //     dispatch(withParams(input))
    // }

    // const deleteTitleWirhParams = () => {
    //     setInput('');
    //     dispatch(deleteWithParams())
    // }
    const sumOne = () => {
        dispatch(plusOne())
    }
    const sumTen = () => {
        dispatch(plusTen())
    }
    const toZero = () => {
        dispatch(reset())
    }
    const subtractOne = () => {
        dispatch(minusOne())
    }
    const subtractTen = () => {
        dispatch(minusTen())
    }

    return (
        <div>
            <h1>{mainTitle}</h1>
            <button onClick={sumOne}>+1</button>
            <button onClick={sumTen}>+10</button>
            <button onClick={toZero}>0</button>
            <button onClick={subtractOne}>-1</button>
            <button onClick={subtractTen}>-10</button>
            {/* <div>
                <input value={input} type="text" onChange={(e) => setInput(e.target.value)} />
                <button onClick={deleteTitleWirhParams}><span >&#10060;</span></button>
                
            </div> */}
            
        </div>
    )
}
export default MainPage