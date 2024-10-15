const configurations = {
    // Site metadata and SEO
    metadata: {
        title: 'DT Hamilton Ottawa ©',  // Site Title
        description: 'HVAC',  // Site Description for SEO
        author: 'Virtue Technologies and Development',  // Author or maintainer of the site
        keywords: ["HVAC Services", "Heating and Cooling"],  // Array of SEO keywords
        baseUrl: 'www.dt-hamilton.ca',  // Base URL of the website
        defaultImage: '',  // Default image for SEO and sharing
        language: 'en',  // Primary language of the website
    },

    // Social media and contact information
    information: {
        email: 'null',  // Contact Email
        socialLinks: [
            { social: 'Instagram', url: '', icon: '' },
            // More social links as needed
        ],
    },

    // Routing for various user roles
    routes: {
        mainRoutes: [
            { route: 'home', url: '/', icon: '' },
            { route: 'about', url: '/about', icon: '' },
            { route: 'services', url: '/services', icon: '' },
            { route: 'contact', url: '/contact', icon: '' },
            // More main routes
        ],
        authRoutes: [
            { route: 'Login', url: '/login', icon: '' },
            { route: 'Sign Up', url: '/signup', icon: '' },
            // More auth routes
        ],
        adminRoutes: [
            { route: 'Dashboard', url: '/admin/dashboard', icon: '' },
            // More admin routes
        ],
    },

    // Backend configuration
    backend: {
        apiUrl: '',  // API Base URL
        apiKey: '',  // API Key if needed
        dbUrl: '',  // Database URL if different from API
        dbPassword: '',  // Database password if needed
    },

    services: [
        {
            service_name: "HVAC Services",
            service_desc: "Comprehensive HVAC solutions including installation, repair, and maintenance for both heating and cooling systems. We ensure your home or business is comfortable year-round.",
            service_img: "https://images.pexels.com/photos/257770/pexels-photo-257770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            service_name: "Residential HVAC",
            service_desc: "Our residential HVAC services focus on creating a comfortable living environment with efficient and reliable heating and cooling systems for your home.",
            service_img: "https://images.pexels.com/photos/24814755/pexels-photo-24814755/free-photo-of-air-conditioners-on-wall-of-block-of-flats.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            service_name: "Commercial HVAC",
            service_desc: "DT Hamilton offers commercial HVAC solutions for businesses of all sizes, from system installation to ongoing maintenance, ensuring efficient climate control in your building.",
            service_img: "https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            service_name: "HVAC Maintenance",
            service_desc: "Regular maintenance services to ensure your HVAC systems are running efficiently. We offer service plans for both residential and commercial properties.",
            service_img: "https://images.pexels.com/photos/13820151/pexels-photo-13820151.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            service_name: "Construction HVAC",
            service_desc: "We provide HVAC system design and installation services for new construction projects, ensuring that the heating, cooling, and ventilation systems are properly integrated.",
            service_img: "https://images.pexels.com/photos/17159024/pexels-photo-17159024/free-photo-of-large-air-conditioner.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            service_name: "Ductwork",
            service_desc: "Expert ductwork services including installation, repair, cleaning, and sealing to ensure optimal air distribution and system efficiency in your home or business.",
            service_img: "https://images.pexels.com/photos/17792395/pexels-photo-17792395/free-photo-of-pipes-and-air-conditioners-at-the-back-of-the-building.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ],


    // Terms of service and other legal links
    legal: {
        termsOfServiceUrl: '',  // URL to the terms of service
        privacyPolicyUrl: '',  // URL to the privacy policy
        copyrightNotice: '',  // Copyright notice text
    },

    // Optional: Categories and other lists used in the site
    categoryList: [
        { category: 'Example', sub_categories: ['Sub-example'] },
        // More categories
    ],
};

export default configurations;