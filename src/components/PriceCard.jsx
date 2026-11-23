function PriceCard({ title, amount, desc }) {
  return (
    <article className="price">
      <h3>{title}</h3>
      <p className="amount">
        {amount}
        <span> / μήνα</span>
      </p>
      <p className="desc">{desc}</p>
      <a className="btn" href="#epikoinonia">
        Κλείσε θέση
      </a>
    </article>
  );
}
export default PriceCard;
