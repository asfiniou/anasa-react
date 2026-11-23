function Space() {
  return (
    <section className="space">
      <div className="wrap">
        <img
          src="img/anasa-xoros.jpg"
          alt="Ήσυχος χώρος pilates με στρώματα και φως από το παράθυρο"
          width="700"
          height="610"
          loading="lazy"
        />
        <div className="space-text">
          <h2>Ένας χώρος για να ανασάνεις</h2>
          <p>
            Στο κέντρο της Καβάλας, ένα φωτεινό στούντιο με φυσικό φως, σύγχρονο
            εξοπλισμό και μικρά τμήματα έως 6 ατόμων. Εδώ κάθε μάθημα
            προσαρμόζεται σε σένα.
          </p>
          <a className="btn" href="#programma">
            Δες το πρόγραμμα
          </a>
        </div>
      </div>
    </section>
  );
}
export default Space;
