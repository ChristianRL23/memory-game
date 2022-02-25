import './Button.scss';

const Button = ({ textContent, color }) => {
  return <button className={`button--${color}`}>{textContent}</button>;
};

export default Button;
