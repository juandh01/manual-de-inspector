// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */

const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🕵️ Herramientas Básicas',
      items: [
        'intro',
        'estructura-html',
        'estilos-css',
        'consola-js',
        'red-network',
        'almacenamiento',
        'accesibilidad',
        'rendimiento',
        'trucos',
        'casos-practicos',
      ],
    },
    {
      type: 'category',
      label: '🚀 Herramientas Avanzadas',
      items: [
        'sources',         // 🧠 Debugging paso a paso
        'performance',     // ⏳ Análisis de rendimiento
        'memory',          // 📈 Uso de memoria y heap
        'security',        // 🔒 Seguridad y certificados
        'lighthouse',      // 💡 Auditoría con Lighthouse
        'recorder',        // 🎬 Grabación de interacciones
        'recursos',        // 🎬 Grabación de interacciones
        'toc',        // 🎬 Grabación de interacciones


      ],
    },
  ],
};

export default sidebars;
