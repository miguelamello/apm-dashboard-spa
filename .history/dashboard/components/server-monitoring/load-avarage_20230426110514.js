"use strict";

import Chart from 'chart.js/auto';
import data from './load-avarage-data.js';

class LoadAvarage {

  #options = {

  #config() {
    return {
      type: 'line',
      data: data
    };
  }

  constructor() {}

  render( container ) {
    const myChart = new Chart(
      document.getElementById( container ),
      this.#config(), 
    );
  }

}

export default new LoadAvarage();
