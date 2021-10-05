import React, {useState} from 'react';
import {Button, Input} from "antd";
import {ToDoList} from "./ToDOList";




export const FormToDo = () => {
    const [list, setList] = useState<Array<ItemType> | []>([])
    const [value, setValue] = useState('')


    const Add = () => {
       value && setList(prev=>[...prev,{
           isChecked:false,
           text:value,
           id:new Date().valueOf().toString()
       }])
    };

    return (
        <div className='main'>
            <div className='myForm'>
                <Input placeholder="Add new" style={{width: '40%'}} allowClear
                       onChange={(e) => setValue(e.target.value)}/>
                <Button type="default" onClick={Add}>Add</Button>
            </div>

            <ToDoList list={list} setList={setList}/>
        </div>
    );
};

export interface ItemType {
    text: string
    id: string
    isChecked:boolean

}


