import ClassCard from "./ClassCard";

const classes = [
  {
    image: "/img/pilates-mat.jpg",
    alt: "Άσκηση pilates σε στρώμα με μπάλα",
    title: "Pilates Mat",
    text: "Ασκήσεις στο στρωματάκι για δύναμη, ευλυγισία και σωστή στάση σώματος.",
  },
  {
    image: "/img/pilates-reformer.jpg",
    alt: "Μηχανήματα pilates reformer σε φωτεινό studio",
    title: "Pilates Reformer",
    text: "Με το μηχάνημα reformer, για πιο στοχευμένη και ελεγχόμενη άσκηση.",
  },
  {
    image: "/img/yoga-mathima.jpg",
    alt: "Γυναίκα σε στάση διαλογισμού σε στρώμα yoga",
    title: "Yoga",
    text: "Ήπια κίνηση και αναπνοή για χαλάρωση και ισορροπία.",
  },
  {
    image: "/img/pilates-egkyes.jpg",
    alt: "Έγκυος γυναίκα κάνει διάταση pilates με μπάλα",
    title: "Pilates εγκυμοσύνης",
    text: "Ασφαλής άσκηση για κάθε στάδιο της εγκυμοσύνης, με προσοχή στις ανάγκες σου.",
  },
];

function Classes() {
  return (
    <section className="classes" id="mathimata">
      <div className="wrap">
        <h2 className="section-title">Τα μαθήματά μας</h2>
        <div className="cards">
          {classes.map((item) => (
            <ClassCard
              key={item.title}
              image={item.image}
              alt={item.alt}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Classes;
