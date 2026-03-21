
import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
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
              <Shield size={28} />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 serif">Privacy Policy</h1>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
            <p className="text-lg font-medium text-slate-900">Last Updated: March 14, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>Welcome to Ecco House Cleaning. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at privacy@eccocleaning.com.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
              <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, such as when you call us or send us a text message.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Data:</strong> Name, phone number, email address, and home address.</li>
                <li><strong>Service Data:</strong> Details about your home and cleaning preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
              <p>We use personal information collected via our Services for a variety of business purposes described below:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To facilitate account creation and logon process.</li>
                <li>To send administrative information to you.</li>
                <li>To fulfill and manage your orders.</li>
                <li>To deliver and facilitate delivery of services to the user.</li>
                <li>To respond to user inquiries/offer support to users.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Sharing Your Information</h2>
              <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
              <p>If you have questions or comments about this policy, you may email us at support@eccocleaning.com or by post to:</p>
              <p className="font-bold">Ecco House Cleaning<br />Richmond, VA</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
