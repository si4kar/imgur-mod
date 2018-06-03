import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { AppContainer } from "react-hot-loader";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Container from "./components/mainLayout.js";
import GalleriesList from "./components/galleriesList.js";
import GalleryView from "./components/galleryView.js";
import ButtonUp from "./components/buttonUp.js";
import reducers from "./reducers";

import "./css/normalize.css";
import "./css/framework.css";
import "./css/app.css";

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

class App extends React.Component {
    render() {
        return (
            <AppContainer>
                <Provider store={store}>
                    <Router>
                        <Container>
                            <ButtonUp/>
                            <Route exact path="/" component={GalleriesList}/>
                            <Route path="/gallery/:galleryId" component={GalleryView}/>
                        </Container>
                    </Router>
                </Provider>
            </AppContainer>
        );
    }
}

export default App;
