import React, { Suspense } from 'react';
import ScrolllToTop from '../components/common/scroll'
import axios from 'axios';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import Routes from './routes';
import Loader from '../components/common/loader';
import { setupAxios } from '../utils';
const { PUBLIC_URL } = process.env;

setupAxios(axios, store);

const AppContainer = () => (
    <Provider store={store}>
        <Suspense fallback={<Loader isSuspense />}>
            <Loader>
                <BrowserRouter basename={PUBLIC_URL}>
                    <ScrolllToTop>
                        <Routes />
                    </ScrolllToTop>
                </BrowserRouter>
            </Loader>
        </Suspense>
    </Provider>
)

export default AppContainer;