// Embed Configuration for ArchMC Statistics
// Update these values to customize your site's social media embeds

export const embedConfig = {
    // Basic Site Information
    siteName: "ArchMC Statistics",
    siteUrl: "https://archmc.wafidzn.com", // Replace with your actual domain

    // Homepage Embed Settings
    homepage: {
        title: "ArchMC Statistics: Real-Time Player Stats",
        description: "Designed for competition, check out all statistics related to the ArchMC Server here. Track your progress and climb the leaderboards!",
        image: "https://archmc.wafidzn.com/api/og", // Dynamic OG image with absolute URL
        imageAlt: "ArchMC Statistics Dashboard Preview",
    },

    // Social Media Handles
    social: {
        twitter: "@RuleYourOwnGame",
        discord: "https://discord.gg/archmc",
        youtube: "https://youtube.com/@RuleYourOwnGame",
    },

    // Brand Colors (for theme-color meta tag)
    brandColor: "#c71f1f", // Your primary brand color

    // Additional SEO Settings
    seo: {
        keywords: ["ArchMC", "Minecraft", "Statistics", "Gaming", "Leaderboards", "Player Stats", "Minecraft Server"],
        author: "ArchMC Team",
        robots: "index, follow",
    },

    // Analytics & Verification Codes
    verification: {
        google: "", // Add your Google Search Console verification code
        bing: "", // Add your Bing Webmaster verification code
        yandex: "", // Add your Yandex verification code
    },

    // Analytics
    analytics: {
        googleAnalytics: "", // Add your GA4 measurement ID (G-XXXXXXXXXX)
        googleTagManager: "", // Add your GTM container ID (GTM-XXXXXXX)
    },
};

// Helper function to generate dynamic OG image URLs
export function generateOGImageUrl(params?: {
    title?: string;
    subtitle?: string;
}) {
    const baseUrl = `${embedConfig.siteUrl}/api/og`;
    if (!params) return baseUrl;

    const searchParams = new URLSearchParams();
    if (params.title) searchParams.set('title', params.title);
    if (params.subtitle) searchParams.set('subtitle', params.subtitle);

    return `${baseUrl}?${searchParams.toString()}`;
}

// Helper function to generate page-specific metadata
export function generatePageMetadata(page: {
    title?: string;
    description?: string;
    image?: string;
    path?: string;
}) {
    // Generate dynamic OG image if no custom image provided
    const ogImage = page.image || generateOGImageUrl({
        title: page.title || "ArchMC Statistics",
        subtitle: page.description || embedConfig.homepage.description
    });

    return {
        title: page.title ? `${page.title} | ${embedConfig.siteName}` : embedConfig.homepage.title,
        description: page.description || embedConfig.homepage.description,
        openGraph: {
            title: page.title ? `${page.title} | ${embedConfig.siteName}` : embedConfig.homepage.title,
            description: page.description || embedConfig.homepage.description,
            url: page.path ? `${embedConfig.siteUrl}${page.path}` : embedConfig.siteUrl,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: page.title ? `${page.title} - ${embedConfig.siteName}` : embedConfig.homepage.imageAlt,
                },
            ],
        },
        twitter: {
            title: page.title ? `${page.title} | ${embedConfig.siteName}` : embedConfig.homepage.title,
            description: page.description || embedConfig.homepage.description,
            images: [ogImage],
        },
    };
}