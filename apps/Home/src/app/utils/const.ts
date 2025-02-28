import { LucideProps } from "lucide-react"
import { ICON } from "./Icon"



export const FOOTER_CONST = [
    {
        id: 1,
        title: "For Customers",
        children: [
            {
                id: 1,
                name: "|  Find a Practitioner"
            },
            {
                id: 2,
                name: "Book an Appointment"
            },
            {
                id: 3,
                name: "Make Payment"
            },
            {
                id: 4,
                name: "Live Consultant"
            },
            {
                id: 5,
                name: "Refund "
            },
            {
                id: 6,
                name: "Shop"
            },
            {
                id: 7,
                name: "Resources"
            },

        ]
    },
    {
        id: 2,
        title: "For Practitioners",
        children: [
            {
                id: 1,
                name: "Profile Setup"
            },
            {
                id: 2,
                name: "Organization Setup"
            },
            {
                id: 3,
                name: "Create Schedule"
            },
            {
                id: 4,
                name: "Live Consultant"
            },
            {
                id: 5,
                name: "Collaboration"
            },
            {
                id: 6,
                name: "Withdraw"
            },
            {
                id: 7,
                name: "Pay Staff"
            },
            {
                id: 8,
                name: "QR Code"
            },
            {
                id: 9,
                name: "Booking page"
            },
            {
                id: 10,
                name: "Business Tools"
            },

        ]
    },
    {
        id: 3,
        title: "Resources",
        children: [
            {
                id: 1,
                name: "Plans"
            },
            {
                id: 2,
                name: "Blog"
            },
            {
                id: 3,
                name: "Community"
            },
            {
                id: 4,
                name: "FAQ"
            },
            {
                id: 5,
                name: "Reviews"
            },
            {
                id: 6,
                name: "Refund & Return"
            },
            {
                id: 7,
                name: "Documentations"
            },
            {
                id: 8,
                name: "Road Map"
            },

        ]
    },
    {
        id: 4,
        title: "Company",
        children: [
            {
                id: 1,
                name: "About US"
            },
            {
                id: 2,
                name: "Contact Us"
            },
            {
                id: 3,
                name: "Career"
            },
            {
                id: 4,
                name: "Support Center"
            },
            {
                id: 5,
                name: "Affiliate Program"
            },
            {
                id: 6,
                name: "Trust and Safety"
            },
        ]
    }
]

export const CATEGORIES = [
    "Doctor", "Lawyer", "Spa & Salon", "Therapist",
    "Fitness", "Instructor", "Consultancy"
]

export const FEATURES = [
    {
        id: 1,
        title: "Schedule & Booking",
        icon: (props: LucideProps) => ICON.CALENDER_DAYS(props),
        description: "Create, schedule and send your clients to your Ambel booking page, where they can book on any device."
    },
    {
        id: 2,
        title: "Live Consultant",
        icon: (props: LucideProps) => ICON.VIDEO(props),
        description: "Integrate meet, zoom and loom to communicate with your customers or clients in via video conference."
    },
    {
        id: 3,
        title: "Payments",
        icon: (props: LucideProps) => ICON.CREDIT_CARD(props),
        description: "Send custom invoices, take POS and cash payment also accept credit or debit card payment from anywhere."
    },
    {
        id: 4,
        title: "Customer Tracking",
        icon: (props: LucideProps) => ICON.TARGET(props),
        description: "Manage customer, send marketing email and message, create, records and track via note, case study."
    },
    {
        id: 5,
        title: "Notification",
        icon: (props: LucideProps) => ICON.BELL(props),
        description: "Automatically notify your clients and practitioners with reminder via SMS and email by single setup."
    },
    {
        id: 6,
        title: "Website Builder",
        icon: (props: LucideProps) => ICON.WEB(props),
        description: "Get a free website, design and customize your booking website for your business without any code."
    },
    {
        id: 7,
        title: "Reports",
        icon: (props: LucideProps) => ICON.CHAT_ANALYSIS(props),
        description: "Powerful data and graphs at your fingertips to monitor day to day activities and generate reports."
    },
    {
        id: 8,
        title: "Resources",
        icon: (props: LucideProps) => ICON.LAYERS(props),
        description: "Create and share resources like Prescriptions, Documentations, Medical Charts and Videos."
    },
]


export const PROFESSIONS = [
    'Doctor', 'Lawyer', 'Therapist', 'Barber', 'Spa', 'Med Spa', 'Psychiatrist', 'Consultancy firm'
];


export const CARDS = [
    {
        id: 1,
        title: "One brand in one easy to use \n system, across all your locations",
        desc: "Give customers a consistent brand experience, online and in person. With \n one source for all your business information, you'll unify your guest data, \n business operations, marketing efforts, and more from one login area.",
        img: "/Cards/map-1.svg",
        color: "#00B0AD",
        tColor: "#FFFFFF"
    },
    {
        id: 2,
        title: "Invite unlimited team members \n and assign custom roles and \n permissions",
        desc: "This feature enables organizations to efficiently manage team members \n across one or multiple locations. Roles can be assigned and customized to \n control access, ensuring that team members only view or edit information \n and resources relevant to their roles.",
        img: "/Cards/form-2.svg",
        color: "#327FF0",
        tColor: "#FFFFFF"
    },
    {
        id: 3,
        title: "Securely manage and organize \n payments: Cash, Debit, Credit",
        desc: "Customers can securely payment via online credit, debit card, In person \n POS, Tap to pay and in app wallet. Also can record of cash and other \n gateway payment for reporting. Ambel integrates with gateways like \n Stripe, Clover, Square, and PayPal, providing comprehensive support for \n all your accounting and bookkeeping needs.",
        img: "/Cards/payment-3.svg",
        color: "#0046B0",
        tColor: "#FFFFFF"
    },
    {
        id: 4,
        title: "Third party apps Integrations \n tailored your business",
        desc: "Connect tools like Google Meet, Zoom, Loom, Zapier, Zendesk, and \n WhatsApp to streamline operations. Ambel also integrates with payment \n gateways such as Stripe, PayPal, Clover, and Square, allowing you to \n access all features in one convenient platform.",
        img: "/Cards/Intrgration-4.svg",
        color: "#EFF4FC",
        tColor: "#101828"
    },
    {
        id: 5,
        title: "Create a free website and \n start selling your products \n online.",
        desc: "With our Online Shop and Inventory Management System, you can \n easily manage inventory, streamline e-commerce operations, and \n provide an exceptional shopping experience for your customers. \n Enjoy full e-commerce functionality to manage products, orders, \n and inventory seamlessly.",
        img: "/Cards/Shopping-5.svg",
        color: "#FD9F00",
        tColor: "#101828"

    },
    {
        id: 6,
        title: "Boost Sales with Gift Cards, \n Packages, and Memberships",
        desc: "Enhance customer loyalty and increase revenue by offering gift cards for \n easy gifting, tailored packages that add value, and membership \n programs that reward repeat purchases. These options attract new \n customers, encourage larger purchases, and build a loyal customer base.",
        img: "/Cards/Gift-green-6.svg",
        color: "#79A78A",
        tColor: "#FFFFFF"
    },
    {
        id: 7,
        title: "Boost Sales with Gift Cards, \n Packages, and Memberships",
        desc: "Enhance customer loyalty and increase revenue by offering gift cards for \n easy gifting, tailored packages that add value, and membership \n programs that reward repeat purchases. These options attract new \n customers, encourage larger purchases, and build a loyal customer base.",
        img: "/Cards/Gift-red-7.svg",
        color: "#E41728",
        tColor: "#FFFFFF"
    },
    {
        id: 8,
        title: "Unlimited SMS and Email Reminders, \n Notifications, and Marketing",
        desc: "Stay connected with your customers effortlessly with unlimited SMS and email \n options. Send reminders for upcoming bookings, real-time notifications, and \n targeted marketing emails to keep your audience engaged and informed, all \n without limits. Boost customer satisfaction and retention while promoting your \n brand effectively via your own business email.",
        img: "/Cards/SMS-8.svg",
        color: "#EFFCFA",
        tColor: "#101828"
    },
    {
        id: 9,
        title: "Create an Attractive and \n Customized Booking Page \n with your own domain",
        desc: "Give your customers a seamless booking experience by personalizing \n your booking page. Customize colors, layout, and branding to reflect \n your business’s unique style, and add features like easy navigation, \n clear time slots, and engaging visuals to make booking effortless and \n enjoyable. Even build own website with custom domain.",
        img: "/Cards/widget-9.svg",
        color: "#19525A",
        tColor: "#FFFFFF"
    },
    {
        id: 10,
        title: "Streamline Daily Operations \n with E-Forms, Prescriptions, \n and Med Charts",
        desc: "Digitize and organize your daily tasks efficiently with our all-in-one \n platform. Use customizable E-forms for patient intake and documentation, \n generate prescriptions instantly for seamless medication management, \n and maintain accurate med charts to monitor patient treatment plans. \n Simplify workflows, reduce paperwork, and ensure accurate, secure \n record-keeping for enhanced operational efficiency and patient care.",
        img: "/Cards/Resource-10.svg",
        color: "#DDF0FF",
        tColor: "#101828"
    },
    {
        id: 11,
        title: "Comprehensive Dashboard \n with Real-Time Data Insights",
        desc: "Access a powerful dashboard with real-time data visualization to \n monitor key metrics, track performance, and make instant, informed \n decisions. Gain valuable insights with dynamic charts and analytics, \n all in one intuitive interface.",
        img: "/Cards/Dashboard-11.svg",
        color: "#FCF8EF",
        tColor: "#101828"
    },
]


export const TAGS = [
    "Jane",
    "Calendly",
    "Cal.com",
    "acuity",
    "Square appointment",
    "Simplybook.me",
    "Zenoti",
    "Appointy",
    "Set More",
    "Honey Book",
  ];