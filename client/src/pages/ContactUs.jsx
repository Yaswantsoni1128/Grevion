import React from 'react'

function ContactUs() {
    return (
        <div className="bg-gray-100 py-12 px-6">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Contact Us</h1>
            <p className="text-lg text-gray-700 text-center mx-auto">
                Get in touch with Grevion for inquiries, support, or partnership opportunities. We are here to assist you in making energy trading seamless and efficient.
            </p>

            <div className="mt-8 bg-gray-200 p-6 rounded-lg text-center max-w-lg mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Reach Out to Us</h2>
                <p className="text-gray-700">Email: support@grevion.com</p>
                <p className="text-gray-700">Phone: +1 (123) 456-7890</p>
                <p className="text-gray-700">Address: 123 Green Energy Street, Sustainability City</p>
            </div>
        </div>
    );
}

export default ContactUs