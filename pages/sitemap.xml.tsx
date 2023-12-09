import React from "react";
import { SEO_OBJ } from "Essentials";

let cachedSitemap: string | null = null;

const generateSitemap = () => {
  if (!cachedSitemap) {
    const siteData = Object.values(SEO_OBJ).map((page) => {
      return { url: page.absoluteURL, lastUpdatedTime: page.lastUpdateTime };
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!-- We'll render the URLs for our sitemap here. -->
        ${siteData
          .map((singleSiteData) => {
            return `<url> <loc>${singleSiteData.url}</loc>
                <lastmod>${singleSiteData.lastUpdatedTime}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>1.0</priority>
              </url>`;
          })
          .join("")}
      </urlset>
    `;

    cachedSitemap = sitemap;
  }
};

generateSitemap(); // Generate the sitemap on server start

export const getServerSideProps = ({ res }: any) => {
  res.setHeader("Content-Type", "text/xml");
  res.write(cachedSitemap || ""); // Serve the cached sitemap or an empty string if not generated
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}
