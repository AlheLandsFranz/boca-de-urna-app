import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, Input, Button  } from 'reactstrap';
import { postUserVote } from '../redux/actions/actions';

export default function VoteForm(){

    const dispatch = useDispatch()

    const [ form, setForm ] = useState({
        edad: 0,
        genero: '',
        lista: '',
        escuela: ''
    })

    function handleSelect(e){
        e.preventDefault()

    }

    function handleSubmit(e){
        e.preventDefault()
        if( form.edad !== 0 && form.genero && form.lista && form.escuela ){
            dispatch(postUserVote(form))
            alert('Tu respuesta fue guardada con éxito!')
            setForm({
                edad: 0,
                genero: '',
                lista: '',
                escuela: ''
            })
        }
    }
    return(
        <div>
            <div className="container">
            <Form>
                <div className="grid text-center" style={{justifyContent: 'center'}}>
                <div className="g-col-3" style={{paddingTop: '1em', width: '15em'}}>
                <label className="sr-only" for="inlineFormInputName">Ya votaste?</label><Input type="checkbox" />
                    <Input type='number'placeholder='Tu edad' min='16' />
                 </div>
                 <div className="g-col-3" style={{paddingTop: '1em', width: '15em'}}>
                <Input type='select' onClick={(e) => handleSelect(e)}>
                    <option value="default">Género</option>
                    {
                        ['Femenino', 'Masculino', 'No Binarie', 'Prefiero no decir', 'Otro']
                        .map( ( g, i) => (
                            <option key={i} value={g}>{g}</option>
                            ))
                        }
                </Input>
                </div>
                <div className="g-col-3" style={{paddingTop: '1em', width: '15em'}}>
                <Input type='select'>
                    <option value="default">Cuál lista votaste?</option>
                    {
                        ['Frente Renovador y Progresista', 'Partido Unido de los Trabajadores', 'Frente Cívico',
                    'Juntos por el Cambio', 'Partido Obrero', 'Frente de Izquierda y Trabajadores', 'Partido Unidos',
                'Partido Encuentro Popular(Libertarios)'].map( l => {
                   return (<option value={l}>{l}</option>)
                })
                    }
                </Input>
                </div>
                <div className="g-col-3" style={{paddingTop: '1em', width: '15em'}}>
                <Input type='text' placeholder='En cuál escuela?'/>
                </div>
                <div className="g-col-3" style={{paddingTop: '1em', width: '15em'}}>
                <h6 style={{fontSize: '0.8em'}}>
                Esta encuesta es totalmente anónima y nos sirve para mantener un conteo fiel y transparente de estas elecciones.
                    </h6> 
            <Button type="submit" class="btn btn-primary mb-2" onSubmit={(e) => handleSubmit(e)}>Enviar</Button>
            </div>
            </div>
            </Form>
            </div>
        </div>
    )
}
