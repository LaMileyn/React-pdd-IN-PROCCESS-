import React, {useEffect} from 'react';
import './styles/main.scss'
import './styles/variables.scss'
import MainPage from "./views/Main/MainPage/MainPage";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import TicketPage from "./views/Ticket/TicketPage/TicketPage";
import ResultPage from "./views/Result/ResultPage/ResultPage";
import {useAppDispatch} from "./utils/helpers/hooks";
import {fetchPdd} from "./store/questions/questions.actions";

const App = () => {

    const dispatch = useAppDispatch()
    useEffect(() =>{
        dispatch(fetchPdd())
    },[])
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="ticket/:id" element={<TicketPage/>}/>
                    <Route path="ticket/:id/result" element={<ResultPage />}/>
                </Route>
                <Route path="*" element={<div>404 - Страница не найдена</div>}/>
            </Routes>
        </div>
    );
}

export default App;
