function ClassCard({ image, alt, title, text }) {
  return (
    <article className="card">
      <img src={image} alt={alt} width="262" height="377" loading="lazy" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
export default ClassCard;
