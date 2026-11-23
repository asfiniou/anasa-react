# Ανάσα Pilates Studio (React)

Το site ενός μικρού στούντιο pilates στην Καβάλα, φτιαγμένο σε **React** με **Vite**.

🔗 **Ζωντανό site:** [anasa-react.netlify.app](https://anasa-react.netlify.app)

Το σχέδιο το έφτιαξα στο **Figma**. Πρώτα το υλοποίησα σε HTML/CSS ([anasa-pilates-studio.netlify.app](https://anasa-pilates-studio.netlify.app)) και μετά το μετέφερα σε React, χωρισμένο σε components.

## Τι περιλαμβάνει

- **Μαθήματα** και **πακέτα τιμών**, που φτιάχνονται από λίστες δεδομένων με `.map()` και props
- **Εβδομαδιαίο πρόγραμμα**: πίνακας σε υπολογιστή και καρτέλες ημερών σε κινητό (`useState`)
- **Συχνές ερωτήσεις** που ανοιγοκλείνουν (`useState`)
- **Μενού για κινητό** με κουμπί άνοιγμα/κλείσιμο (`useState`)
- Responsive σχεδιασμός για κινητό, tablet και υπολογιστή

## Δομή

```
src/
  App.jsx            το κεντρικό component
  anasa-style.css    όλο το CSS
  components/
    Header.jsx       λογότυπο και μενού
    Hero.jsx         η πρώτη ενότητα με τη φωτογραφία
    Classes.jsx      τα μαθήματα (με ClassCard.jsx)
    Space.jsx        ο χώρος του στούντιο
    Pricing.jsx      τα πακέτα (με PriceCard.jsx)
    Scedule.jsx      το πρόγραμμα
    Faq.jsx          οι ερωτήσεις (με FaqItem.jsx)
    Footer.jsx       επικοινωνία και ωράριο
```

## Τεχνολογίες

React · Vite · CSS · Figma · Netlify

## Εκτέλεση τοπικά

```
npm install
npm run dev
```

---

Σχεδιασμός και υλοποίηση: **Αναστασία Σφίνιου** · [saitaki-web.netlify.app](https://saitaki-web.netlify.app)

*Δείγμα portfolio. Τα στοιχεία επικοινωνίας στο site είναι ενδεικτικά.*
