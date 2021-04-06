import classes from './Button.module.css';

function Button({ children, clicked, btnType, disabled}) {
  return (
    <button
      className={[classes.Button, classes[btnType]].join(' ')}
      disabled={disabled}
      onClick={clicked}>{children}</button>
  )
}

export default Button;
