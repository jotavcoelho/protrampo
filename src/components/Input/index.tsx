import React, { TextareaHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
}

export const Input = React.forwardRef<HTMLTextAreaElement, InputProps>(
  ({ name, label, placeholder, ...rest }: InputProps, ref) => (
    <div className={styles.container}>
      {/* {!!label &&  */}
        <label 
          htmlFor={name} 
          className={styles.label}>
            {label}
        </label>
      {/* } */}

      <textarea 
        className={styles.input} 
        name={name} 
        id={name}
        ref={ref}
        {...rest}
      >
          {placeholder}
      </textarea>
    </div>
  )
)

// export function Input({ name, label, placeholder, ...rest }: InputProps) {
//   return (
//     <div className={styles.container}>
//       {/* {!!label &&  */}
//         <label 
//           htmlFor={name} 
//           className={styles.label}>
//             {label}
//         </label>
//       {/* } */}

//       <textarea 
//         className={styles.input} 
//         name={name} 
//         id={name}
//         {...rest}
//       >
//           {placeholder}
//       </textarea>
//     </div>
//   );
// }
