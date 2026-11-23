import PriceCard from "./PriceCard";
const prices = [
  {
    title: "4 μαθήματα",
    amount: "40€",
    desc: "Ένα μάθημα την εβδομάδα, ιδανικό για να ξεκινήσεις.",
  },
  {
    title: "8 μαθήματα",
    amount: "70€",
    desc: "Δύο μαθήματα την εβδομάδα για σταθερή πρόοδο.",
  },
  {
    title: "Απεριόριστα",
    amount: "90€",
    desc: "Όσα μαθήματα θέλεις μέσα στον μήνα.",
  },
];

function Pricing() {
  return (
    <section className="pricing" id="paketa">
      <div className="wrap">
        <h2 className="section-title">Πακέτα & τιμές</h2>
        <div className="prices">
          {prices.map((item) => (
            <PriceCard
              key={item.title}
              title={item.title}
              amount={item.amount}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
