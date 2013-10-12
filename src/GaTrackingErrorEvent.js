/**
 * @class GaTrackingErrorEvent
 * @description
 *   utility Class of tracking javascript error by using Google Analyitcs
 *
 * @version 0.1.0
 * @author Tomoyuki Kashiro <kashiro@github>
 * @license MIT
 */
(function(){

  'use strict';

  /**
   * class for track error
   * @type {Object}
   */
  var GaTrackingErrorEvent = {

    /**
     * send error data to google analytics
     * @param  {!string} msg  error message
     * @param  {!string} url  url where error was occurred
     * @param  {!number} line line number which error was occurred
     */
    tracking: function(msg, url, line){
      var message = this.makeMessage(msg, url, line);
      if(ga){
        ga('send', 'event', 'debug', 'error', message);
      }
    },

    /**
     * make error message
     * @param  {!string} msg  error message
     * @param  {!string} url  url where error was occurred
     * @param  {!number} line line number which error was occurred
     */
    makeMessage: function(msg, url, line){
      var message = '',
          separate = ' : ';

      message += encodeURIComponent(url);
      message += separate + encodeURIComponent(msg);
      message += separate + line;

      return message;
    }

  };

  // export
  window.GaTrackingErrorEvent = GaTrackingErrorEvent;
  // set error callback
  window.onerror = function(msg, url, line){
    GaTrackingErrorEvent.tracking(msg, url, line);
  };

}());