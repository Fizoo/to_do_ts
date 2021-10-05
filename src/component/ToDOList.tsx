import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {Item} from "./Item";
import {ItemType} from "./FormToDo";
import {Button, Dropdown, Menu} from "antd";


export const ToDoList: React.FC<PropsType> = ({list,setList}) => {

    const [isTrue,setTrue]=useState(false)

    const handleMenuClick = (e:MenuClickEventHandler) => {
       switch (e.key) {
           case "1":
               setList([...list.sort((a, b) => a.text<b.text?-1:a.text > b.text?1:0)])

               break
           case '2':
               setList([...list.sort((a, b) => a.text<b.text?1:a.text > b.text?-1:0)])
               break
           case'3':
               setList([...list.sort((a, b) => a.id<b.id?-1:a.id > b.id?1:0)])
               break
       }
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">NameUp</Menu.Item>
            <Menu.Item key="2">NameDown</Menu.Item>
            <Menu.Item key="3">Time</Menu.Item>
        </Menu>)

    const deleted = (e:React.MouseEvent) => {
        setList([...list.filter(el=>el.id!==e.currentTarget.id)])
    }

    const deleteAll = () => {
        setList([])
    }

    const isChek=(e:React.MouseEvent)=>{
      const objIndex = list.findIndex((obj => obj.id===e.currentTarget.id));
        let x=list[objIndex].isChecked;
        setTrue(prev=>!prev)
        list[objIndex].isChecked=!x;
    }

    return (
        <ul>
            <div className='filterMenu'>
                <h3>Count : {list.length}</h3>
                <Button onClick={deleteAll} type='default'>Delete all</Button>
                <Dropdown.Button overlay={menu}>Filter</Dropdown.Button>

            </div>
            {
                list.map((a, i) =><Item deleted={deleted} id={a.id}  key={i} myItem={a} isChek={isChek} />)
            }
        </ul>
    );
};

interface PropsType {
    list: Array<ItemType>
    setList:Dispatch<SetStateAction<Array<ItemType>>>

}

interface MenuClickEventHandler {
    key: string
}


