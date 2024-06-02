import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

function Formulario() {

  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const [formValues, setFormValues] = useState({
    link: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://api-ssl.bitly.com/v4/shorten', {

      method: 'POST',

      headers: {
        'Authorization': 'Bearer 2e10b15ffccd620dc1e92a7a0251cb12b9f95672',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({ "long_url": formValues.link }),
    })
      
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao realizar a requisição');
      }
      return response.json();
    })
    .then(data => {
      console.log('Resposta recebida:', data)
      setData(data);
      navigate('/success', { state: { data } });
      // dados recebidos
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formNome">
        <InputGroup>
            <Form.Control
              placeholder='Insira aqui sua URL :)'
              type="text"
              name="link"
              value={formValues.nome}
              onChange={handleChange}
              className='bg-dark text-white'
            />
            <Button variant="primary" type="submit">Enviar</Button>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}

export default Formulario;
