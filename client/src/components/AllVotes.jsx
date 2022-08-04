import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Input, Button  } from 'reactstrap';
import { getAllVotes } from '../redux/actions';
import style from './AllVotes.module.css'
import * as XLSX from 'xlsx/xlsx.mjs'

export default function AllVotes(){

    const dispatch = useDispatch()

    const allVotes = useSelector( state => state.allVotes)

    function ExportData(){
    let data = allVotes
    let ws = XLSX.utils.json_to_sheet(data);
    let wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "People");
    XLSX.writeFile(wb, "sheetjs.xlsx");
}

    useEffect(() => {
        dispatch(getAllVotes())
    }, [])
    return(
        <div className={style.allVotes}>
            <Button onClick={() => ExportData()}>
                Descargar Data
             </Button>
        {
           allVotes.length > 0 ? allVotes.map( (user, i) => {
                return(
                    <div key={i} className={style.vote}>
                        <p>Partido: {user.vote}, </p>
                        <p>Edad: {user.age}, </p>
                        <p>Género: {user.sex}, </p>
                        <p>Escuela: {user.school}. </p>
                    </div>
                )
            }) : <h1>No hay votos todavía</h1>
        }
        </div>
    )
}