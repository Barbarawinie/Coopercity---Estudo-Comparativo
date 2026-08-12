export function ArkosLogoInline({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" className={className}>
      <g transform="translate(20, 20)">
        {/* Ícone Símbolo A Estilizado */}
        <path d="M 60,20 L 10,130 L 32,130 L 60,70 L 88,130 L 110,130 Z" fill="#000000"/>
        <path d="M 35,130 C 35,100 85,100 85,130 C 75,115 45,115 35,130 Z" fill="#0E6135"/>
        <rect x="52" y="98" width="16" height="8" rx="2" fill="#0E6135"/>
        {/* Texto ARKOS */}
        <text x="115" y="105" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="900" fontSize="82" fill="#0E6135" letterSpacing="-1">ARKOS</text>
        {/* Texto benefícios */}
        <text x="120" y="145" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="400" fontSize="34" fill="#000000" letterSpacing="6">benefícios</text>
      </g>
    </svg>
  );
}

export function PlenaLogoInline({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 160" className={className}>
      <defs>
        <linearGradient id="plenaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066B3"/>
          <stop offset="50%" stopColor="#8E248D"/>
          <stop offset="100%" stopColor="#00A896"/>
        </linearGradient>
      </defs>
      {/* Símbolo Infinito/Laço */}
      <path d="M 120,40 C 170,10 250,10 260,35 C 270,60 190,80 140,55 C 100,35 40,30 50,55 C 60,80 110,60 120,40 Z" fill="none" stroke="url(#plenaGrad)" strokeWidth="8" strokeLinecap="round"/>
      {/* Texto Plena */}
      <text x="10" y="130" fontFamily="'Segoe UI', Roboto, sans-serif" fontWeight="700" fontSize="75" fill="#0B4893" letterSpacing="-2">Plena</text>
      {/* Texto Saúde */}
      <text x="180" y="85" fontFamily="'Segoe UI', Roboto, sans-serif" fontWeight="300" fontSize="28" fill="#808285">Saúde</text>
    </svg>
  );
}
