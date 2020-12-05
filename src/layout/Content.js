import React from 'react'
import { Switch, Route } from 'react-router-dom';
import BookDetails from '../pages/BookDetails';
import Books from '../pages/Books';
import Home from '../pages/Home';

const Content = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/books">
          <Books />
        </Route>

        <Route path="/books/:id">
          <BookDetails />
        </Route>
      </Switch>
    </main>
  )
}

export default Content
