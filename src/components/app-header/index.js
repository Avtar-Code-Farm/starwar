import logo from '../../logo.svg';
import React, { Component } from 'react';

export default function AppHeader() {
  return (
    <div className="__starwar__App-header">
      <img
        src="https://rawcdn.githack.com/avtarSoft/starwar/7da2dc4da8123e56f7dd5e99719bcf4d232947e4/src/logo.svg"
        className="__starwar__App-logo"
        alt="logo"
      />
      <span className="__starwar__App-header-text">
        Star Wars Character Search
      </span>
    </div>
  );
}
