/* Olá, leitor! */
/* Estou com um erro nesta parte do código */
/* Faz "6" horas que estou tentando resolver */
/* Mas não consigo encontrar o erro... */
/* Ajude-me por favor! :) */

export default {
  reactStrictMode: true,
  images: {
    domains: ["example.com"],
  },
  i18n: {
    locales: ["en-US", "fr", "nl-NL"],
    defaultLocale: "en-US",
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};
