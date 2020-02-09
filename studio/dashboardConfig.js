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
                  buildHookId: '5e400b78f1d676c7aba2bd55',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hazdabzj',
                  apiId: '7e3cb83a-02ed-4c4f-9270-c8083cd7a007'
                },
                {
                  buildHookId: '5e400b7873c44d7feb688d95',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dwhkaaov',
                  apiId: '2be616bb-ad59-4cb2-82c8-1ee331453f5b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/estherKouakou/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dwhkaaov.netlify.com', category: 'apps'}
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
