import React from 'react';
import { AlertCircle, ShieldAlert } from 'lucide-react';

interface PackageAdvanceNoticeProps {
  compact?: boolean;
  packageName?: string;
  advanceFeeAmount?: string;
}

export const PackageAdvanceNotice: React.FC<PackageAdvanceNoticeProps> = ({ 
  compact = false,
  packageName,
  advanceFeeAmount
}) => {
  return (
    <div className={`rounded-2xl bg-gradient-to-br from-[#1C170A] via-[#15131C] to-[#0E0E16] border-2 border-amber-400/70 shadow-xl ${compact ? 'p-3.5 space-y-2' : 'p-4 sm:p-5 space-y-3'}`}>
      <div className="flex items-center gap-2 text-amber-300 font-black text-xs uppercase tracking-wider">
        <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 animate-pulse" />
        <span>Important: Advance Fee Required</span>
      </div>

      <p className="text-xs sm:text-sm text-white font-bold leading-snug">
        {advanceFeeAmount ? (
          <>
            An advance fee of <span className="text-amber-300 underline font-black decoration-amber-400/60">{advanceFeeAmount}</span> is required up front as part of the {packageName ? `${packageName} ` : ''}package terms to proceed with the meme coin project.
          </>
        ) : (
          <>
            An advance fee is required based on the requirements of the individual package and is needed up front as part of the package terms to proceed with the meme coin project.
          </>
        )}
      </p>

      <div className="pt-2 border-t border-amber-500/25 text-[11px] sm:text-xs text-gray-200 leading-relaxed">
        <strong className="text-amber-300 font-extrabold block mb-0.5 uppercase tracking-wide">
          Terms & Execution Policy:
        </strong>
        Work begins only after the advance fee is received. We will then confirm your coin specifications, gather requirements, and proceed with creation and listing as instructed. Remaining balance is due upon project completion, based on your chosen package.
      </div>
    </div>
  );
};
