import app from 'ampersand-app'
import Router from 'ampersand-router'
import React from 'react'
import Layout from './layout'
import qs from 'qs'
import xhr from 'xhr'
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
    'logout': 'logout',
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

  logout () {
    window.localStorage.clear()
    window.location = '/'
  },

  authCallback (query) {
    query = qs.parse(query)
    console.log(query)

    xhr({
      url: 'http://labelr-dev.herokuapp.com/authenticate/' + query.code,
      json: true
    }, (err, req, body) => {
      console.log(body)
      app.user.token = body.token
      this.redirectTo('/repos')
    })
  }
})
