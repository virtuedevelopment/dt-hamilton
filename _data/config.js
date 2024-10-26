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
            service_name: "Comprehensive HVAC Services",
            service_desc: "Full HVAC solutions, including installation, repair, and maintenance for heating, cooling, and ventilation systems. We optimize energy efficiency to keep your home or business comfortable year-round.",
            service_img: "https://images.pexels.com/photos/257770/pexels-photo-257770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            service_name: "Residential HVAC",
            service_desc: "Customized HVAC solutions for your home, including installation of furnaces, air conditioning, heat pumps, and geothermal systems. We also enhance indoor air quality with humidifiers, dehumidifiers, and HRV/ERV systems.",
            service_img: "https://www.hollingsworth-vose.com/wp-content/uploads/residential-HVAC-scaled-e1636954047390-1024x317.jpeg"
        },
        {
            service_name: "Commercial HVAC",
            service_desc: "DT Hamilton offers tailored HVAC solutions for businesses, including installation and maintenance of rooftop units, VRF/VRV systems, chillers, dry coolers, pumps, and air handlers. Our goal is to ensure efficient climate control and energy management.",
            service_img: "https://www.diversifiedhvac.com/wp-content/uploads/2023/12/commercial-hvac-components.jpg"
        },
        {
            service_name: "HVAC Maintenance",
            service_desc: "Regular maintenance services to ensure your HVAC systems operate efficiently. We service boilers, furnaces, pumps, heat pumps, rooftop units, and air handlers to prevent breakdowns and prolong system lifespan.",
            service_img: "https://modecomfort.com/wp-content/uploads/2024/04/img-hvac-technician-working-on-roof-1210x423.webp"
        },
        {
            service_name: "Construction HVAC",
            service_desc: "We provide HVAC system design and installation for new construction projects, integrating geothermal systems, natural gas, propane, heat pumps, and rooftop units into your project specifications.",
            service_img: "https://images.pexels.com/photos/17159024/pexels-photo-17159024/free-photo-of-large-air-conditioner.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            service_name: "Ductwork Services",
            service_desc: "Expert ductwork services, including installation, repair, and sealing. Proper ductwork ensures optimal air distribution and system efficiency for both residential and commercial properties.",
            service_img: "https://d1y2bcnc5x6gss.cloudfront.net/ductwork_4b057e154e.png"
        },
        {
            service_name: "Boilers and Domestic Water Heaters",
            service_desc: "Installation and maintenance of boilers and domestic water heaters to ensure reliable hot water supply and heating for your home or business.",
            service_img: "https://www.thespruce.com/thmb/MTkfmQhH9LXTPk-K0uGS63yNz7k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1322406919-df33c24df1e74e99a41c95ee982daee9.jpg"
        },
        // {
        //     service_name: "Geothermal and Heat Pump Systems",
        //     service_desc: "Energy-efficient geothermal and heat pump solutions for both heating and cooling, helping reduce energy consumption and environmental impact.",
        //     service_img: "https://brahmco.ca/wp-content/uploads/2023/04/iStock-1444133244-min-scaled.jpg"
        // },
        {
            service_name: "Air Quality and Ventilation Systems",
            service_desc: "Enhance indoor air quality with our solutions, including air handlers, exhaust fans, HRV/ERV systems, humidifiers, and dehumidifiers.",
            service_img: "https://www.s4btradeally.com/wp-content/uploads/2021/01/article-img-12.jpg"
        },
        {
            service_name: "Natural Gas & Propane Systems",
            service_desc: "Installation and service of natural gas and propane systems, including furnaces, hot water heaters, and heating equipment, ensuring safe and efficient energy use.",
            service_img: "https://www.griffithenergyservices.com/wp-content/uploads/2019/01/PRO-propane-tanks-heating-fuel-e1546446674171.jpg"
        },
        {
            service_name: "Chillers and Dry Coolers",
            service_desc: "We install and maintain chillers and dry coolers for commercial applications, ensuring efficient temperature control and heat dissipation.",
            service_img: "https://waterchillers.com/wp-content/uploads/2023/09/dry_cooler_vs._chiller.jpg"
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