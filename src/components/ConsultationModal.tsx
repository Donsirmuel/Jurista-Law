import React, { useState } from 'react';
import { PracticeSlug } from '../types';
import { PRACTICE_AREAS, ATTORNEYS } from '../data/firmData';
import { BrickCheckIcon } from './LineIcons';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPractice?: PracticeSlug;
  preselectedAttorneyId?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedPractice,
  preselectedAttorneyId,
}) => {
  const [practice, setPractice] = useState<PracticeSlug>(preselectedPractice || 'corporate-law');
  const [attorneyId, setAttorneyId] = useState<string>(preselectedAttorneyId || 'any');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-10-02');
  const [timeOfDay, setTimeOfDay] = useState('morning');
  const [notes, setNotes] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'JL-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const selectedPracticeObj = PRACTICE_AREAS.find((p) => p.id === practice);
  const selectedAttorneyObj = ATTORNEYS.find((a) => a.id === attorneyId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#173330]/70 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-[#FAFCF6] border border-[#173330]/15 rounded-2xl w-full max-w-xl max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#173330]/60 hover:text-[#173330] p-1.5 rounded-full hover:bg-[#E6E4D2]/60 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-1">
                Direct Attorney Access
              </span>
              <h2 id="modal-headline" className="text-2xl sm:text-3xl font-serif font-semibold text-[#173330]">
                Book a confidential consultation.
              </h2>
              <p className="text-sm text-[#2E4C47] mt-1.5">
                Free initial consultation for most practice areas. You speak directly with an attorney, not a call center.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              {/* Practice Area Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#173330] mb-1.5">
                  Practice Area *
                </label>
                <select
                  value={practice}
                  onChange={(e) => setPractice(e.target.value as PracticeSlug)}
                  className="w-full bg-[#F1F4EC] border border-[#173330]/20 rounded-xl px-3.5 py-2.5 text-[#173330] font-medium focus:outline-none focus:ring-2 focus:ring-[#C6902E]"
                  required
                >
                  {PRACTICE_AREAS.map((pa) => (
                    <option key={pa.id} value={pa.id}>
                      {pa.name} — {pa.shortDesc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Attorney */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#173330] mb-1.5">
                  Preferred Attorney (Optional)
                </label>
                <select
                  value={attorneyId}
                  onChange={(e) => setAttorneyId(e.target.value)}
                  className="w-full bg-[#F1F4EC] border border-[#173330]/20 rounded-xl px-3.5 py-2.5 text-[#173330] font-medium focus:outline-none focus:ring-2 focus:ring-[#C6902E]"
                >
                  <option value="any">First available specialist in this practice</option>
                  {ATTORNEYS.map((att) => (
                    <option key={att.id} value={att.id}>
                      {att.name} ({att.role.split('—')[1]?.trim() || att.role})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#173330] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#F1F4EC] border border-[#173330]/20 rounded-xl px-3.5 py-2.5 text-[#173330] placeholder:text-[#2E4C47]/50 focus:outline-none focus:ring-2 focus:ring-[#C6902E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#173330] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#F1F4EC] border border-[#173330]/20 rounded-xl px-3.5 py-2.5 text-[#173330] placeholder:text-[#2E4C47]/50 focus:outline-none focus:ring-2 focus:ring-[#C6902E]"
                  />
                </div>
              </div>

              {/* Phone & Date Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#173330] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#F1F4EC] border border-[#173330]/20 rounded-xl px-3.5 py-2.5 text-[#173330] placeholder:text-[#2E4C47]/50 focus:outline-none focus:ring-2 focus:ring-[#C6902E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#173330] mb-1.5">
                    Preferred Time of Day
                  </label>
                  <select
                    value={timeOfDay}
                    onChange={(e) => setTimeOfDay(e.target.value)}
                    className="w-full bg-[#F1F4EC] border border-[#173330]/20 rounded-xl px-3.5 py-2.5 text-[#173330] font-medium focus:outline-none focus:ring-2 focus:ring-[#C6902E]"
                  >
                    <option value="morning">Morning (9:00 AM – 12:00 PM)</option>
                    <option value="afternoon">Afternoon (1:00 PM – 4:30 PM)</option>
                    <option value="evening">Late Afternoon (4:30 PM – 6:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#173330] mb-1.5">
                  Brief Summary of Your Matter
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline the situation, any critical deadlines, or questions you would like addressed..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#F1F4EC] border border-[#173330]/20 rounded-xl px-3.5 py-2.5 text-[#173330] placeholder:text-[#2E4C47]/50 focus:outline-none focus:ring-2 focus:ring-[#C6902E]"
                />
              </div>

              {/* Urgent Flag */}
              <div className="flex items-center gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="urgent"
                  checked={isUrgent}
                  onChange={(e) => setIsUrgent(e.target.checked)}
                  className="w-4 h-4 rounded border-[#173330]/30 text-[#9C4A32] focus:ring-[#9C4A32]"
                />
                <label htmlFor="urgent" className="text-xs text-[#2E4C47] cursor-pointer">
                  This matter is time-sensitive (arraignment, deportation notice, or closing within 48h)
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-[#C6902E] hover:bg-[#d49c33] text-[#173330] font-bold py-3.5 rounded-full shadow-[0_4px_14px_rgba(198,144,46,0.3)] transition-all cursor-pointer text-base"
                >
                  Confirm Consultation Request
                </button>
                <p className="text-center text-[0.75rem] text-[#2E4C47]/80 mt-2">
                  Submissions are covered by strict attorney-client privilege.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-[#E6E4D2] rounded-full flex items-center justify-center mx-auto mb-5">
              <BrickCheckIcon size={32} />
            </div>
            <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider">
              Request Confirmed
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#173330] mt-1 mb-3">
              We have received your details.
            </h2>
            <p className="text-sm text-[#2E4C47] max-w-[42ch] mx-auto mb-6 leading-relaxed">
              Thank you, <b>{fullName}</b>. An attorney from our{' '}
              <b>{selectedPracticeObj?.name || 'legal'}</b> practice will reach out directly to{' '}
              <b>{email}</b> within 24 to 48 hours.
            </p>

            {/* Reference Box */}
            <div className="bg-[#E6E4D2]/50 border border-[#173330]/10 rounded-xl p-4 text-left max-w-md mx-auto text-xs space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-[#2E4C47]">Case Ref:</span>
                <span className="font-mono font-bold text-[#173330]">{confirmationCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#2E4C47]">Practice:</span>
                <span className="font-medium text-[#173330]">{selectedPracticeObj?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#2E4C47]">Assigned Counsel:</span>
                <span className="font-medium text-[#173330]">
                  {selectedAttorneyObj ? selectedAttorneyObj.name : 'Senior Specialist'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#2E4C47]">Preferred Slot:</span>
                <span className="font-medium text-[#173330] capitalize">{timeOfDay} window</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="bg-[#173330] text-[#F1F4EC] px-8 py-3 rounded-full font-bold text-sm hover:bg-[#2E4C47] transition-colors cursor-pointer"
            >
              Done &amp; Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
