import './FooterItem.scss';

const FooterItem = ({ description, value }) => {
  return (
    <div className="footer-item">
      <h6 className="footer-item__description">{description}</h6>
      <h5 className="footer-item__value">{value}</h5>
    </div>
  );
};

export default FooterItem;
