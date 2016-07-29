import Router from 'ampersand-router'
import React from 'react'
import Layout from './layout'
import qs from 'qs'
import NavigationHandler from './components/navigation_handler'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'

export default Router.extend({

  renderPage (page) {
    React.render(page, document.body)
  },

  routes: {
    '': 'public',
    'repos': 'repos',
    'login': 'login',
    'auth/callback?:query': 'authCallback'
  },


  addLayout (page, options = {layout: true}) {

    if(options.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      )
    }

    page = (
      <NavigationHandler>
        {page}
      </NavigationHandler>
    )

    this.renderPage(page)
  },

  public () {
    this.addLayout(<PublicPage/>, {layout: false})
  },

  repos () {
    this.addLayout(<ReposPage/>)
  },

  login () {
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      scope: 'user,repo',
      redirect_uri: window.location.origin + '/auth/callback',
      client_id: 'f8dd69187841cdd22a26'
    })
  },

  authCallback (query) {
    query = qs.parse(query)
    console.log(query)
  }
})
