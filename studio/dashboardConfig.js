export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5da0d05c3aab75092eaf431f',
                  title: 'Sanity Studio',
                  name: 'mufleh-dev-gatsby-sanity-portfolio-studio',
                  apiId: '6ac9339e-7925-47fa-8c45-80a9df75795b'
                },
                {
                  buildHookId: '5da0d05cb38439f227af9ec3',
                  title: 'Portfolio Website',
                  name: 'mufleh-dev-gatsby-sanity-portfolio',
                  apiId: '5fce3ed1-1718-495e-bd47-a758db5d12e8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Yazanmuf/mufleh-dev-gatsby-sanity-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://mufleh-dev-gatsby-sanity-portfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
