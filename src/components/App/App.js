import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Books from "../Books/BookApp/books";
import Authors from "../Authors/AuthorApp/authors";
import Contributors from "../Contributors/ContributorsApp/contributors";
import Home from "../Home/home.component";
import BookContent from "../Books/BookContent/bookContent";
import AuthorContent from "../Authors/AuthorContent/authorContent";
import ContributorContent from "../Contributors/ContributorContent/contributorContent";



class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchString:""
        }

    }

    componentDidMount() {

    }


    render() {



        return (
            <Router >
                <div className="bg">
                    <Header  />

                    <div className="App" >
                        <Switch>
                            <Route exact path={["/", "/home"]} component={Home} />
                            <Route exact path="/books" component={Books} />
                            <Route exact path="/authors" component={Authors} />
                            <Route exact path="/contributors" component={Contributors} />
                            <Route exact path={"/books/:bookName"} render={() => <BookContent />}/>
                            <Route exact path={"/authors/:authorName"} render={() => <AuthorContent />}/>
                            <Route exact path={"/contributors/:contributorName"} render={() => <ContributorContent />}/>


                        </Switch>
                    </div>

                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;