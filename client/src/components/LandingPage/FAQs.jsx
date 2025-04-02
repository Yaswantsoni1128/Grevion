import React, { useState } from "react";

const faqs = [
    {
      question: "How does Grevion connect SPOCs and power plants?",
      answer: "Grevion provides a secure and reliable platform where SPOCs and power plants can register, communicate, and establish energy trading partnerships."
    },
    {
      question: "What is Paralis and how does Grevion facilitate its trading?",
      answer: "Paralis is an innovative energy commodity, and Grevion enables seamless trading through transparent and efficient transaction management."
    },
    {
      question: "How secure is my data on Grevion?",
      answer: "Grevion implements industry-standard security protocols to safeguard your data from unauthorized access and breaches."
    },
    {
      question: "Can I track transaction history on Grevion?",
      answer: "Yes, you can view and manage your complete transaction history within the dashboard."
    },
    {
      question: "What customer support options are available?",
      answer: "Our support team is available 24/7 via chat, email, and phone to assist you with any inquiries."
    },
    {
      question: "Is there a fee for using Grevion?",
      answer: "Grevion offers flexible pricing plans based on your usage, with a free trial to get started."
    },
    {
      question: "How do I become a registered user on Grevion?",
      answer: "Simply sign up on the platform, complete your profile, and start exploring the features."
    }
  ];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-6 md:px-20 pt-16 pb-32 bg-gray-100 flex flex-col md:flex-row justify-center items-start gap-10">
        <div className="md:w-1/3 w-full text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-8">For any unanswered questions, reach out to our support team via email. We'll respond as soon as possible to assist you.</p>
        </div>
        <div className="space-y-4 md:w-2/3 w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b p-4 cursor-pointer">
                <div onClick={() => toggleFAQ(index)} className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-medium">{faq.question}</h3>
                  <span className="text-xl md:text-2xl">{activeIndex === index ? "−" : "+"}</span>
                </div>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-600 text-sm md:text-base">{faq.answer}</p>
                )}
              </div>
            ))}
      </div>
    </div>
  );
};

export default FAQs;
