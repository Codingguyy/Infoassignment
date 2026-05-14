import ComplianceImage from '../../images/figma12.png'
import HeroImage from '../../figma11.png'
const LogoIcon = ({ size = 46 }) => (
  <svg width={size} height={size * 1.09} viewBox="0 0 46 50" fill="none">
    <circle cx="18" cy="18" r="14" fill="#4356D6" opacity="0.15"/>
    <circle cx="18" cy="18" r="10" fill="#4356D6" opacity="0.3"/>
    <circle cx="18" cy="18" r="6"  fill="#4356D6"/>
    <rect x="13" y="20" width="3" height="4" rx="1" fill="white"/>
    <rect x="17" y="16" width="3" height="8" rx="1" fill="white"/>
    <rect x="21" y="18" width="3" height="6" rx="1" fill="white"/>
    <line x1="26" y1="26" x2="34" y2="36" stroke="#4356D6" strokeWidth="3.5" strokeLinecap="round"/>
    <circle cx="18" cy="18" r="13" stroke="#4356D6" strokeWidth="2.5" fill="none"/>
  </svg>
);
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="6"  width="18" height="2" rx="1" fill="#000"/>
    <rect x="3" y="11" width="18" height="2" rx="1" fill="#000"/>
    <rect x="3" y="16" width="18" height="2" rx="1" fill="#000"/>
  </svg>
);
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5 5L19 19M19 5L5 19" stroke="#4356D6" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
    <path d="M1.5 5L5 8.5L11.5 1.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const StarSVG = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 18 17" fill="#FFAB00">
    <path d="M9 0L11.02 6.22H17.56L12.27 10.06L14.29 16.28L9 12.44L3.71 16.28L5.73 10.06L0.44 6.22H6.98L9 0Z"/>
  </svg>
);


const SearchFeat = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2.2"/>
    <path d="M16.5 16.5L21 21" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M8 11h6M11 8v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const FilingFeat = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="2" width="14" height="19" rx="2" stroke="white" strokeWidth="2"/>
    <path d="M9 8h6M9 12h6M9 16h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const ShieldFeat = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L4 6v6c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V6L12 2z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="1" fill="white"/>
  </svg>
);


const HomeNav     = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" fill="#4356D6"/></svg>;
const InfoNav     = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#111"/><rect x="11" y="10" width="2" height="7" rx="1" fill="white"/><circle cx="12" cy="7.5" r="1.2" fill="white"/></svg>;
const ServicesNav = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="16" cy="16" r="6" fill="#111"/><path d="M14 16h4M16 14v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><path d="M3 6h9M3 10h7M3 14h5" stroke="#111" strokeWidth="2" strokeLinecap="round"/></svg>;
const PricingNav  = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 4H12L20 12L12 20L4 12V4Z" fill="#111"/><circle cx="8.5" cy="8.5" r="1.5" fill="white"/></svg>;
const FaqNav      = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="7" fill="#111"/><path d="M10 7.5C10 6.4 10.9 5.5 12 5.5S14 6.4 14 7.5C14 8.6 13.3 9.4 12.5 9.7C12.2 9.8 12 10.1 12 10.4V11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="13" r="0.8" fill="white"/><ellipse cx="15" cy="18" rx="4" ry="3" fill="#111"/></svg>;
const ContactNav  = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="2" width="14" height="18" rx="2" fill="#111"/><rect x="6" y="6" width="3" height="3" rx="0.5" fill="white" opacity="0.8"/><rect x="6" y="11" width="3" height="3" rx="0.5" fill="white" opacity="0.8"/><rect x="11" y="6.5" width="4" height="1.5" rx="0.5" fill="white" opacity="0.5"/><rect x="11" y="9" width="4" height="1.5" rx="0.5" fill="white" opacity="0.5"/><rect x="11" y="11.5" width="4" height="1.5" rx="0.5" fill="white" opacity="0.5"/><circle cx="17" cy="17" r="4" fill="#111"/><path d="M15 17h4M17 15v4" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>;


const NAV_LINKS = [
  { label:"Home",         active:true  },
  { label:"About Us",     active:false },
  { label:"Our Services", active:false },
  { label:"Pricing",      active:false },
  { label:"FAQ",          active:false },
  { label:"Contact",      active:false },
];
const MOBILE_NAV = [
  { label:"Home",         icon:<HomeNav/>,     active:true  },
  { label:"About Us",     icon:<InfoNav/>,     active:false },
  { label:"Our Services", icon:<ServicesNav/>, active:false },
  { label:"Pricing",      icon:<PricingNav/>,  active:false },
  { label:"FAQ",          icon:<FaqNav/>,      active:false },
  { label:"Contact",      icon:<ContactNav/>,  active:false },
];
const CHECKLIST = [
  "End-To-End Compliance Support",
  "Regulatory Filings Made Simple",
  "Tailored Solutions For Independent Analysts & Firms",
];
const FEATURES = [
  { icon:<SearchFeat/>, title:"Regulatory Clarity",        desc:"We Decode Complex Compliance Rules Into Simple, Actionable Steps." },
  { icon:<FilingFeat/>, title:"Hassle-Free Filings Clarity",desc:"From Registration To Ongoing Reporting—We Manage It End-To-End." },
  { icon:<ShieldFeat/>, title:"Risk Protection",            desc:"Stay Ahead Of Audits, Inspections, And Compliance Gaps With Proactive Support." },
];


const HeroIllustration = () => (
  <img
    src={HeroImage}
    alt="Hero Illustration"
    className="w-full h-full object-contain"
  />
);

const ComplianceIllustration = () => (
  <img
    src={ComplianceImage}
    alt="Compliance Illustration"
    className="w-full h-full object-contain"
  />
);

const NavDrawer = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex" onClick={onClose}>
    <div className="w-12 sm:w-16 h-full bg-black/70 flex-shrink-0"/>
    <div
      className="flex-1 max-w-[327px] min-h-full bg-[#FAFBFF] flex flex-col shadow-2xl"
      onClick={e => e.stopPropagation()}
    >
      
      <div className="flex justify-between items-center px-4 h-[54px] bg-[#FAFBFF] border-b border-gray-100">
        <div className="flex items-center gap-[10px]">
          <LogoIcon size={28}/>
          <span className="font-bold text-[20px] text-black" style={{fontFamily:"'Roboto',sans-serif"}}>Logo</span>
        </div>
        <button onClick={onClose} className="w-8 h-8 flex items-center justify-center bg-transparent border-none cursor-pointer p-0">
          <CloseIcon/>
        </button>
      </div>
      
      <div className="flex flex-col px-4 pt-10 gap-2 flex-1">
        {MOBILE_NAV.map((item,i)=>(
          <button key={i} onClick={onClose}
            className="flex items-center gap-6 px-[10px] py-[10px] bg-transparent border-none cursor-pointer w-full text-left rounded-lg hover:bg-blue-50 transition-colors">
            <span className="w-6 h-6 flex-shrink-0">{item.icon}</span>
            <span className="font-medium text-[18px] leading-[22px] capitalize"
              style={{fontFamily:"'Figtree','Roboto',sans-serif", color:item.active?"#4356D6":"#282828"}}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
      
      <div className="px-4 pb-8 pt-4">
        <button onClick={onClose}
          className="w-full h-[46px] bg-[#4356D6] border border-[#4356D6] rounded-lg font-medium text-[18px] text-white capitalize cursor-pointer hover:bg-[#3244c0] transition-colors"
          style={{fontFamily:"'Roboto',sans-serif"}}>
          Contact Us
        </button>
      </div>
    </div>
  </div>
);


const Navbar = ({ onMenuOpen }) => (
  <nav className="w-full bg-white sticky top-0 z-40 shadow-[0_0_6px_rgba(0,0,0,0.11)]">
    <div className="max-w-[1440px] mx-auto flex justify-between items-center
      h-[54px] px-4
      sm:h-[64px] sm:px-6
      md:h-[80px] md:px-10
      lg:h-[100px] lg:px-[100px]">

      
      <div className="flex items-center gap-2 md:gap-3 lg:gap-4 cursor-pointer flex-shrink-0">
        <LogoIcon size={28} className="sm:hidden"/>
        <LogoIcon size={36} className="hidden sm:block md:hidden"/>
        <LogoIcon size={42} className="hidden md:block lg:hidden"/>
        <LogoIcon size={46} className="hidden lg:block"/>
        <span className="font-bold text-[20px] sm:text-[26px] md:text-[34px] lg:text-[43px] leading-tight text-black"
          style={{fontFamily:"'Roboto',sans-serif"}}>
          Logo
        </span>
      </div>

      
      <div className="hidden lg:flex items-center gap-1">
        {NAV_LINKS.map((l,i)=>(
          <a key={i} href="#"
            className="px-[10px] py-[10px] font-medium text-[18px] leading-[21px] capitalize no-underline rounded-md transition-colors duration-150 hover:text-[#4356D6]"
            style={{fontFamily:"'Roboto',sans-serif", color:l.active?"#4356D6":"#282828"}}>
            {l.label}
          </a>
        ))}
      </div>

      
      <div className="hidden md:flex lg:hidden items-center gap-0">
        {NAV_LINKS.map((l,i)=>(
          <a key={i} href="#"
            className="px-2 py-2 font-medium text-[14px] capitalize no-underline rounded-md transition-colors hover:text-[#4356D6]"
            style={{fontFamily:"'Roboto',sans-serif", color:l.active?"#4356D6":"#282828"}}>
            {l.label}
          </a>
        ))}
      </div>

      
      <button className="hidden lg:flex items-center justify-center gap-[10px] px-[22px] h-[46px] bg-[#4356D6] border border-[#4356D6] rounded-lg cursor-pointer hover:bg-[#3244c0] transition-colors flex-shrink-0">
        <PhoneIcon/>
        <span className="font-medium text-[18px] text-white capitalize" style={{fontFamily:"'Roboto',sans-serif"}}>Contact Us</span>
      </button>

      
      <button className="hidden md:flex lg:hidden items-center justify-center px-4 h-[38px] bg-[#4356D6] border border-[#4356D6] rounded-lg cursor-pointer hover:bg-[#3244c0] transition-colors flex-shrink-0">
        <span className="font-medium text-[14px] text-white capitalize" style={{fontFamily:"'Roboto',sans-serif"}}>Contact Us</span>
      </button>

      
      <button onClick={onMenuOpen} className="flex md:hidden bg-transparent border-none cursor-pointer p-1">
        <MenuIcon/>
      </button>
    </div>
  </nav>
);


const HeroSection = () => (
  <section className="w-full bg-[#FAFBFF] relative overflow-hidden">
    
    <div className="absolute rounded-full pointer-events-none opacity-60"
      style={{width:974,height:974,left:-368,top:80,background:"#F0F2FF",filter:"blur(140px)",zIndex:0}}/>

    <div className="max-w-[1440px] mx-auto relative z-10">

      
      <div className="hidden lg:flex flex-row items-center justify-between px-[72px] xl:px-[100px] min-h-[729px] gap-8">
        
        <div className="flex flex-col gap-[26px] max-w-[606px] pt-[80px] pb-[60px]">
          <h1 className="m-0 font-bold text-[56px] xl:text-[64px] leading-[1.33] capitalize text-black"
            style={{fontFamily:"'Roboto',sans-serif"}}>
            Simplifying<br/>
            <span className="text-[#4356D6] relative inline-block">
              Compliance
              <svg className="absolute w-full" style={{bottom:-6,left:0,height:8}} viewBox="0 0 360 8" fill="none" preserveAspectRatio="none">
                <path d="M2 6 C60 2,180 1,358 4" stroke="#4356D6" strokeWidth="4" strokeLinecap="round" fill="none"/>
              </svg>
            </span>{" "}For<br/>Research Analysts
          </h1>
          <p className="m-0 font-normal text-[18px] leading-[32px] capitalize text-black"
            style={{fontFamily:"'Roboto',sans-serif"}}>
            Stay Focused On Your Insights—We'll Handle The Compliance. Our Expert Solutions Ensure Your Research Practices Meet Every Regulatory Requirement With Confidence And Ease
          </p>
          <div className="flex flex-col gap-[6px]">
            {CHECKLIST.map((item,i)=>(
              <div key={i} className={`flex flex-row gap-4 ${i===2?"items-start":"items-center"}`}>
                <div className={`w-6 h-6 min-w-[24px] bg-[#4356D6] rounded-full flex items-center justify-center ${i===2?"mt-1":""}`}>
                  <CheckIcon/>
                </div>
                <span className="font-normal text-[18px] leading-[32px] capitalize text-black"
                  style={{fontFamily:"'Roboto',sans-serif"}}>{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-6 flex-wrap">
            <button className="flex items-center justify-center px-[22px] h-[46px] min-w-[190px] bg-[#4356D6] border border-[#4356D6] rounded-lg cursor-pointer font-medium text-[18px] text-white capitalize hover:bg-[#3244c0] transition-colors"
              style={{fontFamily:"'Roboto',sans-serif"}}>Get Started</button>
            <button className="flex items-center justify-center px-[22px] h-[46px] min-w-[190px] bg-transparent border-2 border-[#4356D6] rounded-lg cursor-pointer font-medium text-[18px] text-[#4356D6] capitalize hover:bg-blue-50 transition-colors"
              style={{fontFamily:"'Roboto',sans-serif"}}>Book A Consultation</button>
          </div>
        </div>
        
        <div className="relative w-[500px] xl:w-[680px] h-[500px] xl:h-[607px] flex-shrink-0">
          <HeroIllustration/>
          
          <div className="absolute bottom-[90px] left-0 bg-white rounded-[10px] shadow-[0_8px_32px_rgba(67,86,214,0.13)] flex items-center gap-5 px-5 py-4">
            <div className="w-[70px] h-[70px] xl:w-[80px] xl:h-[80px] bg-[#5254CF] rounded-[10px] flex items-center justify-center flex-shrink-0">
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
                <rect x="6" y="16" width="36" height="26" rx="4" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.15"/>
                <path d="M16 16V12C16 10.9 16.9 10 18 10H30C31.1 10 32 10.9 32 12V16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="6" y1="28" x2="42" y2="28" stroke="white" strokeWidth="2.5"/>
                <circle cx="24" cy="28" r="3" fill="white" opacity="0.7"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-[18px] xl:text-[20px] text-black capitalize" style={{fontFamily:"'Roboto',sans-serif"}}>Trusted by</span>
              <span className="font-extrabold text-[36px] xl:text-[40px] leading-[1.1] text-[#4356D6]" style={{fontFamily:"'Roboto',sans-serif"}}>250+</span>
              <span className="font-medium text-[18px] xl:text-[20px] text-black capitalize" style={{fontFamily:"'Roboto',sans-serif"}}>Professionals</span>
            </div>
          </div>
          
          <div className="absolute right-4 top-[220px] xl:top-[236px] bg-white/80 backdrop-blur-xl rounded-[10px] shadow-[0_8px_32px_rgba(67,86,214,0.10)] flex items-center gap-4 px-4 py-4">
            <span className="font-semibold text-[36px] xl:text-[40px] text-[#4356D6] flex-shrink-0"
              style={{fontFamily:"'Inter','Roboto',sans-serif"}}>4.8</span>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">{[0,1,2,3,4].map(i=><StarSVG key={i} size={16}/>)}</div>
              <span className="font-semibold text-[16px] xl:text-[20px] text-black whitespace-nowrap"
                style={{fontFamily:"'Roboto',sans-serif"}}>Clients Rating</span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="hidden md:flex lg:hidden flex-row items-center justify-between px-10 min-h-[620px] gap-6 py-10">
       
        <div className="flex flex-col gap-5 max-w-[380px]">
          <h1 className="m-0 font-bold text-[38px] leading-[1.3] capitalize text-black"
            style={{fontFamily:"'Roboto',sans-serif"}}>
            Simplifying{" "}
            <span className="text-[#4356D6] relative inline-block">
              Compliance
              <svg className="absolute w-full" style={{bottom:-4,left:0,height:6}} viewBox="0 0 300 6" fill="none" preserveAspectRatio="none">
                <path d="M2 4 C50 1,200 1,298 3" stroke="#4356D6" strokeWidth="3" strokeLinecap="round" fill="none"/>
              </svg>
            </span>{" "}For Research Analysts
          </h1>
          <p className="m-0 font-normal text-[16px] leading-[28px] capitalize text-black"
            style={{fontFamily:"'Roboto',sans-serif"}}>
            Stay Focused On Your Insights—We'll Handle The Compliance. Our Expert Solutions Ensure Your Research Practices Meet Every Regulatory Requirement With Confidence And Ease
          </p>
          <div className="flex flex-col gap-[6px]">
            {CHECKLIST.map((item,i)=>(
              <div key={i} className={`flex flex-row gap-3 ${i===2?"items-start":"items-center"}`}>
                <div className={`w-[22px] h-[22px] min-w-[22px] bg-[#4356D6] rounded-full flex items-center justify-center ${i===2?"mt-1":""}`}>
                  <CheckIcon/>
                </div>
                <span className="font-normal text-[15px] leading-[26px] capitalize text-black"
                  style={{fontFamily:"'Roboto',sans-serif"}}>{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-3 flex-wrap">
            <button className="flex items-center justify-center px-5 h-[44px] bg-[#4356D6] border border-[#4356D6] rounded-lg cursor-pointer font-medium text-[16px] text-white capitalize hover:bg-[#3244c0] transition-colors"
              style={{fontFamily:"'Roboto',sans-serif"}}>Get Started</button>
            <button className="flex items-center justify-center px-5 h-[44px] bg-transparent border-2 border-[#4356D6] rounded-lg cursor-pointer font-medium text-[16px] text-[#4356D6] capitalize hover:bg-blue-50 transition-colors"
              style={{fontFamily:"'Roboto',sans-serif"}}>Book A Consultation</button>
          </div>
        </div>
        
        <div className="relative w-[340px] h-[380px] flex-shrink-0">
          <HeroIllustration/>
          
          <div className="absolute bottom-10 left-0 bg-white rounded-[10px] shadow-[0_6px_24px_rgba(67,86,214,0.13)] flex items-center gap-3 px-3 py-3">
            <div className="w-[52px] h-[52px] bg-[#5254CF] rounded-[8px] flex items-center justify-center flex-shrink-0">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <rect x="6" y="16" width="36" height="26" rx="4" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.15"/>
                <path d="M16 16V12C16 10.9 16.9 10 18 10H30C31.1 10 32 10.9 32 12V16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="6" y1="28" x2="42" y2="28" stroke="white" strokeWidth="2.5"/>
                <circle cx="24" cy="28" r="3" fill="white" opacity="0.7"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-[13px] text-black capitalize" style={{fontFamily:"'Roboto',sans-serif"}}>Trusted by</span>
              <span className="font-extrabold text-[26px] leading-[1.1] text-[#4356D6]" style={{fontFamily:"'Roboto',sans-serif"}}>250+</span>
              <span className="font-medium text-[13px] text-black capitalize" style={{fontFamily:"'Roboto',sans-serif"}}>Professionals</span>
            </div>
          </div>
          
          <div className="absolute right-2 top-[160px] bg-white/85 backdrop-blur-xl rounded-[10px] shadow-[0_6px_24px_rgba(67,86,214,0.10)] flex items-center gap-3 px-3 py-3">
            <span className="font-semibold text-[26px] text-[#4356D6] flex-shrink-0"
              style={{fontFamily:"'Inter','Roboto',sans-serif"}}>4.8</span>
            <div className="flex flex-col gap-1">
              <div className="flex gap-[2px]">{[0,1,2,3,4].map(i=><StarSVG key={i} size={13}/>)}</div>
              <span className="font-semibold text-[13px] text-black whitespace-nowrap"
                style={{fontFamily:"'Roboto',sans-serif"}}>Clients Rating</span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="hidden sm:flex md:hidden flex-col items-center px-6 py-8 gap-6">
        <div className="w-full text-center">
          <h1 className="m-0 font-bold text-[36px] leading-[48px] capitalize text-black"
            style={{fontFamily:"'Roboto',sans-serif"}}>
            Simplifying <span className="text-[#4356D6]">Compliance</span> For Research Analysts
          </h1>
          <div className="w-[200px] h-[4px] bg-[#4356D6] rounded-sm mx-auto mt-2"/>
        </div>
        <p className="m-0 text-[17px] leading-[30px] capitalize text-center text-black max-w-[440px]"
          style={{fontFamily:"'Roboto',sans-serif"}}>
          Stay Focused On Your Insights—We'll Handle The Compliance. Our Expert Solutions Ensure Your Research Practices Meet Every Regulatory Requirement With Confidence And Ease
        </p>
        <div className="flex flex-col gap-[6px] w-full max-w-[400px]">
          {CHECKLIST.map((item,i)=>(
            <div key={i} className={`flex flex-row gap-4 ${i===2?"items-start":"items-center"}`}>
              <div className={`w-6 h-6 min-w-[24px] bg-[#4356D6] rounded-full flex items-center justify-center ${i===2?"mt-1":""}`}>
                <CheckIcon/>
              </div>
              <span className="text-[17px] leading-[30px] capitalize text-black" style={{fontFamily:"'Roboto',sans-serif"}}>{item}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-4 w-full max-w-[400px]">
          <button className="flex-1 h-[46px] bg-[#4356D6] border border-[#4356D6] rounded-lg font-medium text-[17px] text-white capitalize cursor-pointer hover:bg-[#3244c0]"
            style={{fontFamily:"'Roboto',sans-serif"}}>Get Started</button>
          <button className="flex-1 h-[46px] bg-transparent border-2 border-[#4356D6] rounded-lg font-medium text-[17px] text-[#4356D6] capitalize cursor-pointer hover:bg-blue-50"
            style={{fontFamily:"'Roboto',sans-serif"}}>Book Now</button>
        </div>
       
        <div className="relative w-full max-w-[440px] h-[320px]">
          <HeroIllustration/>
          <div className="absolute left-6 bottom-6 bg-white rounded-[10px] shadow-[0_4px_16px_rgba(67,86,214,0.13)] flex items-center gap-3 px-3 py-3">
            <div className="w-10 h-10 bg-[#5254CF] rounded-md flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
                <rect x="6" y="16" width="36" height="26" rx="4" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.15"/>
                <path d="M16 16V12C16 10.9 16.9 10 18 10H30C31.1 10 32 10.9 32 12V16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <line x1="6" y1="28" x2="42" y2="28" stroke="white" strokeWidth="3"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-[11px] text-black" style={{fontFamily:"'Roboto',sans-serif"}}>Trusted by</span>
              <span className="font-extrabold text-[22px] leading-[1.1] text-[#4356D6]" style={{fontFamily:"'Roboto',sans-serif"}}>250+</span>
              <span className="font-medium text-[11px] text-black" style={{fontFamily:"'Roboto',sans-serif"}}>Professionals</span>
            </div>
          </div>
          <div className="absolute right-2 top-[120px] bg-white/85 backdrop-blur-xl rounded-[10px] shadow-[0_4px_16px_rgba(67,86,214,0.10)] flex items-center gap-3 px-3 py-2">
            <span className="font-semibold text-[22px] text-[#4356D6]"
              style={{fontFamily:"'Inter','Roboto',sans-serif"}}>4.8</span>
            <div className="flex flex-col gap-1">
              <div className="flex gap-[2px]">{[0,1,2,3,4].map(i=><StarSVG key={i} size={11}/>)}</div>
              <span className="font-medium text-[11px] text-black whitespace-nowrap" style={{fontFamily:"'Roboto',sans-serif"}}>Clients Rating</span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex sm:hidden flex-col items-center px-4 py-6 gap-6">
        <div className="w-full text-center">
          <h1 className="m-0 font-bold text-[32px] leading-[44px] capitalize text-black"
            style={{fontFamily:"'Roboto',sans-serif"}}>
            Simplifying <span className="text-[#4356D6]">Compliance</span> For Research Analysts
          </h1>
          <div className="w-[180px] h-[4px] bg-[#4356D6] rounded-sm mx-auto mt-1"/>
        </div>
        <p className="m-0 text-[16px] leading-[28px] capitalize text-center text-black"
          style={{fontFamily:"'Roboto',sans-serif"}}>
          Stay Focused On Your Insights—We'll Handle The Compliance. Our Expert Solutions Ensure Your Research Practices Meet Every Regulatory Requirement With Confidence And Ease
        </p>
        <div className="flex flex-col gap-[6px] w-full max-w-[315px]">
          {CHECKLIST.map((item,i)=>(
            <div key={i} className={`flex flex-row gap-4 ${i===2?"items-start":"items-center"}`}>
              <div className={`w-6 h-6 min-w-[24px] bg-[#4356D6] rounded-full flex items-center justify-center ${i===2?"mt-1":""}`}>
                <CheckIcon/>
              </div>
              <span className="text-[16px] leading-[28px] capitalize text-black" style={{fontFamily:"'Roboto',sans-serif"}}>{item}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 w-full max-w-[343px]">
          <button className="w-full h-[46px] bg-[#4356D6] border border-[#4356D6] rounded-lg font-medium text-[17px] text-white capitalize cursor-pointer"
            style={{fontFamily:"'Roboto',sans-serif"}}>Get Started</button>
          <button className="w-full h-[46px] bg-transparent border-2 border-[#4356D6] rounded-lg font-medium text-[17px] text-[#4356D6] capitalize cursor-pointer"
            style={{fontFamily:"'Roboto',sans-serif"}}>Book A Consultation</button>
        </div>
        <div className="relative w-full max-w-[350px] h-[280px]">
          <HeroIllustration/>
          <div className="absolute left-8 bottom-6 bg-white rounded-[10px] shadow-[0_4px_16px_rgba(67,86,214,0.13)] flex items-center gap-[10px] px-[10px] py-2">
            <div className="w-8 h-8 bg-[#5254CF] rounded-md flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
                <rect x="6" y="16" width="36" height="26" rx="4" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.15"/>
                <path d="M16 16V12C16 10.9 16.9 10 18 10H30C31.1 10 32 10.9 32 12V16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <line x1="6" y1="28" x2="42" y2="28" stroke="white" strokeWidth="3"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-[8px] text-black" style={{fontFamily:"'Roboto',sans-serif"}}>Trusted By</span>
              <span className="font-extrabold text-[17px] text-[#4356D6]" style={{fontFamily:"'Roboto',sans-serif"}}>250+</span>
              <span className="font-medium text-[8px] text-black" style={{fontFamily:"'Roboto',sans-serif"}}>Professionals</span>
            </div>
          </div>
          <div className="absolute right-1 top-[120px] bg-white/80 backdrop-blur-xl rounded-[10px] shadow-[0_4px_16px_rgba(67,86,214,0.10)] flex items-center gap-2 px-2 py-2">
            <span className="font-semibold text-[20px] text-[#4356D6]"
              style={{fontFamily:"'Inter','Roboto',sans-serif"}}>4.8</span>
            <div className="flex flex-col gap-1">
              <div className="flex gap-[2px]">{[0,1,2,3,4].map(i=><StarSVG key={i} size={9}/>)}</div>
              <span className="font-medium text-[9px] text-black whitespace-nowrap" style={{fontFamily:"'Roboto',sans-serif"}}>Clients Rating</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);


const ComplianceSection = () => (
  <section className="w-full bg-white">
    <div className="max-w-[1440px] mx-auto
      px-4 py-10
      sm:px-6 sm:py-12
      md:px-10 md:py-14
      lg:px-[100px] lg:py-[50px]">

      
      <div className="hidden lg:flex flex-col gap-[36px]">
        <div className="flex flex-row items-center gap-[33px]">
          <h2 className="flex-1 m-0 font-semibold text-[42px] xl:text-[48px] leading-[1.45] capitalize text-black"
            style={{fontFamily:"'Roboto',sans-serif"}}>
            Why Compliance Matters For Research Analysts
          </h2>
          <p className="flex-1 m-0 font-normal text-[18px] leading-[32px] capitalize text-black"
            style={{fontFamily:"'Roboto',sans-serif"}}>
            In Today's Regulatory Environment, Even A Small Oversight Can Lead To Penalties, Reputational Risks, And Loss Of Client Trust. We Help Research Analysts And Firms Navigate Complex Compliance Requirements So They Can Focus On Delivering High-Quality Research Without Worry.
          </p>
        </div>
        <div className="flex flex-row items-center gap-[52px]">
          <div className="w-[500px] xl:w-[594px] h-[500px] xl:h-[594px] flex-shrink-0">
            <ComplianceIllustration/>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-8 xl:gap-[40px]">
            {FEATURES.map((f,idx)=>(
              <div key={idx} className="flex flex-row items-start gap-[26px] p-5 bg-[#FAFBFF] border border-[#E2E7FF] rounded-lg">
                <div className="w-9 h-9 min-w-[36px] bg-[#4356D6] rounded-md flex items-center justify-center">
                  {f.icon}
                </div>
                <div className="flex flex-col gap-[11px]">
                  <span className="font-semibold text-[22px] xl:text-[24px] leading-[32px] capitalize text-black"
                    style={{fontFamily:"'Roboto',sans-serif"}}>{f.title}</span>
                  <span className="font-normal text-[17px] xl:text-[18px] leading-[32px] capitalize text-black"
                    style={{fontFamily:"'Roboto',sans-serif"}}>{f.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="hidden md:flex lg:hidden flex-col gap-8">
        <div className="flex flex-row items-start gap-8">
          <h2 className="flex-1 m-0 font-semibold text-[30px] leading-[1.4] capitalize text-black"
            style={{fontFamily:"'Roboto',sans-serif"}}>
            Why <span className="text-[#4356D6]">Compliance Matters</span> For Research Analysts
          </h2>
          <p className="flex-1 m-0 font-normal text-[15px] leading-[28px] capitalize text-black"
            style={{fontFamily:"'Roboto',sans-serif"}}>
            In Today's Regulatory Environment, Even A Small Oversight Can Lead To Penalties, Reputational Risks, And Loss Of Client Trust. We Help Research Analysts And Firms Navigate Complex Compliance Requirements So They Can Focus On Delivering High-Quality Research Without Worry.
          </p>
        </div>
        <div className="flex flex-row items-center gap-8">
          <div className="w-[300px] h-[300px] flex-shrink-0">
            <ComplianceIllustration/>
          </div>
          <div className="flex-1 flex flex-col gap-5">
            {FEATURES.map((f,idx)=>(
              <div key={idx} className="flex flex-row items-start gap-4 p-4 bg-[#FAFBFF] border border-[#E2E7FF] rounded-lg">
                <div className="w-9 h-9 min-w-[36px] bg-[#4356D6] rounded-md flex items-center justify-center">
                  {f.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-[16px] leading-[24px] capitalize text-black"
                    style={{fontFamily:"'Roboto',sans-serif"}}>{f.title}</span>
                  <span className="font-normal text-[14px] leading-[24px] capitalize text-black"
                    style={{fontFamily:"'Roboto',sans-serif"}}>{f.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="hidden sm:flex md:hidden flex-col gap-8">
        <div className="text-center">
          <h2 className="m-0 font-semibold text-[30px] leading-[42px] capitalize text-black"
            style={{fontFamily:"'Roboto',sans-serif"}}>
            Why <span className="text-[#4356D6]">Compliance Matters</span> For Research Analysts
          </h2>
        </div>
        <p className="m-0 font-normal text-[16px] leading-[28px] capitalize text-center text-black max-w-[440px] mx-auto"
          style={{fontFamily:"'Roboto',sans-serif"}}>
          In Today's Regulatory Environment, Even A Small Oversight Can Lead To Penalties, Reputational Risks, And Loss Of Client Trust. We Help Research Analysts And Firms Navigate Complex Compliance Requirements So They Can Focus On Delivering High-Quality Research Without Worry.
        </p>
        <div className="w-full max-w-[440px] h-[280px] mx-auto">
          <ComplianceIllustration/>
        </div>
        <div className="flex flex-col gap-5 max-w-[480px] mx-auto w-full">
          {FEATURES.map((f,idx)=>(
            <div key={idx} className="flex flex-row items-start gap-4 p-4 bg-[#FAFBFF] border border-[#E2E7FF] rounded-lg">
              <div className="w-9 h-9 min-w-[36px] bg-[#4356D6] rounded-md flex items-center justify-center">
                {f.icon}
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[18px] leading-[28px] capitalize text-black"
                  style={{fontFamily:"'Roboto',sans-serif"}}>{f.title}</span>
                <span className="font-normal text-[15px] leading-[26px] capitalize text-black"
                  style={{fontFamily:"'Roboto',sans-serif"}}>{f.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="flex sm:hidden flex-col gap-7">
        <h2 className="m-0 font-semibold text-[28px] leading-[40px] text-center capitalize text-black"
          style={{fontFamily:"'Roboto',sans-serif"}}>
          Why <span className="text-[#4356D6]">Compliance Matters</span> For Research Analysts
        </h2>
        <p className="m-0 font-normal text-[16px] leading-[28px] text-center capitalize text-black"
          style={{fontFamily:"'Roboto',sans-serif"}}>
          In Today's Regulatory Environment, Even A Small Oversight Can Lead To Penalties, Reputational Risks, And Loss Of Client Trust. We Help Research Analysts And Firms Navigate Complex Compliance Requirements So They Can Focus On Delivering High-Quality Research Without Worry.
        </p>
        <div className="w-full h-[260px]">
          <ComplianceIllustration/>
        </div>
        <div className="flex flex-col gap-5">
          {FEATURES.map((f,idx)=>(
            <div key={idx} className="flex flex-row items-start gap-4 p-4 bg-[#FAFBFF] border border-[#E2E7FF] rounded-lg">
              <div className="w-9 h-9 min-w-[36px] bg-[#4356D6] rounded-md flex items-center justify-center">
                {f.icon}
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[20px] leading-[28px] capitalize text-black"
                  style={{fontFamily:"'Roboto',sans-serif"}}>{f.title}</span>
                <span className="font-normal text-[16px] leading-[28px] capitalize text-black"
                  style={{fontFamily:"'Roboto',sans-serif"}}>{f.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);


export default function IntegratedPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(()=>{
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return ()=>{ document.body.style.overflow = ""; };
  },[menuOpen]);

  return (
    <div className="w-full min-h-screen bg-white" style={{fontFamily:"'Roboto',sans-serif"}}>
      {menuOpen && <NavDrawer onClose={()=>setMenuOpen(false)}/>}
      <Navbar onMenuOpen={()=>setMenuOpen(true)}/>
      <HeroSection/>
      <ComplianceSection/>
    </div>
  );
}

    
