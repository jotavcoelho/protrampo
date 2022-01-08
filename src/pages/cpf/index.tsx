import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import Head from 'next/head';

import { LilInput } from "../../components/LilInput";

import styles from './styles.module.scss';
import { calcDV } from "../../utils/cpf/calcDV";
import { cpfWOutDV } from "../../utils/cpf/mask";

export default function CWEaser() {
  const [lackingCpf, setLackingCpf] = useState('');
  const [fullCpf, setFullCpf] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (lackingCpf.length < 9)
      alert('Os 9 dígitos devem estar presentes')
    else
      setFullCpf(calcDV(lackingCpf));
  }

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setLackingCpf(e.target.value);
    setFullCpf('')
  }, [])

  const handleKeyUp = useCallback((e: FormEvent<HTMLInputElement>) => {
    setLackingCpf(cpfWOutDV(e).currentTarget.value);
  }, [])

  return (
    <>
      <Head>
        <title>DV de CPF</title>
      </Head>

      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <LilInput 
            name='incompleteCPF' 
            label="CPF sem DV" 
            onChange={e => handleChange(e)}
            onKeyUp={e => handleKeyUp(e)}
            value={lackingCpf}
            maxLength={9}
          />
          <button type="submit">Calcular</button>
        </form>
        {fullCpf && 
          <div className={styles.fullCPFContainer}>
            <div>
              <span>CPF completo:</span>
              <h3>{fullCpf}</h3>
            </div>
          </div>
        }
      </div>
    </>
  );
}