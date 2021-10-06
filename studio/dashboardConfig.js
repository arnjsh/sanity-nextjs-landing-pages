export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615d30e0d11b2e7bb1adcc67',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-whixwbg2',
                  apiId: '2b4aed21-4418-4a85-b88e-364895b87f78'
                },
                {
                  buildHookId: '615d30e074de1265fbf7a75a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hdkh6orj',
                  apiId: 'e2d36f10-793e-4de9-9373-38e941d8806e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arnjsh/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hdkh6orj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
