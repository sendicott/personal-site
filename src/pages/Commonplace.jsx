import { useState, useEffect } from 'react';

function Commonplace() {
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
    <div className="py-8">
      <h1 clasName="mb-6 text-center">
        Commonplace Book
      </h1>
      <div className="flex flex-col">
        {quotes.map((quote, index) => (
          <div key={index}>
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

export default Commonplace;