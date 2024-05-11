"use strict";
function getElementWidth(content, padding, border) {
    const contentOutPx = Number.parseFloat(content);
    const paddingOutPx = Number.parseFloat(padding);
    const borderOutPx = Number.parseFloat(border);
    const totalWidth = contentOutPx + paddingOutPx * 2 + borderOutPx * 2;
    return `${totalWidth}`;
  }
  console.log(getElementWidth("50px", "8px", "4px")); // 74
  console.log(getElementWidth("60px", "12px", "8.5px")); // 101
  console.log(getElementWidth("200px", "0px", "0px")); // 200
