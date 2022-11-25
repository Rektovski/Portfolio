import {AiOutlineArrowDown as ArrowDownIcon, AiOutlineArrowUp as ArrowUpIcon} from "react-icons/ai";
import {useState} from "react";
import {defaultArrowArray} from "../helperJavascript Files/arrowPosition";
import "./../styles/arrowsStyle.css";

export default function Arrows() {
    const [category, setCategory] = useState(defaultArrowArray[0]);
    const [categoryId, setCategoryId] = useState(0);

    const changeArrayLevelDown = (id) => {
        if (id >= 0 && id <= 1) {
            setCategory(defaultArrowArray[id + 1]);
            setCategoryId(prevState => prevState + 1);
        }
    }

    const changeArrayLevelUp = (id) => {
        if (id >= 1 && id <= 2) {
            setCategory(defaultArrowArray[id - 1]);
            setCategoryId(prevState => prevState - 1);
        }
    }

    return (
        <>
            <a href={`#${category}`} onClick={() => {
                changeArrayLevelUp(categoryId)
            }}>
                <button className={'ArrowUp'}>
                    <ArrowUpIcon size={40}/>
                </button>
            </a>

            <a href={`#${category}`} onClick={() => {
                changeArrayLevelDown(categoryId)
            }}>
                <button className={'ArrowDown'}>
                    <ArrowDownIcon size={40}/>
                </button>
            </a>
        </>
    )
}