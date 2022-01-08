import { FormEvent, useEffect, useState, useRef } from "react";
import Head from 'next/head';

import { refine } from "../../utils/cw/refine";
import { findActsContainingBlock, findApartmentInBlock } from "../../utils/cw/find";

import { LilInput } from "../../components/LilInput";

import styles from './styles.module.scss';
import { Input } from "../../components/Input";

export default function CWEaser() {
  const [cwText, setCWText] = useState(``);
  const [hasText, setHasText] = useState(false);
  const [bloco, setBloco] = useState('');
  const [apto, setApto] = useState('');
  const [foundActs, setFoundActs] = useState(['']);

  const aptRef = useRef<HTMLInputElement>();
  const blocoRef = useRef<HTMLInputElement>();
  const textRef = useRef<HTMLTextAreaElement>();


  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!bloco) {
      if (blocoRef.current)  
        blocoRef.current.focus();

    } else if (!apto) {
      if (aptRef.current)
        aptRef.current.focus();
    }


    const refinedCWText = refine(cwText); // REFINE AND REFINEDCWTEXT SHOULDN'T BE IN THIS FILE, GOTTA SEPARATE THEM LATER
    // the above comment is from long ago, as of now (01/04/22) I can't see why I should do what it says
    const actsContainingBlock = findActsContainingBlock(Number(bloco), refinedCWText); 
    const actsRegardingApartment = findApartmentInBlock(Number(apto), actsContainingBlock);
    // I'm honestly not sure if bloco and apto should be converted to numbers here or inside their functions
    // I think this is arbitrary, so I'm gonna keep the convertions here, along with these comments so that I can think about this later
    setFoundActs(actsRegardingApartment);
  }

  // function handleKeyDown(e: KeyboardEvent) {
  //   e.preventDefault();
  //   console.log(e.key);
  // }
  // yeah I actually did what I wanted to do here on handlesubmit, 
  // though I think it's still worth it checking out if doing this way is better

  function handleCWText(e: FormEvent) {
    e.preventDefault();
    setHasText(true);
  }

  useEffect(() => {
    if(textRef.current)
      textRef.current.focus();
  }, [])

  useEffect(() => {
    apto.length > 3 ? setApto(oldApto => oldApto.slice(0, 3)) : null;
  }, [apto]);

  useEffect(() => {
    bloco.length > 2 ? setBloco(oldBloco => oldBloco.slice(0, 2)) : null;
  }, [bloco]);

  return (
    <>
      <Head>
        <title>Carlos Wilson</title>
      </Head>

      <div className={styles.container}>
          {hasText ? ( 
            <form
              onSubmit={handleSubmit} 
              className={styles.formContainer}
            >
              <div>
                <LilInput 
                  name="apto" 
                  label="Aptº" 
                  type="number"
                  value={apto}
                  onWheel={event => event.currentTarget.blur()}
                  maxLength={3}
                  onChange={event => setApto(event.target.value)}
                  ref={aptRef}
                  autoFocus={true}
                />
                <LilInput 
                  name="bloco" 
                  label="Bloco" 
                  type="number"
                  value={bloco}
                  onWheel={event => event.currentTarget.blur()}
                  maxLength={3}
                  onChange={event => setBloco(event.target.value)}
                  ref={blocoRef}
                />
              </div>

              <button type="submit">Procurar</button>
            </form>
          ) : (
            <form
              onSubmit={handleCWText} 
              className={styles.formContainer}
            >
              <div>
                <Input 
                  name="cwText"
                  label="Insira aqui o texto do Carlos Wilson"
                  value={cwText}
                  onChange={event => setCWText(event.target.value)}
                  ref={textRef}
                />
              </div>
              <button disabled={!cwText} type="submit">Confirmar</button>
            </form>
          )
        }

        {foundActs.map(act => (
          <p key={act.slice(0, 9)}>
            {act}
          </p>
        ))}
      </div>
    </>
  );
}