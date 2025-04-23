import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/manual-de-inspector/markdown-page',
    component: ComponentCreator('/manual-de-inspector/markdown-page', '5ee'),
    exact: true
  },
  {
    path: '/manual-de-inspector/docs',
    component: ComponentCreator('/manual-de-inspector/docs', 'f4e'),
    routes: [
      {
        path: '/manual-de-inspector/docs',
        component: ComponentCreator('/manual-de-inspector/docs', '925'),
        routes: [
          {
            path: '/manual-de-inspector/docs',
            component: ComponentCreator('/manual-de-inspector/docs', '4b7'),
            routes: [
              {
                path: '/manual-de-inspector/docs/accesibilidad',
                component: ComponentCreator('/manual-de-inspector/docs/accesibilidad', '55e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manual-de-inspector/docs/almacenamiento',
                component: ComponentCreator('/manual-de-inspector/docs/almacenamiento', '400'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manual-de-inspector/docs/casos-practicos',
                component: ComponentCreator('/manual-de-inspector/docs/casos-practicos', '541'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manual-de-inspector/docs/consola-js',
                component: ComponentCreator('/manual-de-inspector/docs/consola-js', 'db2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manual-de-inspector/docs/estilos-css',
                component: ComponentCreator('/manual-de-inspector/docs/estilos-css', '501'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manual-de-inspector/docs/estructura-html',
                component: ComponentCreator('/manual-de-inspector/docs/estructura-html', '8c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manual-de-inspector/docs/intro',
                component: ComponentCreator('/manual-de-inspector/docs/intro', '3dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manual-de-inspector/docs/lighthouse',
                component: ComponentCreator('/manual-de-inspector/docs/lighthouse', '259'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manual-de-inspector/docs/memory',
                component: ComponentCreator('/manual-de-inspector/docs/memory', '20f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manual-de-inspector/docs/performance',
                component: ComponentCreator('/manual-de-inspector/docs/performance', '3cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manual-de-inspector/docs/recorder',
                component: ComponentCreator('/manual-de-inspector/docs/recorder', '123'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manual-de-inspector/docs/recursos',
                component: ComponentCreator('/manual-de-inspector/docs/recursos', 'c74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manual-de-inspector/docs/red-network',
                component: ComponentCreator('/manual-de-inspector/docs/red-network', 'b52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manual-de-inspector/docs/rendimiento',
                component: ComponentCreator('/manual-de-inspector/docs/rendimiento', '8d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manual-de-inspector/docs/security',
                component: ComponentCreator('/manual-de-inspector/docs/security', '073'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manual-de-inspector/docs/sources',
                component: ComponentCreator('/manual-de-inspector/docs/sources', 'ced'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manual-de-inspector/docs/toc',
                component: ComponentCreator('/manual-de-inspector/docs/toc', '394'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manual-de-inspector/docs/trucos',
                component: ComponentCreator('/manual-de-inspector/docs/trucos', '2a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/manual-de-inspector/',
    component: ComponentCreator('/manual-de-inspector/', 'd98'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
