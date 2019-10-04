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
                  buildHookId: '5d979bf5cc7720d3c4c1b097',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7z1mdpsi',
                  apiId: 'c607c8ed-0015-4fd6-a3e1-a319c093b7c1'
                },
                {
                  buildHookId: '5d979bf5e879ec1b6487e88a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6h5ecxs7',
                  apiId: '8fb0e4ef-d7c1-4352-8cc6-bd377760b26a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/technodesign-dn/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6h5ecxs7.netlify.com',
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
