import { useState } from 'react';
import { Project, User } from '../types';
import { Shield, Lock, CreditCard, Heart, CheckCircle2, Download, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

interface CheckoutViewProps {
  project: Project;
  amount: number;
  user: User | null;
  onCompleteDonation: (projectId: string, finalAmount: number) => void;
  onNavigate: (view: string) => void;
}

export default function CheckoutView({ project, amount, user, onCompleteDonation, onNavigate }: CheckoutViewProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [firstName, setFirstName] = useState(user ? user.name.split(' ')[0] : '');
  const [lastName, setLastName] = useState(user ? user.name.split(' ')[1] || '' : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [cardName, setCardName] = useState(user ? user.name : '');
  const [cardNumber, setCardNumber] = useState('4111 2222 3333 4444');
  const [expiry, setExpiry] = useState('12/28');
  const [cvv, setCvv] = useState('123');
  const [tipOption, setTipOption] = useState<number>(5); // Default $5 tip to Kindred
  const [agreed, setAgreed] = useState(true);

  // Success screen details
  const [donationId] = useState(`TX-${Math.floor(100000 + Math.random() * 900000)}`);
  
  const totalAmount = amount + tipOption;

  const handleNextStep = () => {
    if (step < 2) {
      setStep((prev) => (prev + 1) as 1 | 2 | 3);
    } else {
      // Execute mock transaction complete
      onCompleteDonation(project.id, amount);
      setStep(3);
    }
  };

  const handleBackStep = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as 1 | 2 | 3);
    } else {
      onNavigate('project-detail');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 font-sans text-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Checkout Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold font-mono tracking-widest text-emerald-700 uppercase block mb-1">
            Complete your impact
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-950">
            Secure Donation Portal
          </h1>
          
          {/* Stepper progress */}
          {step < 3 && (
            <div className="flex items-center justify-center mt-6 space-x-4">
              <div className="flex items-center space-x-1">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono leading-none ${
                  step >= 1 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  1
                </span>
                <span className="text-xs font-semibold text-gray-800">Donor Information</span>
              </div>
              <span className="h-0.5 w-8 bg-gray-200" />
              <div className="flex items-center space-x-1">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono leading-none ${
                  step >= 2 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  2
                </span>
                <span className="text-xs font-semibold text-gray-800">Payment & Pledge</span>
              </div>
            </div>
          )}
        </div>

        {step === 3 ? (
          /* Step 3: Success Confirmation screen */
          <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-12 text-center max-w-xl mx-auto shadow-xl space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-gray-950">Thank you, {firstName || 'Donor'}!</h2>
              <p className="text-sm text-gray-600">
                Your direct contribution to <strong className="text-gray-900">{project.title}</strong> has cleared successfully.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-left space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400 font-semibold">Transaction ID:</span>
                <span className="font-mono text-gray-900 font-bold">{donationId}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400 font-semibold">Direct Pledge:</span>
                <span className="text-emerald-700 font-bold">${amount.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400 font-semibold">Kindred Platform Support:</span>
                <span className="text-gray-900 font-medium">${tipOption.toLocaleString()}.00</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between items-center text-sm">
                <span className="font-bold text-gray-900">Total Charged:</span>
                <span className="font-mono text-emerald-700 font-extrabold">${totalAmount.toLocaleString()}.00</span>
              </div>
            </div>

            {/* Receipt and Actions */}
            <div className="space-y-3 pt-4">
              <button className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl flex items-center justify-center space-x-2 shadow-md shadow-emerald-100 transition-all">
                <Download className="w-4 h-4" />
                <span>Download IRS Tax Receipt (501c3)</span>
              </button>
              
              <button
                onClick={() => onNavigate('dashboard')}
                className="w-full py-3 bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold text-xs rounded-xl border border-gray-200 transition-all block text-center"
              >
                Go to Donor Dashboard
              </button>
            </div>

            <div className="flex items-center justify-center space-x-1.5 text-[10px] text-gray-400 font-semibold uppercase">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>RADICALLY TRANSPARENT • SATELLITE TRACKED</span>
            </div>
          </div>
        ) : (
          /* Columns Layout for Form + Summary */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Forms */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              
              {step === 1 ? (
                /* Step 1 Form */
                <div className="space-y-5">
                  <h3 className="text-lg font-serif font-bold text-gray-950 border-b border-gray-100 pb-3">
                    Donor Information
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-400 uppercase block mb-1">First Name</label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Sarah"
                        className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Last Name</label>
                      <input
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Jenkins"
                        className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@example.com"
                      className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500"
                    />
                    <p className="text-[10px] text-gray-400 mt-1 font-semibold">Your dynamic impact tracking and satellite maps link will be emailed here.</p>
                  </div>

                  <label className="flex items-start space-x-3 text-sm font-semibold text-gray-700 cursor-pointer pt-2 select-none">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={() => setIsAnonymous(!isAnonymous)}
                      className="w-4.5 h-4.5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 mt-0.5 transition-colors"
                    />
                    <div>
                      <span>Hide my name on public ledger</span>
                      <p className="text-xs text-gray-400 font-medium mt-0.5">Your receipt will still be IRS-compliant, but your avatar will show as anonymous to the public.</p>
                    </div>
                  </label>
                </div>
              ) : (
                /* Step 2 Form: Payment info & pledge agreement */
                <div className="space-y-5">
                  <h3 className="text-lg font-serif font-bold text-gray-950 border-b border-gray-100 pb-3">
                    Payment & Pledge Vows
                  </h3>

                  {/* Method select */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`py-3 rounded-xl border font-bold text-xs flex items-center justify-center space-x-2 transition-all ${
                        paymentMethod === 'card'
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm'
                          : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Credit Card</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`py-3 rounded-xl border font-bold text-xs flex items-center justify-center space-x-2 transition-all ${
                        paymentMethod === 'paypal'
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm'
                          : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
                      }`}
                    >
                      <span className="font-serif italic text-blue-800">PayPal</span>
                    </button>
                  </div>

                  {paymentMethod === 'card' ? (
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Cardholder Name</label>
                        <input
                          type="text"
                          required
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          placeholder="Sarah Jenkins"
                          className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Card Number</label>
                        <input
                          type="text"
                          required
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500 font-mono tracking-widest"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Expiry Date (MM/YY)</label>
                          <input
                            type="text"
                            required
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            placeholder="12/28"
                            className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-gray-400 uppercase block mb-1">CVV Security Code</label>
                          <input
                            type="password"
                            required
                            maxLength={3}
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="123"
                            className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500 font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center text-sm font-medium text-gray-500">
                      You will be redirected to PayPal's secure gateway to sign-off on your contribution.
                    </div>
                  )}

                  <label className="flex items-start space-x-3 text-xs font-semibold text-gray-600 cursor-pointer pt-3 select-none">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={() => setAgreed(!agreed)}
                      className="w-4.5 h-4.5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 mt-0.5"
                    />
                    <span>
                      I promise to follow Kindred's Donor Charter and understand that 100% of my donation is direct-to-field certified.
                    </span>
                  </label>
                </div>
              )}

              {/* Navigation controls inside form */}
              <div className="flex gap-4 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handleBackStep}
                  className="flex-1 py-3 border border-gray-200 hover:bg-gray-50 font-bold text-xs rounded-xl text-gray-700 transition-all flex items-center justify-center space-x-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{step === 1 ? 'Cancel' : 'Back'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={step === 2 && !agreed}
                  className={`flex-1 py-3 font-bold text-xs rounded-xl transition-all flex items-center justify-center space-x-1.5 ${
                    step === 2 && !agreed
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-100'
                  }`}
                >
                  <span>{step === 1 ? 'Continue to Payment' : `Pledge $${totalAmount}`}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right Side: Impact Summary & Tips */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Summary Card */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md space-y-5">
                <h3 className="text-gray-950 font-serif font-bold text-base">Impact Ledger Summary</h3>
                
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                    <img src={project.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-gray-900 leading-tight line-clamp-2">{project.title}</h4>
                    <p className="text-[10px] text-gray-400 mt-1 font-semibold uppercase">{project.organization}</p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-3">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-gray-500">Selected contribution amount:</span>
                    <span className="text-gray-900 font-bold">${amount.toLocaleString()}.00</span>
                  </div>
                  
                  {/* Platform micro tips */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-semibold text-gray-700">
                      <span className="flex items-center space-x-1">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600 inline" />
                        <span>Support Kindred (0% platform cut):</span>
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-1.5">
                      {[0, 2, 5, 10].map((tip) => (
                        <button
                          key={tip}
                          type="button"
                          onClick={() => setTipOption(tip)}
                          className={`py-1.5 text-[10px] font-bold rounded-lg border transition-all ${
                            tipOption === tip
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                              : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
                          }`}
                        >
                          {tip === 0 ? '0%' : `$${tip}`}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4 flex justify-between items-end">
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">Final Total Charged</span>
                      <span className="text-xs text-emerald-600 font-semibold italic">100% Tax Deductible</span>
                    </div>
                    <span className="font-mono text-emerald-700 font-extrabold text-xl">${totalAmount.toLocaleString()}.00</span>
                  </div>
                </div>
              </div>

              {/* Badges / Trust */}
              <div className="bg-emerald-950 text-white p-5 rounded-2xl border border-emerald-900/50 space-y-3">
                <div className="flex items-start space-x-2.5">
                  <Lock className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-xs text-emerald-100">PCI-DSS Level 1 Encryption Vetted</h5>
                    <p className="text-[10px] text-emerald-300/80 mt-0.5">Your sensitive financial details are tokenized securely and never written to plain ledger logs.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
