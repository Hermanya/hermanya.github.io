import React from 'react';
import ResponsivePage from '../components/responsive-page';
import Xs from './xs/github';
import Md from './md';

const GithubPage = () => <ResponsivePage md={Md} xs={Xs} />;

export default GithubPage;
