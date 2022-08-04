import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Form, Input, Button  } from 'reactstrap';
import { postUserVote } from '../redux/actions';
import { partidos } from './partidos';
import { schools } from './schools';

export default function VoteForm(){

    const dispatch = useDispatch()
    const history = useHistory()

    const [ form, setForm ] = useState({
        age: '',
        sex: '',
        vote: '',
        school: ''
    })

    useEffect( () => {
       return resetAll();
    }, [])

    function handleSelect(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleAge(e){
        setForm({
            ...form,
            age: e.target.value
        })
    }

    function resetAll() {
		(document.getElementById("selectList")).value = 'default';
		(document.getElementById("selectGender")).value = 'default';
        setForm({
            age: '',
            sex: '',
            vote: '',
            school: ''
        });
	}

    function handleSubmit(e){
        e.preventDefault()
      try{  
        console.log({form})
        if( form.age !== 0 && form.sex && form.vote && form.school ){
            form.age = Number(form.age)
            dispatch(postUserVote(form));
            history.push('/gracias')
        } else{
            alert('Debes llenar todos los campos solicitados.')
        }} catch(e){
            console.log(e)
        }
    }
    return(
        <div>
            <div className="container">
            <Form onSubmit={(e) => handleSubmit(e)}>
                <div className="grid text-center" style={{justifyContent: 'center'}}>
                <div className="g-col-3" style={{paddingTop: '1em', width: '15em'}}>
                <label className="sr-only" htmlFor="inlineFormInputName">Ya votaste?</label><Input type="checkbox" />
                    <Input type='number'placeholder='Tu edad' min='16' onChange={(e) => handleAge(e)} value={form.age}/>
                 </div>
                 <div className="g-col-3" style={{paddingTop: '1em', width: '15em'}}>
                <Input type='select' name='sex' onChange={(e) => handleSelect(e)} id='selectGender'>
                    <option value="default">Género</option>
                    {
                        ['Femenino', 'Masculino', 'Trans', 'No Binarie', 'Prefiero no decir', 'Otro']
                        .map( ( g, i) => (
                            <option key={i} value={g}>{g}</option>
                            ))
                        }
                </Input>
                </div>
                <div className="g-col-3" style={{paddingTop: '1em', width: '15em'}}>
                <Input type='select' name='vote' onChange={(e) => handleSelect(e)} id='selectList'>
                    <option value="default">Cuál lista votaste?</option>
                    {
                        partidos.map( (l, i) => {
                   return (<img src={l.img} alt="Frente Cívico" />)
                })
                    }
                </Input>
                </div>
                <div className="g-col-3" style={{paddingTop: '1em', width: '15em'}}>
                <Input type='select'>
                <option value="default" name='school'>En cuál escuela?</option>
                    {
                        schools.map( (l, i) => {
                   return (<option value={l} key={i}>{l}</option>)
                })
                    }
                </Input>
                </div>
                
                <div className="g-col-3" style={{paddingTop: '1em', width: '15em'}}>
                <h6 style={{fontSize: '0.8em'}}>
                Esta encuesta es totalmente anónima y nos sirve para mantener un conteo fiel y transparente de estas elecciones.
                    </h6> 
            <Button type="submit" className="btn btn-primary mb-2" >Enviar</Button>
            </div>
            </div>
            </Form>
            </div>
        </div>
    )
}
