import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, canonical, ogImage }) {
  const siteTitle = "Zed Elevate Digital";
  const fullTitle = `${title} | ${siteTitle}`;
  const siteUrl = "https://zedelevatedigital.in";
  const defaultDesc = "Zed Elevate Digital is the best digital marketing agency in Kanpur. We provide SEO, website development, and branding services.";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={`${siteUrl}${canonical || ''}`} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content={ogImage || `${siteUrl}/LOGO.png`} />
      <meta property="og:url" content={`${siteUrl}${canonical || ''}`} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={ogImage || `${siteUrl}/LOGO.png`} />
    </Helmet>
  );
}
