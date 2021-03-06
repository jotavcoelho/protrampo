import { useState, useRef, FormEvent, useEffect } from 'react';
import Head from 'next/head';
import { FaPlus, FaMinus } from 'react-icons/fa'

import styles from './styles.module.scss';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { refineGuiaValues, putCurrency } from '../../utils/guia/refineGuiaValues';
import { calculateGuias } from '../../utils/guia/handleGuias';

interface CurrencyGuiaValues {
  emol: string;
  tsnr: string;
  ferm: string;
  funseg: string;
  ferc: string;
  iss: string;
  total: string;
}

export default function Cgc() {
  const [guia1, setGuia1] = useState('');
  const [guia2, setGuia2] = useState('');

  const [operation, setOperation] = useState('Subtrair');

  const [result, setResult] = useState<CurrencyGuiaValues>({
    emol: '',
    tsnr: '',
    ferm: '',
    funseg: '',
    ferc: '',
    iss: '',
    total: '',
  });

  const [theresResult, setTheresResult] = useState(false);

  const tableRef = useRef(null);

  const scrollToTable = () => {
    tableRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    scrollToTable();
  }, [result, theresResult])

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    
    if((guia1 === '') || (guia2 === '')) {
      alert('Ambos os campos devem estar preenchidos com suas guias!')
      return;
    }

    // there's more validation to do, but it's not worth my time YET

    const { 
      guiaType: guia1Type, 
      guiaValues: guia1Values
    } = refineGuiaValues(guia1);

    const { 
      guiaType: guia2Type, 
      guiaValues: guia2Values
    } = refineGuiaValues(guia2);

    const resultingGuia = calculateGuias(operation, guia1Values, guia2Values);

    const resultingCurrencyGuia = putCurrency(resultingGuia);

    setResult(resultingCurrencyGuia);

    setTheresResult(true);
  }

  return (
    <>
      <Head>
        <title>Calculador de Guias Complementares</title>
      </Head>
  
      <div className={styles.container}>
        <form
          onSubmit={handleSubmit} 
          className={styles.formContainer}
        >
          <div className={styles.actualForm}>
            <Input 
              name="guia1" 
              label="Guia 1" 
              value={guia1}
              onChange={event => setGuia1(event.target.value)}
              autoFocus
            />
            {(operation == 'Subtrair') ? <FaMinus /> : <FaPlus />}
            <Input 
              name="guia2" 
              label="Guia 2" 
              value={guia2}
              onChange={event => setGuia2(event.target.value)}
            />
          </div>

          <Button 
            type="submit"
            options={['Somar', 'Subtrair']}
            currentOption={operation}
            setOption={setOperation}
          >
            {operation}
          </Button>
        </form>

        {theresResult && 
          <div className={styles.tableContainer} ref={tableRef}>
            <table>
              <thead>
                <tr>
                  {/* <th>Guia Resultante</th> */}
                  <th>Emolumentos</th>
                  <th>TSNR</th>
                  <th>FERM</th>
                  <th>FUNSEG</th>
                  <th>FERC</th>
                  <th>ISS</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <td></td> */}
                  <td>
                    <div>{result.emol}</div>
                  </td>
                  <td>
                    <div>{result.tsnr}</div>
                  </td>
                  <td>
                    <div>{result.ferm}</div>
                  </td>
                  <td>
                    <div>{result.funseg}</div>
                  </td>
                  <td>
                    <div>{result.ferc}</div>
                  </td>
                  <td>
                    <div>{result.iss}</div>
                  </td>
                  <td>
                    <div>{result.total}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      </div>
    </>
  );
}