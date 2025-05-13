import {
  HiOutlineSparkles as SparklesIcon,
  HiAcademicCap as CapIcon,
  HiOutlineCode,
  HiClock as ClockIcon,
} from 'react-icons/hi'
import {
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
  FaHandshake,
  FaRegHospital,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import {
  BsRocketTakeoff
} from "react-icons/bs";

export const global = {
  name: 'Neurovances',
  phone: '+91 00000 00000',
  timing: '9:00am to 5:00pm',
  address: '500 Mission Street, Suite 300, San Francisco, CA 94105',
  location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019409258644!2d-122.39997268468147!3d37.78970897975724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e5c4a1c3%3A0x9a24ec2b872b90e7!2s500%20Mission%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1745981645221!5m2!1sen!2sus",
 email: "contact@neurovance.tech"
}
export const navigations = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About Me",
    url: "/about",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "FAQuestions",
    url: "/faq",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
];
export const mobileMoreItems = [
  {
    name: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    name: "Terms And Conditions",
    url: "/terms",
  },
];
export const footer = {
  "Support": [
    { text: "Call Us On " + global.phone },
    { text: "Email Us On " + global.email },
  ],
  "Useful Links": [
    { text: "About Us", url: "/about" },
    { text: "Services", url: "/services" },
    { text: "Terms & Conditions", url: "/terms" },
    { text: "Privacy Policy", url: "/privacy-policy" },
    { text: "FAQuestions", url: "/faq" },
  ],
  "Address": [
    { text: global.address },
  ],
};
export const timetable = {
  "Morning ": "6:00 AM - 10:00 AM",
  "Evening ": "4:00 PM - 10:00 PM",
}

export const socials = [
  {
    icon: <FaEnvelope className="w-[16px] h-[16px]" />,
    url: "mailto:medexperts@gmail.com",
  },
  {
    icon: <FaInstagram className="w-[16px] h-[16px]" />,
    url: "https://instagram.com/1step_physio",
  },
  {
    icon: <FaTwitter className="w-[16px] h-[16px]" />,
    url: "https://twitter.com/medexperts",
  },
  {
    icon: <FaWhatsapp className="w-[16px] h-[16px]" />,
    url: "/",
  },
];


export const services = [
  {
    image: "/images/services/3.jpg",
    title: "Robotic System Design",
    description:
      "We specialize in designing biomimetic robotic systems inspired by nature, combining mechanical engineering, AI, and sensor integration for advanced mobility and adaptability.",
  },
  {
    image: "/images/services/5.jpg",
    title: "Embedded Systems Development",
    description:
      "Our team develops high-performance embedded systems to control and power biomimetic robots, ensuring efficiency, real-time response, and seamless integration of components.",
  },
  {
    image: "/images/services/6.jpg",
    title: "AI & Machine Learning Integration",
    description:
      "We implement AI-driven algorithms that enable adaptive behavior and learning in robotic platforms, enhancing autonomy and interaction in dynamic environments.",
  },
  {
    image: "/images/services/4.jpg",
    title: "Sensor Fusion & Control Systems",
    description:
      "We develop multi-modal sensor fusion systems to give robots enhanced perception, enabling precise movement, obstacle detection, and environmental awareness.",
  },
  {
    image: "/images/services/1.jpg",
    title: "Prototyping & Mechanical Engineering",
    description:
      "From concept to prototype, we offer rapid design and engineering of robotic limbs, actuators, and biologically inspired mechanisms for real-world applications.",
  },
  {
    image: "/images/services/7.png",
    title: "Human-Robot Interaction (HRI)",
    description:
      "Our HRI research and development ensure robots are designed to collaborate safely and intuitively with humans across industries including healthcare, defense, and manufacturing.",
  },
  {
    image: "/images/services/8.jpg",
    title: "Simulation & Digital Twins",
    description:
      "We build physics-based simulation environments and digital twins for virtual testing, performance optimization, and predictive maintenance of robotic systems.",
  },
  {
    image: "/images/services/2.png",
    title: "Autonomous Navigation Systems",
    description:
      "We develop navigation algorithms for biomimetic robots to autonomously move through unstructured environments, combining path planning, SLAM, and decision-making.",
  },
  {
    image: "/images/services/9.png",
    title: "Robotics Consulting",
    description:
      "Our consulting team assists with R&D strategy, feasibility analysis, and market readiness for organizations exploring or developing robotics-based solutions.",
  },
  {
    image: "/images/services/10.jpg",
    title: "Maintenance & Lifecycle Support",
    description:
      "We offer end-to-end lifecycle management, including diagnostics, firmware updates, and mechanical servicing to keep your robotic platforms operational and future-ready.",
  },
];
export const features = [
  {
    icon: <BsRocketTakeoff />,
    name: "Our Vision",
    description:
      "At Neurovance, our vision is to revolutionize robotics by mimicking nature’s intelligence, creating adaptive, efficient, and lifelike machines that elevate human potential.",
  },
  {
    icon: <FaHandshake />,
    name: "Our Responsibility",
    description:
      "We are committed to ethical innovation, sustainable design, and collaborative partnerships to build robotic solutions that serve humanity and respect the environment.",
  },
  {
    icon: <FaRegHospital />,
    name: "Our Philosophy",
    description:
      "Inspired by biology, driven by technology—Neurovance believes that the future of robotics lies in learning from nature to solve complex human challenges.",
  },
];
export const tiles = [
  {
    title: "Technologies",
    list: [
      'Biomimetic Design',
      'Soft Robotics',
      'Sensor Fusion',
      'AI for Robotics',
      'Real-Time Control Systems',
      'Robotic Prototyping',
      'Simulation & Testing',
      'Digital Twin Technology',
      'Energy-Efficient Motion',
      'Actuator Systems'
    ]
  },
  {
    title: "Solutions",
    list: [
      'Robotic Prosthetics',
      'Autonomous Drones',
      'Medical Robotics',
      'Disaster Response Robots',
      'Bio-inspired Industrial Automation',
      'Exploration Robotics',
      'Wearable Exoskeletons'
    ]
  },
  {
    title: "Industries",
    list: [
      'Healthcare & Rehabilitation',
      'Aerospace & Defense',
      'Agricultural Technology',
      'Search & Rescue',
      'Manufacturing Automation',
      'Education & Research',
      'Environmental Monitoring'
    ]
  }
];
export const testimonials = [
  {
    content:
      "Neurovance helped us develop a prototype exoskeleton with biomimetic motion control. Their team was visionary and technically sound, making the development process incredibly smooth.",
    author: {
      avatar: '/images/testimonial/avatar-1.jpg',
      name: "Dr. Ravi Nair",
      description: "Biomedical Engineer"
    },
  },
  {
    content:
      "Our collaboration with Neurovance on sensor-driven drones was phenomenal. Their innovation-first mindset and attention to bio-inspired design were unmatched.",
    author: {
      avatar: '/images/testimonial/avatar-2.jpg',
      name: "Ananya Das",
      description: "Robotics Researcher"
    },
  },
  {
    content:
      "We needed a robotics consultant to explore feasibility for our autonomous underwater vehicle. Neurovance offered deep insight and practical guidance on both design and control architecture.",
    author: {
      avatar: '/images/testimonial/avatar-4.jpg',
      name: "Marcus Patel",
      description: "Marine Robotics Lead"
    },
  },
  {
    content:
      "Neurovance ke biomimetic robots ne hamare environmental monitoring project ko kaafi impactful banaya. Unki team ka dedication aur approach practical aur futuristic dono tha.",
    author: {
      avatar: '/images/testimonial/avatar-3.jpeg',
      name: "Shreya Joshi",
      description: "Environmental Scientist"
    },
  },
];
