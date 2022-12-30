import React from 'react';
import '../styles/global.scss'
import {HashRouter, Routes, Route} from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";
import SendEmail from "../pages/SendEmail";
import Orders from "../pages/Orders";
import Checkout from "../pages/Checkout";
import CreateAccount from "../pages/CreateAccount";
import MyAccount from "../pages/MyAccount";
import NewPassword from "../pages/NewPassword";
import{AppContext} from "../context/AppContext";
import {useInitialState} from "../hooks/useInitialState";

const App = () => {

    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <HashRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/login" element={<Login/>} />
                        <Route exact path="/send-email" element={<SendEmail />} />
                        <Route exact path="/recovery-password" element={<RecoveryPassword/>} />
                        <Route exact path="/new-password" element={<NewPassword />} />
                        <Route exact path="/account" element={<MyAccount />} />
                        <Route exact path="/signup" element={<CreateAccount />} />
                        <Route exact path="/checkout" element={<Checkout />} />
                        <Route exact path="/orders" element={<Orders />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </HashRouter>
        </AppContext.Provider>

    );
};

export default App;