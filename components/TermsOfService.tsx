
import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-8 hover:gap-3 transition-all">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-xl border border-slate-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
              <FileText size={28} />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 serif">Terms of Service</h1>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
            <p className="text-lg font-medium text-slate-900">Last Updated: March 14, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to all these terms, you may not use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h2>
              <p>Ecco House Cleaning provides residential cleaning services in the Richmond area. We reserve the right to refuse service to anyone for any reason at any time.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payments and Cancellations</h2>
              <p>Payments are due upon completion of the service unless otherwise agreed upon. Cancellations must be made at least 24 hours in advance. Late cancellations may incur a fee.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Liability</h2>
              <p>While we are fully bonded and insured, Ecco House Cleaning is not liable for indirect or consequential damages. Our total liability for any claim shall not exceed the amount paid for the service in question.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with the laws of the Commonwealth of Virginia.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contact</h2>
              <p>If you have any questions about these Terms, please contact us at support@eccocleaning.com.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
