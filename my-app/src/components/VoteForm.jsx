import { useState } from 'react';
import { Container, Form, Input, Button  } from 'reactstrap';

export default function VoteForm(){

    const [ form, setForm ] = useState({
        edad: 0,
        genero: '',
        lista: ''
    })

    function handleSelect(e){
        e.preventDefault()

    }

    function handleSubmit(e){
        e.preventDefault()
        if(form.edad !== 0 && form.genero && form.lista){
            alert('Tu respuesta fue guardada con éxito!')
            setForm({
                edad: 0,
                genero: '',
                lista: ''
            })
        }
    }

    return(
        <div>
            <div className="container">
            <Form>
                <div className="column">
                <div class="col">
                <label className="sr-only" for="inlineFormInputName">Ya votaste?</label><Input type="checkbox" />
                    <Input type='number'placeholder='Tu edad' min='16' />
                 </div>
                 <div class="col">
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
                <div class="col">
                <Input type='select'>
                    <option value="default">Cuál lista votaste?</option>
                </Input>
                </div>
                <div class="col">
                Esta encuesta es totalmente anónima y nos sirve para mantener un conteo fiel y transparente de estas elecciones.
            <Button type="submit" class="btn btn-primary mb-2" onSubmit={(e) => handleSubmit(e)}>Enviar</Button>
            </div>
            </div>
            </Form>
            </div>
        </div>
    )
}
