import logo from '../../logo.svg';
import React, { Component } from 'react';

export default function AppHeader() {
  return (
    <div className="__starwar__App-header">
      <img src={logo} className="__starwar__App-logo" alt="logo" />
      <span className="__starwar__App-header-text">
        Star Wars Character Search
      </span>
    </div>
  );
}
