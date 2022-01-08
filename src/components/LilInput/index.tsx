import React, { InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface LilInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export const LilInput = React.forwardRef<HTMLInputElement, LilInputProps>(
  ({ name, label, placeholder, maxLength, ...rest }: LilInputProps, ref) => (
    <div className={styles.container}>
      {/* {!!label &&  */}
        <label 
          htmlFor={name} 
          className={styles.label}
        >
          {label}
        </label>
      {/* } */}

      <input 
        className={styles.input} 
        name={name} 
        id={name}
        maxLength={maxLength}
        ref={ref}
        {...rest}
      >
        {placeholder}
      </input>
    </div>
  ));

// export function LilInput({ name, label, placeholder, maxLength, ...rest }: LilInputProps) {
//   return (
//     <div className={styles.container}>
//       {/* {!!label &&  */}
//         <label 
//           htmlFor={name} 
//           className={styles.label}
//         >
//           {label}
//         </label>
//       {/* } */}

//       <input 
//         className={styles.input} 
//         name={name} 
//         id={name}
//         maxLength={maxLength}
//         {...rest}
//       >
//         {placeholder}
//       </input>
//     </div>
//   );
// }