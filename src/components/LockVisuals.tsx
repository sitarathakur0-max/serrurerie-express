import React from 'react';

interface VisualCardProps {
  title: string;
  category: string;
  description: string;
  specs: string[];
  visualType: 'cylinder' | 'multipoint' | 'key' | 'doorShield';
  onClick?: () => void;
}

export function CylinderVisual({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto drop-shadow-md ${className}`}
      aria-label="Schéma technique d'un cylindre européen de haute sécurité"
    >
      <defs>
        <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="30%" stopColor="#d97706" />
          <stop offset="70%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="steelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="50%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <linearGradient id="darkSteel" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#b45309" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background panel accent */}
      <rect x="15" y="15" width="370" height="220" rx="12" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
      <circle cx="340" cy="50" r="70" fill="url(#goldGlow)" />

      {/* Grid subtle lines */}
      <path d="M 25 70 H 375 M 25 125 H 375 M 25 180 H 375" stroke="#1e293b" strokeWidth="0.75" strokeDasharray="3 3" />
      <path d="M 100 25 V 225 M 200 25 V 225 M 300 25 V 225" stroke="#1e293b" strokeWidth="0.75" strokeDasharray="3 3" />

      {/* Euro cylinder profile main body */}
      {/* Left side barrel */}
      <path
        d="M 60 70 C 60 48 82 30 110 30 C 138 30 160 48 160 70 L 160 90 L 138 120 L 138 180 C 138 188 130 195 120 195 L 100 195 C 90 195 82 188 82 180 L 82 120 L 60 90 Z"
        fill="url(#brassGrad)"
        stroke="#fde047"
        strokeWidth="1.5"
      />

      {/* Central rotating cam (panneton) */}
      <rect x="180" y="80" width="40" height="115" rx="6" fill="url(#darkSteel)" stroke="#475569" strokeWidth="1.5" />
      <path d="M 186 95 L 214 75 L 214 110 L 186 110 Z" fill="#334155" stroke="#64748b" strokeWidth="1" />
      <circle cx="200" cy="140" r="14" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.5" />
      <circle cx="200" cy="140" r="5" fill="#f8fafc" />

      {/* Right side barrel */}
      <path
        d="M 240 70 C 240 48 262 30 290 30 C 318 30 340 48 340 70 L 340 90 L 318 120 L 318 180 C 318 188 310 195 300 195 L 280 195 C 270 195 262 188 262 180 L 262 120 L 240 90 Z"
        fill="url(#brassGrad)"
        stroke="#fde047"
        strokeWidth="1.5"
      />

      {/* Left plug and keyway */}
      <circle cx="110" cy="70" r="32" fill="url(#steelGrad)" stroke="#94a3b8" strokeWidth="2" />
      <circle cx="110" cy="70" r="26" fill="#1e293b" />
      {/* Keyway vertical profile */}
      <path d="M 108 52 L 112 52 L 112 85 L 114 85 L 114 88 L 106 88 L 106 85 L 108 85 Z" fill="#f8fafc" />
      <circle cx="110" cy="62" r="2" fill="#fbbf24" />
      <circle cx="110" cy="72" r="2" fill="#fbbf24" />

      {/* Right plug and keyway */}
      <circle cx="290" cy="70" r="32" fill="url(#steelGrad)" stroke="#94a3b8" strokeWidth="2" />
      <circle cx="290" cy="70" r="26" fill="#1e293b" />
      <path d="M 288 52 L 292 52 L 292 85 L 294 85 L 294 88 L 286 88 L 286 85 L 288 85 Z" fill="#f8fafc" />
      <circle cx="290" cy="62" r="2" fill="#fbbf24" />
      <circle cx="290" cy="72" r="2" fill="#fbbf24" />

      {/* Fastening screw hole */}
      <circle cx="200" cy="180" r="6" fill="#020617" stroke="#475569" strokeWidth="1.5" />
      <path d="M 197 180 H 203" stroke="#94a3b8" strokeWidth="1.5" />

      {/* Technical measurement markers */}
      <path d="M 60 215 H 180" stroke="#fbbf24" strokeWidth="1.5" />
      <path d="M 60 210 V 220 M 180 210 V 220" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="110" y="212" fill="#fef08a" fontSize="11" textAnchor="middle" fontFamily="monospace" fontWeight="bold">30 mm</text>

      <path d="M 220 215 H 340" stroke="#fbbf24" strokeWidth="1.5" />
      <path d="M 220 210 V 220 M 340 210 V 220" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="280" y="212" fill="#fef08a" fontSize="11" textAnchor="middle" fontFamily="monospace" fontWeight="bold">30 mm</text>

      <text x="200" y="30" fill="#94a3b8" fontSize="10" textAnchor="middle" letterSpacing="2" fontFamily="sans-serif">PROFIL EUROPÉEN STANDARD DIN</text>
    </svg>
  );
}

export function MultipointLockVisual({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto drop-shadow-md ${className}`}
      aria-label="Schéma d'une serrure multipoints pour porte d'entrée"
    >
      <defs>
        <linearGradient id="plateGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="50%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="60%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>

      {/* Frame */}
      <rect x="15" y="15" width="370" height="220" rx="12" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />

      {/* Door Edge Simulation */}
      <rect x="40" y="25" width="70" height="200" fill="#172033" stroke="#334155" strokeWidth="1" />
      <line x1="110" y1="25" x2="110" y2="225" stroke="#e2e8f0" strokeWidth="3" />

      {/* Main Steel Lock Faceplate */}
      <rect x="106" y="30" width="8" height="190" rx="2" fill="url(#boltGrad)" stroke="#64748b" strokeWidth="1" />

      {/* Upper Locking Point (Deadbolt hook) */}
      <g>
        <rect x="114" y="45" width="36" height="18" rx="3" fill="url(#boltGrad)" stroke="#38bdf8" strokeWidth="1.5" />
        <path d="M 140 45 C 148 45 152 50 152 54 L 140 63 Z" fill="#0284c7" />
        <circle cx="125" cy="54" r="3" fill="#0f172a" />
        {/* Strike plate indicator */}
        <rect x="160" y="40" width="12" height="28" rx="2" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
        <rect x="162" y="46" width="6" height="16" fill="#020617" />
      </g>

      {/* Central Lock Box & Latch + Deadbolt */}
      <g>
        <rect x="45" y="85" width="60" height="80" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
        {/* Spindle hole for handle (carré) */}
        <rect x="68" y="98" width="14" height="14" rx="2" fill="#f8fafc" stroke="#334155" strokeWidth="1" />
        <rect x="71" y="101" width="8" height="8" fill="#020617" />

        {/* Euro profile cutout */}
        <circle cx="75" cy="132" r="10" fill="#020617" stroke="#64748b" strokeWidth="1" />
        <path d="M 71 135 L 79 135 L 77 152 L 73 152 Z" fill="#020617" stroke="#64748b" strokeWidth="1" />

        {/* Beveled Spring Latch (Pêne demi-tour) */}
        <path d="M 114 96 L 138 96 L 126 112 L 114 112 Z" fill="url(#boltGrad)" stroke="#64748b" strokeWidth="1.5" />

        {/* Main Solid Deadbolt (Pêne dormant rectangulaire) */}
        <rect x="114" y="124" width="46" height="22" rx="3" fill="url(#boltGrad)" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="124" y1="128" x2="124" y2="142" stroke="#64748b" strokeWidth="1" />
        <line x1="134" y1="128" x2="134" y2="142" stroke="#64748b" strokeWidth="1" />
        <line x1="144" y1="128" x2="144" y2="142" stroke="#64748b" strokeWidth="1" />

        {/* Central Strike Plate */}
        <rect x="166" y="88" width="14" height="74" rx="2" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
        <rect x="168" y="94" width="8" height="22" fill="#020617" />
        <rect x="168" y="122" width="8" height="26" fill="#020617" />
      </g>

      {/* Lower Locking Point (Round steel pin) */}
      <g>
        <rect x="114" y="185" width="40" height="18" rx="9" fill="url(#boltGrad)" stroke="#38bdf8" strokeWidth="1.5" />
        <circle cx="134" cy="194" r="4" fill="#0284c7" />
        {/* Strike plate indicator */}
        <rect x="160" y="180" width="12" height="28" rx="2" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
        <rect x="162" y="186" width="6" height="16" fill="#020617" />
      </g>

      {/* Connecting rod visual */}
      <line x1="110" y1="63" x2="110" y2="85" stroke="#38bdf8" strokeWidth="2" strokeDasharray="2 2" />
      <line x1="110" y1="165" x2="110" y2="185" stroke="#38bdf8" strokeWidth="2" strokeDasharray="2 2" />

      {/* Right side info overlay */}
      <g transform="translate(205, 45)">
        <rect x="0" y="0" width="165" height="160" rx="8" fill="#0d1525" stroke="#1e293b" strokeWidth="1" />
        <text x="14" y="28" fill="#f8fafc" fontSize="13" fontWeight="bold">Serrure Multipoints</text>
        <text x="14" y="48" fill="#94a3b8" fontSize="11">• Point haut anti-écartement</text>
        <text x="14" y="68" fill="#94a3b8" fontSize="11">• Pêne dormant central acier</text>
        <text x="14" y="88" fill="#94a3b8" fontSize="11">• Point bas renforcé</text>
        <text x="14" y="108" fill="#94a3b8" fontSize="11">• Verrouillage synchronisé</text>
        <rect x="14" y="124" width="137" height="22" rx="4" fill="#1e293b" />
        <text x="82" y="139" fill="#38bdf8" fontSize="10" textAnchor="middle" fontWeight="bold">PROTECTION DES ACCÈS</text>
      </g>
    </svg>
  );
}

export function PrecisionKeyVisual({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto drop-shadow-md ${className}`}
      aria-label="Clé de sécurité réversible à micro-points"
    >
      <defs>
        <linearGradient id="keyBlade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="35%" stopColor="#f8fafc" />
          <stop offset="70%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <linearGradient id="bowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="50%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      {/* Frame */}
      <rect x="15" y="15" width="370" height="220" rx="12" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />

      {/* Key Bow (Tête de clé ergonomique) */}
      <g transform="translate(45, 60)">
        <rect x="0" y="0" width="85" height="130" rx="20" fill="url(#bowGrad)" stroke="#475569" strokeWidth="2" />
        <rect x="10" y="10" width="65" height="110" rx="14" fill="#090d16" stroke="#334155" strokeWidth="1" />
        
        {/* Key ring hole */}
        <circle cx="42" cy="35" r="14" fill="#020617" stroke="#64748b" strokeWidth="2" />
        
        {/* Brand/Security stamp simulation */}
        <rect x="22" y="70" width="40" height="10" rx="2" fill="#1e293b" />
        <text x="42" y="78" fill="#94a3b8" fontSize="7" textAnchor="middle" letterSpacing="1" fontFamily="sans-serif">SÉCURITÉ</text>
        <rect x="25" y="90" width="34" height="6" rx="1" fill="#334155" />
      </g>

      {/* Key Shoulder (Butée de clé) */}
      <path d="M 130 95 L 155 95 L 155 85 L 170 85 L 170 165 L 155 165 L 155 155 L 130 155 Z" fill="url(#keyBlade)" stroke="#94a3b8" strokeWidth="1" />

      {/* Key Blade (Tige réversible de haute précision) */}
      <g>
        <path
          d="M 170 92 L 325 92 C 345 92 355 105 355 125 C 355 145 345 158 325 158 L 170 158 Z"
          fill="url(#keyBlade)"
          stroke="#e2e8f0"
          strokeWidth="1.5"
        />

        {/* Central Wave/Slider Profile Canal */}
        <path
          d="M 175 125 Q 210 115, 240 128 T 300 122 T 340 125"
          stroke="#475569"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Precision Dimples (Goupilles à micro-points de codage) */}
        {/* Row A */}
        <circle cx="200" cy="106" r="4.5" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
        <circle cx="225" cy="103" r="3.5" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
        <circle cx="250" cy="107" r="5" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
        <circle cx="275" cy="104" r="4" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
        <circle cx="300" cy="106" r="3" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
        <circle cx="320" cy="108" r="4" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />

        {/* Row B (Opposite / Reversible) */}
        <circle cx="205" cy="144" r="3.5" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
        <circle cx="230" cy="146" r="5" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
        <circle cx="255" cy="143" r="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
        <circle cx="280" cy="145" r="3.5" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
        <circle cx="305" cy="142" r="4.5" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
      </g>

      {/* Dimension Line */}
      <path d="M 170 190 H 350" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 3" />
      <path d="M 170 185 V 195 M 350 185 V 195" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="260" y="208" fill="#fef08a" fontSize="11" textAnchor="middle" fontFamily="monospace">CANAUX DE CODAGE MULTIPLES</text>
    </svg>
  );
}

export function DoorShieldVisual({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto drop-shadow-md ${className}`}
      aria-label="Ensemble de poignée blindée et protection de cylindre"
    >
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="50%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="chromeHandle" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#e2e8f0" />
          <stop offset="70%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="brassRosace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
      </defs>

      {/* Base panel */}
      <rect x="15" y="15" width="370" height="220" rx="12" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />

      {/* Solid Wood / Metal Door Texture Simulation */}
      <rect x="40" y="25" width="320" height="200" rx="6" fill="#131d2e" stroke="#1e293b" strokeWidth="1" />
      <line x1="80" y1="25" x2="80" y2="225" stroke="#1a2538" strokeWidth="1.5" />
      <line x1="160" y1="25" x2="160" y2="225" stroke="#1a2538" strokeWidth="1.5" />
      <line x1="240" y1="25" x2="240" y2="225" stroke="#1a2538" strokeWidth="1.5" />
      <line x1="320" y1="25" x2="320" y2="225" stroke="#1a2538" strokeWidth="1.5" />

      {/* High-Security Escutcheon / Armored Plate */}
      <rect x="155" y="35" width="90" height="180" rx="14" fill="url(#shieldGrad)" stroke="#64748b" strokeWidth="2" />
      
      {/* Heavy-Duty Fixing Screws (traversantes) */}
      <circle cx="175" cy="50" r="5" fill="#020617" stroke="#94a3b8" strokeWidth="1.5" />
      <circle cx="225" cy="50" r="5" fill="#020617" stroke="#94a3b8" strokeWidth="1.5" />
      <circle cx="175" cy="200" r="5" fill="#020617" stroke="#94a3b8" strokeWidth="1.5" />
      <circle cx="225" cy="200" r="5" fill="#020617" stroke="#94a3b8" strokeWidth="1.5" />

      {/* Door Handle Assembly */}
      <g>
        {/* Handle Rose base */}
        <circle cx="200" cy="85" r="22" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
        <circle cx="200" cy="85" r="14" fill="#334155" />
        
        {/* Handle lever */}
        <path
          d="M 194 80 L 194 90 L 105 90 C 95 90 90 85 90 80 C 90 75 95 70 105 70 L 194 70 Z"
          fill="url(#chromeHandle)"
          stroke="#cbd5e1"
          strokeWidth="1.5"
        />
        <circle cx="95" cy="80" r="6" fill="#f8fafc" />
      </g>

      {/* Anti-Drill / Anti-Extraction Cylinder Protector (Pastille tournante anti-perçage) */}
      <g>
        <rect x="175" y="125" width="50" height="55" rx="8" fill="#0f172a" stroke="url(#brassRosace)" strokeWidth="2" />
        <circle cx="200" cy="145" r="16" fill="#020617" stroke="#cbd5e1" strokeWidth="1.5" />
        
        {/* Rotating carbide disc keyhole slot */}
        <circle cx="200" cy="145" r="11" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
        <rect x="198" y="137" width="4" height="16" rx="1" fill="#f8fafc" />
      </g>

      {/* Feature Labels */}
      <g>
        <line x1="245" y1="85" x2="300" y2="85" stroke="#f59e0b" strokeWidth="1" />
        <circle cx="300" cy="85" r="3" fill="#f59e0b" />
        <text x="310" y="89" fill="#e2e8f0" fontSize="10" fontWeight="bold">Poignée ergonomique</text>

        <line x1="230" y1="150" x2="295" y2="150" stroke="#f59e0b" strokeWidth="1" />
        <circle cx="295" cy="150" r="3" fill="#f59e0b" />
        <text x="305" y="148" fill="#fef08a" fontSize="10" fontWeight="bold">Protège-cylindre</text>
        <text x="305" y="160" fill="#94a3b8" fontSize="9">Pastille anti-perçage</text>
      </g>
    </svg>
  );
}

export function VisualCard({
  title,
  category,
  description,
  specs,
  visualType,
  onClick,
}: VisualCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-slate-900/80 rounded-xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col p-4 sm:p-5 shadow-lg shadow-black/20"
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
          {category}
        </span>
        <span className="text-xs text-slate-400 font-medium">Matériel de précision</span>
      </div>

      <div className="w-full bg-slate-950/60 rounded-lg p-2 border border-slate-800/80 mb-4 flex items-center justify-center group-hover:border-slate-700 transition-colors">
        {visualType === 'cylinder' && <CylinderVisual />}
        {visualType === 'multipoint' && <MultipointLockVisual />}
        {visualType === 'key' && <PrecisionKeyVisual />}
        {visualType === 'doorShield' && <DoorShieldVisual />}
      </div>

      <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-amber-400 transition-colors mb-2">
        {title}
      </h3>

      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
        {specs.map((spec, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
            <span>{spec}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
