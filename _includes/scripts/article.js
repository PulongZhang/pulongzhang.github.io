(function() {
  var SOURCES = window.TEXT_VARIABLES.sources;
  window.Lazyload.js(SOURCES.jquery, function() {
    $(function() {
      var $this ,$scroll;
      var $articleContent = $('.js-article-content');
      var hasSidebar = $('.js-page-root').hasClass('layout--page--sidebar');
      var scroll = hasSidebar ? '.js-page-main' : 'html, body';
      $scroll = $(scroll);

      $articleContent.find('.highlight').each(function() {
        $this = $(this);
        $this.attr('data-lang', $this.find('code').attr('data-lang'));
        
        // 添加复制按钮
        var $copyBtn = $('<button class="copy-button">复制</button>');
        $this.parent().css('position', 'relative').append($copyBtn);
        
        $copyBtn.on('click', function(e) {
          e.preventDefault();
          var $btn = $(this);
          var codeText = $this.find('code').text();
          
          // 使用 Clipboard API 复制
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(codeText).then(function() {
              $btn.text('已复制').addClass('copied');
              setTimeout(function() {
                $btn.text('复制').removeClass('copied');
              }, 2000);
            });
          } else {
            // 降级方案
            var $temp = $('<textarea>').val(codeText).appendTo('body').select();
            document.execCommand('copy');
            $temp.remove();
            $btn.text('已复制').addClass('copied');
            setTimeout(function() {
              $btn.text('复制').removeClass('copied');
            }, 2000);
          }
        });
      });
      $articleContent.find('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').each(function() {
        $this = $(this);
        $this.append($('<a class="anchor d-print-none" aria-hidden="true"></a>').html('<i class="fas fa-anchor"></i>'));
      });
      $articleContent.on('click', '.anchor', function() {
        $scroll.scrollToAnchor('#' + $(this).parent().attr('id'), 400);
      });
    });
  });
})();
