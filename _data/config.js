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