import './Button.scss';

const Button = ({ textContent, color, onClick, selected, menu }) => {
  if (selected === undefined) {
    return (
      <button
        onClick={onClick}
        className={`button--${color} ${menu ? 'button--menu' : ''}`}
      >
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
