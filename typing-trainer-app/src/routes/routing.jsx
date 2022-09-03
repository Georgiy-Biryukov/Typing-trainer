import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { BaseLayout } from '../layout/baseLayout';
import Home from '../pages/home';
import Test from '../pages/test';
import Trainer from '../pages/trainer';

const pathes = {
  home: '/',
  test: '/test',
  trainer: '/trainer',
};

export const Routing = () => (
  <Routes>
    <Route element={<BaseLayout />}>
      <Route path={pathes.home} element={<Home />} />
      <Route path={pathes.test} element={<Test />} />
      <Route path={pathes.trainer} element={<Trainer />} />
    </Route>
  </Routes>
);
