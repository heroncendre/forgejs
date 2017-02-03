/**
 * Simple extern file for Hammer.JS, used in ForgeJS player.
 * Only include used methods from Hammer.js.
 */

/**
 * @const
 */
var Hammer = {};

/**
 * @param {Function} arg1
 * @param {*} arg2
 * @return {Function}
 */
Hammer.bindFn = function(arg1, arg2) {};

/**
 * @constructor
 * @param {Element|HTMLElement} arg1
 * @return {!Manager}
 */
function Manager(arg1) {};

/** @const */
Hammer.Manager = Manager;

/**
 * @constructor
 * return {!GenericHammerType}
 */
function GenericHammerType() {};

/**
 * @constructor
 * @param {Object=} arg1
 * @extends {GenericHammerType}
 * @return {!Tap}
 */
function Tap(arg1) {};

/** @const */
Hammer.Tap = Tap;

/**
 * @constructor
 * @param {Object=} arg1
 * @extends {GenericHammerType}
 * @return {!Press}
 */
function Press(arg1) {};

/** @const */
Hammer.Press = Press;

/**
 * @constructor
 * @param {Object=} arg1
 * @extends {GenericHammerType}
 * @return {!Pan}
 */
function Pan(arg1) {};

/** @const */
Hammer.Pan = Pan;

/**
 * @constructor
 * @param {Object=} arg1
 * @extends {GenericHammerType}
 * @return {!Pinch}
 */
function Pinch(arg1) {};

/** @const */
Hammer.Pinch = Pinch;

/**
 * @constructor
 * @param {Object=} arg1
 * @extends {GenericHammerType}
 * @return {!Rotate}
 */
function Rotate(arg1) {};

/** @const */
Hammer.Rotate = Rotate;

/**
 * @constructor
 * @param {Object=} arg1
 * @extends {GenericHammerType}
 * @return {!Swipe}
 */
function Swipe(arg1) {};

/** @const */
Hammer.Swipe = Swipe;

/**
 * @param  {string} arg1
 * @param  {Function} arg2
 */
Manager.prototype.on = function(arg1, arg2) {};

/**
 * @param  {GenericHammerType} arg1
 */
Manager.prototype.add = function(arg1) {};

/**
 * @param  {Object} arg1
 */
Manager.prototype.set = function(arg1) {};

/**
 * @param  {string} arg1
 */
Manager.prototype.off = function(arg1) {};

/**
 * @param  {GenericHammerType} arg1
 * @return {Tap}
 */
Tap.prototype.recognizeWith = function(arg1) {};

/**
 * @param  {GenericHammerType} arg1
 * @return {Press}
 */
Press.prototype.recognizeWith = function(arg1) {};

/**
 * @param  {GenericHammerType} arg1
 * @return {Pan}
 */
Pan.prototype.recognizeWith = function(arg1) {};

/**
 * @param  {GenericHammerType} arg1
 * @return {Pinch}
 */
Pinch.prototype.recognizeWith = function(arg1) {};

/**
 * @param  {GenericHammerType} arg1
 * @return {Rotate}
 */
Rotate.prototype.recognizeWith = function(arg1) {};

/**
 * @param  {GenericHammerType} arg1
 * @return {Swipe}
 */
Swipe.prototype.recognizeWith = function(arg1) {};

/**
 * @typedef {{angle:number, center:{x:number,y:number}, changedPointers:Array<Event>, deltaTime:number, deltaX:number, deltaY:number, direction:number, distance:number, eventType:number, isFinal:boolean, isFirst:boolean, maxPointers:number, offsetDirection:number, overallVelocity:number, overallVelocityX:number, overallVelocityY:number, pointerType:string, pointers:Array<Event>, preventDefault:function(), rotation:number, scale:number, srcEvent:Event, tapCount:number, target:(Element|HTMLElement), timeStamp:number, type:string, velocity:number, velocityX:number, velocityY:number}}
 * @name {HammerEvent}
 * @property {number} angle
 * @property {{x:number, y:number}} center
 * @property {Array<Event>} changedPointers
 * @property {number} deltaTime
 * @property {number} deltaX
 * @property {number} deltaY
 * @property {number} direction
 * @property {number} distance
 * @property {number} eventType
 * @property {boolean} isFinal
 * @property {boolean} isFirst
 * @property {number} maxPointers
 * @property {number} offsetDirection
 * @property {number} overallVelocity
 * @property {number} overallVelocityX
 * @property {number} overallVelocityY
 * @property {string} pointerType
 * @property {Array<Event>} pointers
 * @property {function()} preventDefault
 * @property {number} rotation
 * @property {number} scale
 * @property {Event} srcEvent
 * @property {number} tapCount
 * @property {Element|HTMLElement} target
 * @property {number} timeStamp
 * @property {string} type
 * @property {number} velocity
 * @property {number} velocityX
 * @property {number} velocityY
 */
var HammerEvent;