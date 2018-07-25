'use strict';
/* global $ */

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/[alex_puhl]';

  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  };
  const createItem = function (name, callback) {
    const newItem = {name};
    const data = JSON.stringify(newItem);
    // const method = 'POST';
    // const contentType = 'application/json';
    $.ajax({url: `${BASE_URL}/items`, method: 'POST', contentType: 'application/json', data: data, success: callback});
  };
  return {
    getItems,
    createItem
  };


})();