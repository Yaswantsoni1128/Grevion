import React from 'react';

function Blog() {
    const blogPosts = [
        {
            title: "The Future of Renewable Energy Trading",
            date: "March 25, 2025",
            summary: "Discover how platforms like Grevion are revolutionizing energy trading with secure and efficient transactions."
        },
        {
            title: "How Paralis Can Boost Sustainability",
            date: "March 18, 2025",
            summary: "Learn about the impact of paralis in the energy sector and how they contribute to a greener future."
        },
        {
            title: "Top Trends in Energy Market Digitalization",
            date: "March 10, 2025",
            summary: "Stay updated on the latest trends shaping the digital transformation of energy trading."
        },
        {
            title: "Why Transparency Matters in Energy Trading",
            date: "March 5, 2025",
            summary: "Explore how transparency and trust are key factors in shaping a reliable energy marketplace."
        },
        {
            title: "The Role of AI in Renewable Energy Forecasting",
            date: "February 28, 2025",
            summary: "Understand how artificial intelligence is enhancing energy predictions and optimizing market strategies."
        },
        {
            title: "Green Investments: The Future of Sustainable Energy",
            date: "February 20, 2025",
            summary: "Discover the financial incentives driving the shift towards sustainable energy sources."
        }
    ];

    return (
        <div className="bg-gray-100 py-12 px-6">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Our Blog</h1>
            <p className="text-lg text-gray-700 text-center mx-auto mb-8">
                Stay informed with the latest insights, updates, and trends in the renewable energy market and paralis trading.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                    <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                        <p className="text-gray-600 text-sm mb-2">{post.date}</p>
                        <p className="text-gray-700">{post.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
