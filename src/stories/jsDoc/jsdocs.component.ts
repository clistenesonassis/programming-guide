import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jsdocs',
  templateUrl: './jsdocs.component.html',
})
export class JsdocsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  /**
   * This function is responsible for adding the numbers.
   *
   * @param {number} value1 - First value to be sum.
   * @param {number} value2 - Second value to be sum.
   * @returns {number} Sum of a and b
   */
  sum(value1: number, value2: number): number {
    return value1 + value2;
  }
}
