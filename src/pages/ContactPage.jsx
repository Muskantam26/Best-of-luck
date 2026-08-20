import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F7D6D0', '#C26D70', '#EFE8F8']
    });
  };

  return (
    <div className="py-16 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D70] bg-[#FBEAE7] px-3.5 py-1.5 rounded-full border border-[#F7D6D0] inline-block mb-3">
            We'd Love to Chat 💌
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2424]">
            Get In Touch With Us
          </h1>
          <p className="text-xs sm:text-sm text-[#7A6C68] mt-2">
            Have questions about custom hamper orders, tracking, or bulk gifting? Drop us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#F2EBD9] shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FBEAE7] flex items-center justify-center text-3xl mx-auto border border-[#F7D6D0] text-[#C26D70]">
                  💌
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2D2424]">Message Received! 💕</h3>
                <p className="text-xs text-[#594A47] max-w-sm mx-auto">
                  Thank you for reaching out! Our cute customer support team will reply within 2-4 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#C26D70] text-white text-xs font-bold rounded-full hover:bg-[#b05c5f] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#2D2424] mb-2">Send Us a Quick Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#7A6C68] mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3.5 rounded-2xl border border-[#F7D6D0] bg-[#FAF7F2] text-xs text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#C26D70]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#7A6C68] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="ananya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3.5 rounded-2xl border border-[#F7D6D0] bg-[#FAF7F2] text-xs text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#C26D70]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#7A6C68] mb-1">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3.5 rounded-2xl border border-[#F7D6D0] bg-[#FAF7F2] text-xs text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#C26D70]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#7A6C68] mb-1">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you need help with..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 rounded-2xl border border-[#F7D6D0] bg-[#FAF7F2] text-xs text-[#2D2424] focus:outline-none focus:ring-2 focus:ring-[#C26D70]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C26D70] hover:bg-[#b05c5f] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#F2EBD9] shadow-sm space-y-6">
            <h3 className="font-serif text-lg font-bold text-[#2D2424]">Direct Channels</h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#F2EBD9]">
                <Mail className="w-5 h-5 text-[#C26D70] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#2D2424]">Email Us</p>
                  <p className="text-[#7A6C68]">hello@beadsofluck.com</p>
                  <p className="text-[10px] text-[#C26D70] mt-0.5">Response within 2-4 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#F2EBD9]">
                <MessageSquare className="w-5 h-5 text-[#C26D70] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#2D2424]">WhatsApp Support</p>
                  <p className="text-[#7A6C68]">+91 98765 43210</p>
                  <p className="text-[10px] text-[#C26D70] mt-0.5">Mon - Sat, 10 AM - 7 PM</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FBEAE7] border border-[#F7D6D0] text-center space-y-1">
              <p className="text-xs font-bold text-[#C26D70]">📍 Studio Address</p>
              <p className="text-[11px] text-[#2D2424]">Beads of Luck Studio, Bandra West, Mumbai - 400050</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
