import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import "./faqs.css";

const FAQ_ITEMS = [
  {
    question: "What's the battery life on Veluno headphones?",
    answer:
      "Most Veluno headphones run 25–30 hours on a single charge with ANC on, and up to 40 hours with it off. A 10-minute quick charge gives you roughly 4 hours of playback.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to over 120 countries. Delivery times vary by region, typically 3–7 business days domestically and 7–14 days internationally.",
  },
  {
    question: "What is your return policy?",
    answer:
      "You can return any unused product within 30 days of delivery for a full refund. Opened items are eligible for exchange or store credit within the same window.",
  },
  {
    question: "Are the headphones compatible with all devices?",
    answer:
      "Yes — all our headphones support standard Bluetooth 5.0+ and work with iOS, Android, Windows, and macOS. A wired 3.5mm option is included for devices without Bluetooth.",
  },
  {
    question: "Is there a warranty included?",
    answer:
      "Every purchase includes a 2-year limited warranty covering manufacturing defects, plus free customer support for setup or troubleshooting.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleFaq(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className="faqs" id="faqs">
      <div className="faqs__inner">
        <div className="faqs__header">
          <span className="faqs__eyebrow">FAQs</span>
          <h2 className="faqs__heading">
            Got questions?
            <br />
            We've got answers.
          </h2>
        </div>

        <div className="faqs__list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={isOpen ? "faq-item faq-item--open" : "faq-item"}
              >
                <button
                  className="faq-item__trigger"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-item__question">{item.question}</span>
                  <span className="faq-item__icon">
                    <FiPlus size={18} strokeWidth={2} />
                  </span>
                </button>

                <div className="faq-item__panel">
                  <p className="faq-item__answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}