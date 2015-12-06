'use strict';

var _ = require('lodash');

module.exports = function (answers) {
  this.prompts                  = {};
  this.prompts.projectName      = answers.projectName;
  this.prompts.spritesmith      = answers.spritesmith;
  this.prompts.jade             = answers.jade;
  this.prompts.iconfont         = answers.iconfont;
  // this.prompts.cssPrefix        = answers.cssPreprocessor === 'scss' ? '_' : '';
  this.prompts.features         = {};

  if (Array.isArray(answers.features)) {
    for (var i in answers.features) {
      this.prompts.features[answers.features[i]] = true;
    }
  } else if (typeof answers.features === 'object') {
    this.prompts.features = answers.features;
  }

};
