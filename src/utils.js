'use strict';

export default {
  ellipsis(rows) {
    let rules = {
      'overflow': 'hidden',
      'text-overflow': 'ellipsis'
    };

    if (rows && rows > 1) {
      rules['display'] = '-webkit-box';
      rules['-webkit-box-orient'] = 'vertical';
      rules['-webkit-line-clamp'] = rows;
    } else {
      rules['white-space'] = 'nowrap';
    }

    return rules;
  },
  clearfix() {
    return {
      '&:before, &:after': {
        'display': 'table',
        'content': '""'
      },
      '&:after': {
        'clear': 'both'
      }
    };
  },
  irt() {
    return {
      'font': '0/0 none',
      'text-shadow': 'none',
      'color': 'transparent'
    };
  },
  userSelect(value) {
    return {
      '-moz-user-select': value,
      '-webkit-user-select': value,
      '-ms-user-select': value
    };
  },
  disabled(bgc, bdc, color) {
    return {
      'background-color': bgc,
      'border-color': bdc,
      'color': color,
      'cursor': 'default',
      'pointer-events': 'none'
    };
  },
  verticalCenter() {
    return {
      '&:after': {
        'display': 'inline-block',
        'content': '',
        'height': '100%',
        'vertical-align': 'middle'
      }
    }
  }
};
