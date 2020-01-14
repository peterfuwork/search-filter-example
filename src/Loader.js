import React from 'react';
import loading from './assets/loading.gif';

const Loader = () => {
	return <img className="spinner" src={loading} alt="spinner" />;
};

export default Loader;
