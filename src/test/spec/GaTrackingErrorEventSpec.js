describe("Spec of GaTrackingErrorEvent", function() {

  'use strict';


  describe("Test for #makeMessage", function() {

    it("return the text which made the arguments were combined", function() {

      var msg = 'a',
          url = 'b',
          line = 0,
          result = GaTrackingErrorEvent.makeMessage(msg, url, line);

      expect(result).to.eql('b : a : 0');
    });

  });

  describe('Test for #tracking', function () {

    xit("don't call a method of ga if ga does not exist", function () {
    });

    it('call a method of ga', function () {

      var ga = sinon.spy(),
          msg = 'a',
          url = 'b',
          line = 0,
          message = 'b : a : 0';

      window.ga = ga;

      GaTrackingErrorEvent.tracking(msg, url, line);
      expect(ga.calledWith('send', 'event', 'debug', 'error', message))
        .to.be.ok();
    });

  });

});