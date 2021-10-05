import React, {useEffect} from 'react';
import {Checkbox} from "antd";
import {RiChatDeleteFill} from "react-icons/all";
import cn from 'classnames';
import {ItemType} from "./FormToDo";



export const Item:React.FC<PropsType> = ({myItem,id,deleted,isChek}) => {

    return (
        <li  className='myList' >
            <div >
                <Checkbox id={id} checked={myItem.isChecked} onClick={isChek}/>
                <span  className={cn('item',{['chec']:myItem.isChecked})}>
                           {
                               myItem.text
                           }
                        </span>
            </div>
            <button id={id} onClick={deleted}   className='del' style={{background:'none',borderStyle:"none"}} >
                <RiChatDeleteFill color='red' />
            </button>
        </li>
    );
};

interface PropsType {
    myItem:ItemType
    id:string
    deleted:(e: React.MouseEvent)=>void
    isChek:(e: React.MouseEvent)=>void

}



