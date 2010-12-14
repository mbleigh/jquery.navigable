(($)->
  $.fn.navigable = (options)->
    options = $.extend {
      tag:'li'
      focusClass:'focused'
      scroll:true,
      keyNext: 74,
      keyPrev: 75,
      keySelect: 13,
      keyCancel: 27,
      blurOnCancel:true
    }, options
    container = this
    
    $(window).keydown (e)->
      switch e.keyCode
        when options.keyNext
          $(window).trigger 'navigable:next'
        when options.keyPrev
          $(window).trigger 'navigable:prev'
        when options.keySelect
          $(window).trigger 'navigable:select'
        when options.keyCancel
          $(window).trigger 'navigable:cancel'
    
    container.find(options.tag)
      .live 'blur.navigable', ->
        $(this).removeClass options.focusClass
      .live 'focus.navigable', ->
        $(this).addClass options.focusClass
        if options.scroll
          h = $(window).height()
          o = $(this).offset().top - $(window).scrollTop()
          $(window).scrollTop($(this).offset().top - h/2)
    
    current = ->
      container.find "#{options.tag}.#{options.focusClass}:first"
    first = ->
      container.find "#{options.tag}:first"
    next = ->
      current().nextAll(options.tag).first() || first()
    prev = ->
      current().prevAll(options.tag).first() || first()
      
    navigateTo = (target)->
      if target.length > 0 && current().length > 0
        current().trigger 'blur.navigable'
        target.trigger 'focus.navigable'
      else if current().length == 0
        first().trigger 'focus.navigable'
    
    $(window).bind 'navigable:next', (e)->
      navigateTo(next())
    $(window).bind 'navigable:prev', (e)->
      navigateTo(prev())
    $(window).bind 'navigable:cancel', (e)->
      current().trigger 'blur.navigable' if options.blurOnCancel
    $(window).bind 'navigable:select', (e)->
      current().trigger 'select.navigable'
)(jQuery)