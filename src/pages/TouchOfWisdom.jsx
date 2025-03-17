import { useState, useEffect } from 'react';

function TouchOfWisdom() {
  const [quotes, setQuotes] = useState([]);
  const API_URL = 'https://touch-of-wisdom-api.onrender.com';

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(`${API_URL}/quotes`);
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        setQuotes(data);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };
    fetchQuotes();
  });

  return (
    <div className="p-8 md:p-16">
      <h1 className="mb-16 text-center">
        Touch of Wisdom
      </h1>
      <div className="flex flex-col">
        {quotes.map((quote, index) => (
          <div key={index} className="mb-8">
            <p className="italic mb-2">
              “{quote.text}”
            </p>
            {quote.author && (
              <p className="text-right text-gray-600">
                — {quote.author}
                {quote.title && `, ${quote.title}`}
                {quote.note && ` (${quote.note})`}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TouchOfWisdom;