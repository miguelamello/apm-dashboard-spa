"use strict";

import Chart from 'chart.js/auto';
import cpus_data from './cpus-average-data.js';

class CpusAverage {

  #rendered;

  #options() {
    return {
      maintainAspectRatio: false,
    }
  }

  #config() {
    return {
      type: 'bar',
      options: this.#options(),
      data: cpus_data,
    };
  }

  constructor() {}

  render( container ) {
    if ( this.#rendered) {
      this.#rendered.destroy();
      this.#rendered = new Chart(
        document.getElementById( container ),
        this.#config(), 
      );
    } else {
      this.#rendered = new Chart(
        document.getElementById( container ),
        this.#config(), 
      );
    }
  }

}

export default new CpusAverage();
