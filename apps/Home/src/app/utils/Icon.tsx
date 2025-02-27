import {
    Bell,
    CalendarDays,
    ChartSpline,
    CircleCheck,
    CreditCard,
    Layers,
    LucideProps,
    PanelsTopLeft,
    Search,
    SquareArrowOutUpRight,
    Target,
    Video,
  } from "lucide-react";
  
  export const ICON = {
    CALENDER_DAYS: (props : LucideProps) => <CalendarDays {...props} />,
    VIDEO: (props : LucideProps) => <Video {...props} />,
    CREDIT_CARD: (props : LucideProps) => <CreditCard {...props} />,
    TARGET: (props : LucideProps) => <Target {...props} />,
    BELL: (props : LucideProps) => <Bell {...props} />,
    CHAT_ANALYSIS: (props : LucideProps) => <ChartSpline {...props} />,
    LAYERS: (props : LucideProps) => <Layers {...props} />,
    WEB: (props : LucideProps) => <PanelsTopLeft {...props} />,
    SQUARE_ARROW_OUT_RIGHT: (props : LucideProps) => <SquareArrowOutUpRight {...props} />,
    SEARCH: (props : LucideProps) => <Search {...props} />,
    CIRCLE_CHECK: (props : LucideProps) => <CircleCheck {...props} />,
  };
  