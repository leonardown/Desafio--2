import {useState, useEffect} from 'react'
import Button from '../../components/Button';
import './Contact.css';
import {API_URL} from '../../App';

function Contact() {
  const [inputName, setInputName] = useState('');
  const [inputMerchant, setInputMerchant] = useState('');
  const [inputSuggestion, setInputSuggestion] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [dataSent, setDataSent] = useState(false);

  useEffect(() => {
    if (inputName && inputMerchant && inputSuggestion) {
      setIsFormValid(true);
    }
  }, [inputName, inputMerchant, inputSuggestion]);

  const sendSuggestion = async () => {
    const body = {
      name: inputName,
      storeName: inputMerchant,
      suggestion: inputSuggestion
    }

    if (body) {
      await fetch(`${API_URL}/sugestoes`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST', 
        body: JSON.stringify(body)
      })
        .then(_ => {
          setDataSent(true);
        })
        .catch(_ => {
          setDataSent(false);
          setIsFormValid(false);
        })
    }
  }

  return (
    <div className="contact">
      <h2>Entre em contato</h2>
      <form>
        {dataSent &&
          <p>Sugestão enviada com sucesso!</p>
        }
        <div className="row">
          <label htmlFor="name">Nome</label>
          <input 
            id="name" 
            onChange={event => setInputName(event.target.value)} 
            type="text"
            value={inputName} 
          />
        </div>
        <div className="row">
          <label htmlFor="merchant">Mercado</label>
          <input 
            id="merchant" 
            onChange={event => setInputMerchant(event.target.value)} 
            type="text"
            value={inputMerchant} 
          />
        </div>
        <div className="row">
          <label htmlFor="product">Detalhes sobre o produto</label>
          <textarea 
            id="product" 
            onChange={event => setInputSuggestion(event.target.value)} 
            type="text"
            value={inputSuggestion} 
          />
        </div>
        <div className="row">
          <Button
            disabled={!isFormValid}
            onClick={sendSuggestion}
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;