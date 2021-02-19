import React from 'react';

import classes from './Loading.css';

const Loading = (props) =>
  props.showLoading ? <div className={classes.loader}>Loading...</div> : null;

export default Loading;
