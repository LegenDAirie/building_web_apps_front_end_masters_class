import Router from 'ampersand-router'
import React from 'react'
import Layout from './layout'
import NavigationHandler from './components/navigation_handler'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'

export default Router.extend({

  renderPage (page) {
    React.render(page, document.body)
  },

  routes: {
    '': 'public',
    'repos': 'repos'
  },

  addNavigationHandler (page) {
    page = (
      <NavigationHandler>
        {page}
      </NavigationHandler>
    )

    this.renderPage(page)
  },

  addLayout (page, options = {layout: true}) {

    if(options.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      )
    }

    this.addNavigationHandler(page)
  },

  public () {
    this.addLayout(<PublicPage/>, {layout: false})
  },

  repos () {
    this.addLayout(<ReposPage/>)
  }
})
