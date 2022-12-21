import {AiOutlineArrowUp as ArrowUpIcon} from "react-icons/ai";
import {useState} from "react";
import {defaultArrowArray} from "../helperJavascript Files/arrowPosition";
import "../design/arrowsStyle.css";
import "../design/soundPlayer.css";
import SoundPlayer from "./profile/SoundPlayer";

export default function Arrows() {
    const [category, setCategory] = useState(defaultArrowArray[0]);
    const [categoryId, setCategoryId] = useState(0);

    const changeArrayLevelUp = (id) => {
        if (id >= 1 && id <= 2) {
            setCategory(defaultArrowArray[id - 1]);
            setCategoryId(prevState => prevState - 1);
        }
    }

    return (
        <>
            <div className={'soundSpace'}>
                <SoundPlayer/>
            </div>
            <a href={`#${category}`} onClick={() => {
                changeArrayLevelUp(categoryId)
            }}>
                <button className={'ArrowDown'}>
                    <ArrowUpIcon size={40}/>
                </button>
            </a>
        </>
    )
}