import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom';
import {Routes} from '/home/newton/desafio 2/desafio2app/desafio02_hiringcoders/src/routes.js'




ReactDom.render(
    <BrowserRouter> 
      <Routes/>
    </BrowserRouter>
    ,
    document.getElementById('root')
)