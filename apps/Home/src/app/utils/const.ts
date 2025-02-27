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
