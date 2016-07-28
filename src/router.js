import Router from 'ampersand-router'
import React from 'react'
import Layout from './layout'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'

export default Router.extend({

  renderPage (page, options = {layout: true}) {

    if(options.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      )
    }

    React.render(page, document.body)
  },

  routes: {
    '': 'public',
    'repos': 'repos'
  },

  public () {
    this.renderPage(<PublicPage/>, {layout: false})
  },

  repos () {
    this.renderPage(<ReposPage/>)
  }
})
