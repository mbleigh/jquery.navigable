(function() {
  (function($) {
    return ($.fn.navigable = function(options) {
      var container, current, first, navigateTo, next, prev;
      options = $.extend({
        tag: 'li',
        focusClass: 'focused',
        scroll: true,
        keyNext: 74,
        keyPrev: 75,
        keySelect: 13,
        keyCancel: 27,
        blurOnCancel: true
      }, options);
      container = this;
      $(window).keydown(function(e) {
        switch (e.keyCode) {
          case options.keyNext:
            return $(window).trigger('navigable:next');
          case options.keyPrev:
            return $(window).trigger('navigable:prev');
          case options.keySelect:
            return $(window).trigger('navigable:select');
          case options.keyCancel:
            return $(window).trigger('navigable:cancel');
        }
      });
      container.find(options.tag).live('blur.navigable', function() {
        return $(this).removeClass(options.focusClass);
      }).live('focus.navigable', function() {
        var h, o;
        $(this).addClass(options.focusClass);
        if (options.scroll) {
          h = $(window).height();
          o = $(this).offset().top - $(window).scrollTop();
          return $(window).scrollTop($(this).offset().top - h / 2);
        }
      });
      current = function() {
        return container.find("" + (options.tag) + "." + (options.focusClass) + ":first");
      };
      first = function() {
        return container.find("" + (options.tag) + ":first");
      };
      next = function() {
        return current().nextAll(options.tag).first() || first();
      };
      prev = function() {
        return current().prevAll(options.tag).first() || first();
      };
      navigateTo = function(target) {
        if (target.length > 0 && current().length > 0) {
          current().trigger('blur.navigable');
          return target.trigger('focus.navigable');
        } else if (current().length === 0) {
          return first().trigger('focus.navigable');
        }
      };
      $(window).bind('navigable:next', function(e) {
        return navigateTo(next());
      });
      $(window).bind('navigable:prev', function(e) {
        return navigateTo(prev());
      });
      $(window).bind('navigable:cancel', function(e) {
        if (options.blurOnCancel) {
          return current().trigger('blur.navigable');
        }
      });
      return $(window).bind('navigable:select', function(e) {
        return current().trigger('select.navigable');
      });
    });
  })(jQuery);
}).call(this);
