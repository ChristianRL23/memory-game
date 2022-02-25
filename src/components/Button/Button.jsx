import './Button.scss';

const Button = ({ textContent, color, onClick, selected }) => {
  if (selected === undefined) {
    return (
      <button onClick={onClick} className={`button--${color}`}>
        {textContent}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`button--${selected ? 'selected' : 'idle'}`}
    >
      {textContent}
    </button>
  );
};

export default Button;
