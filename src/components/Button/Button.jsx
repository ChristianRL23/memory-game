import './Button.scss';

const Button = ({ textContent, color, onClick }) => {
  return (
    <button onClick={onClick} className={`button--${color}`}>
      {textContent}
    </button>
  );
};

export default Button;
