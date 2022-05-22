import { ButtonHTMLAttributes, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa'

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  options?: string[];
  currentOption?: string;
}

export function Button({ children, options, currentOption, ...rest }: ButtonProps) {
  const [activeDropdown, setActiveDropdown] = useState(false);
  // const [currentOption, setCurrentOption] = useState('');

  function handleActiveDropdown() {
    setActiveDropdown(!activeDropdown);
  }

  if (options) // the multi options button should actually be a div with the actual button inside it
    return (
      <div className={styles.optionsButtonContainer}>
        <button>{children}</button>
        <div 
          className={styles.arrowContainer}
          onClick={() => {handleActiveDropdown()}}
        >
          <FaAngleDown color='black'/>
        </div>
        <div className={activeDropdown ? `${styles.options} ${styles.activeSelection}` : `${styles.options}`}>
          {options.filter(option => option != currentOption).map(option => {
            if (option != currentOption)
              return (
                <div className="option" key={option}>{option}</div>
              )
          })}
        </div>
      </div>
      // <button 
      //   className={styles.standardButton}
      //   {...rest}
      // >
      //   <div className={styles.insideContainer}>
      //     <div>
      //       {children}
      //     </div>
      //     <div className={styles.arrowContainer}>
      //       <FaAngleDown />
      //     </div>
      //   </div>
      // </button>
    )
  else 
    return (
      <button 
        className={styles.standardButton}
        {...rest}
      >
        {children}
      </button>
    )
}