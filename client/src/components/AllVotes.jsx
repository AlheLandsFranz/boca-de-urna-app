import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Input, Button  } from 'reactstrap';
import { getAllVotes } from '../redux/actions/actions';

export default function AllVotes(){

    const dispatch = useDispatch()

    const allVotes = useSelector(state => state.allVotes)

    useEffect(() => {
        dispatch(getAllVotes())
    }, [])
    return(
        <>
        {
            allVotes.map( (user, i) => {
                return(
                    <div key={i}>
                        <h5>{user.vote}</h5>
                        <p>{user.age}</p>
                        <p>{user.sex}</p>
                        <p>{user.school}</p>
                    </div>
                )
            })
        }
        </>
    )
}