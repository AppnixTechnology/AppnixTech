import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export const SEO = ({
  title = 'Appnix Technologies — Complete Tech Solutions',
  description = 'Appnix Technologies delivers premium web development, app development, MERN stack, digital marketing, and UI/UX design solutions for businesses worldwide.',
  keywords = 'web development, app development, MERN stack, digital marketing, UI/UX design, React development, Node.js, MongoDB, custom software, tech solutions',
  ogImage = 'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0fd33c3f-cfa5-4235-985b-71df344dc4f6/id-preview-5065ff1d--1fe7304c-b678-4d17-bbe9-cc7855fdb06b.lovable.app-1771961142405.png',
  canonical = 'https://appnix.org'
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Appnix Technologies",
          "url": "https://appnix.org",
          "logo": "https://appnix.org/logo.png",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://twitter.com/appnixtech",
            "https://linkedin.com/company/appnixtech"
          ]
        })}
      </script>
    </Helmet>
  );
};
