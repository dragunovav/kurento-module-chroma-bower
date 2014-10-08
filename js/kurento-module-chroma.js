(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

var inherits = require('inherits');

var checkType = require('checktype');

var ChecktypeError = checkType.ChecktypeError;

var Filter = require('kurento-client').register.abstracts.Filter;

/**
 * Create a {@link module:chroma.ChromaFilter ChromaFilter}
 *
 * @classdesc
 *  ChromaFilter interface. This type of {@link module:core/abstracts.Filter Filter} makes transparent a colour
 *  range in the top layer, revealing another image behind
 *
 * @extends module:core/abstracts.Filter
 *
 * @constructor module:chroma.ChromaFilter
 *
 * @param {external:String} id
 */
function ChromaFilter(id){
  ChromaFilter.super_.call(this, id);
};
inherits(ChromaFilter, Filter);


/**
 * Sets the image to show on the detected chroma surface.
 *
 * @alias module:chroma.ChromaFilter.setBackground
 *
 * @param {external:String} uri
 *  URI where the image is located
 *
 * @param {module:chroma.ChromaFilter~setBackgroundCallback} [callback]
 *
 * @return {external:Promise}
 */
ChromaFilter.prototype.setBackground = function(uri, callback){
  checkType('String', 'uri', uri, {required: true});

  var params = {
    uri: uri,
  };

  return this.invoke('setBackground', params, callback);
};
/**
 * @callback module:chroma.ChromaFilter~setBackgroundCallback
 * @param {external:Error} error
 */

/**
 * Clears the image used to be shown behind the chroma surface.
 *
 * @alias module:chroma.ChromaFilter.unsetBackground
 *
 * @param {module:chroma.ChromaFilter~unsetBackgroundCallback} [callback]
 *
 * @return {external:Promise}
 */
ChromaFilter.prototype.unsetBackground = function(callback){
  return this.invoke('unsetBackground', callback);
};
/**
 * @callback module:chroma.ChromaFilter~unsetBackgroundCallback
 * @param {external:Error} error
 */

/**
 * @alias module:chroma.ChromaFilter.constructorParams
 *
 * @property {external:String} [backgroundImage]
 *  url of image to be used to replace the detected background
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the {@link module:core.MediaPipeline MediaPipeline} to which the filter belongs
 *
 * @property {module:chroma/complexTypes.WindowParam} window
 *  Window of replacement for the {@link module:chroma.ChromaFilter ChromaFilter}
 */
ChromaFilter.constructorParams = {
  backgroundImage: {
    type: 'String',
  },

  mediaPipeline: {
    type: 'MediaPipeline',
    required: true
  },

  window: {
    type: 'WindowParam',
    required: true
  },
};

/**
 * @alias module:chroma.ChromaFilter.events
 *
 * @extend module:core/abstracts.Filter.events
 */
ChromaFilter.events = Filter.events;

module.exports = ChromaFilter;

ChromaFilter.check = function(key, value)
{
  if(!(value instanceof ChromaFilter))
    throw ChecktypeError(key, ChromaFilter, value);
};

},{"checktype":5,"inherits":6}],2:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

var checkType = require('checktype');

/**
 * Checker for {@link chroma/complexTypes.WindowParam}
 *
 * @memberof module:chroma/complexTypes
 *
 * @param {external:String} key
 * @param {module:chroma/complexTypes.WindowParam} value
 */
function checkWindowParam(key, value)
{
  checkType('int', key+'.topRightCornerX', value.topRightCornerX, true);
  checkType('int', key+'.topRightCornerY', value.topRightCornerY, true);
  checkType('int', key+'.width', value.width, true);
  checkType('int', key+'.height', value.height, true);
};


/**
 * Parameter representing a window in a video stream.
 * It is used in command and constructor for media elements.
 * 
 * All units are in pixels, X runs from left to right, Y from top to bottom.
 *
 * @memberof module:chroma/complexTypes
 *
 * @typedef chroma/complexTypes.WindowParam
 *
 * @type {Object}
 * @property {external:Integer} topRightCornerX
 *  X coordinate of the left upper point of the window
 * @property {external:Integer} topRightCornerY
 *  Y coordinate of the left upper point of the window
 * @property {external:Integer} width
 *  width in pixels of the window
 * @property {external:Integer} height
 *  height in pixels of the window
 */


module.exports = checkWindowParam;

},{"checktype":5}],3:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

/**
 * Media API for the Kurento Web SDK
 *
 * @module chroma/complexTypes
 *
 * @copyright 2013-2014 Kurento (http://kurento.org/)
 * @license LGPL
 */

var WindowParam = require('./WindowParam');


exports.WindowParam = WindowParam;

},{"./WindowParam":2}],4:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

/**
 * Media API for the Kurento Web SDK
 *
 * @module chroma
 *
 * @copyright 2013-2014 Kurento (http://kurento.org/)
 * @license LGPL
 */

var ChromaFilter = require('./ChromaFilter');


exports.ChromaFilter = ChromaFilter;

exports.complexTypes = require('./complexTypes');

},{"./ChromaFilter":1,"./complexTypes":3}],5:[function(require,module,exports){
/*
 * (C) Copyright 2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */


/**
 * Number.isInteger() polyfill
 * @function external:Number#isInteger
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger Number.isInteger}
 */
if (!Number.isInteger) {
  Number.isInteger = function isInteger (nVal) {
    return typeof nVal === "number" && isFinite(nVal)
        && nVal > -9007199254740992 && nVal < 9007199254740992
        && Math.floor(nVal) === nVal;
  };
}


function ChecktypeError(key, type, object)
{
  return SyntaxError(key + ' param should be a ' + (type.name || type)
                    + ', not ' + value.constructor.name);
}


//
// Basic types
//

function checkArray(type, key, value)
{
  if(!(value instanceof Array))
    throw ChecktypeError(key, 'Array of '+type, value);

  for(var i=0, item; item=value[i]; i++)
    checkType(type, key+'['+i+']', item);
};

function checkBoolean(key, value)
{
  if(typeof value != 'boolean')
    throw ChecktypeError(key, Boolean, value);
};

function checkNumber(key, value)
{
  if(typeof value != 'number')
    throw ChecktypeError(key, Number, value);
};

function checkInteger(key, value)
{
  if(!Number.isInteger(value))
    throw ChecktypeError(key, 'Integer', value);
};

function checkObject(key, value)
{
  if(typeof value != 'object')
    throw ChecktypeError(key, Object, value);
};

function checkString(key, value)
{
  if(typeof value != 'string')
    throw ChecktypeError(key, String, value);
};


// Checker functions

function checkType(type, key, value, options)
{
  options = options || {};

  if(value != undefined)
  {
    if(options.isArray)
      return checkArray(type, key, value);

    var checker = checkType[type];
    if(checker) return checker(key, value);

    console.warn("Could not check "+key+", unknown type "+type);
//    throw TypeError("Could not check "+key+", unknown type "+type);
  }

  else if(options.required)
    throw SyntaxError(key+" param is required");

};

function checkParams(params, scheme, class_name)
{
  var result = {};

  // check MediaObject params
  for(var key in scheme)
  {
    var value = params[key];

    var s = scheme[key];

    var options = {required: s.required, isArray: s.isList};

    checkType(s.type, key, value, options);

    if(value == undefined) continue;

    result[key] = value;
    delete params[key];
  };

  if(Object.keys(params).length)
    console.warn('Unused params for '+class_name+':', params);

  return result;
};

function checkMethodParams(callparams, method_params)
{
  var result = {};

  var index=0, param;
  for(; param=method_params[index]; index++)
  {
    var key = param.name;
    var value = callparams[index];

    var options = {required: param.required, isArray: param.isList};

    checkType(param.type, key, value, options);

    result[key] = value;
  }

  var params = callparams.slice(index);
  if(params.length)
    console.warning('Unused params:', params);

  return result;
};


module.exports = checkType;

checkType.checkParams    = checkParams;
checkType.ChecktypeError = ChecktypeError;


// Basic types

checkType.boolean = checkBoolean;
checkType.double  = checkNumber;
checkType.float   = checkNumber;
checkType.int     = checkInteger;
checkType.Object  = checkObject;
checkType.String  = checkString;

},{}],6:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}]},{},[4]);