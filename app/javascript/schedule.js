$(function() {

  $('.Add-btn').on('click',function(){
    var dwsLine = `
                    <div class="DWS-contents">
                    <div class="DWS-contents__name">
                    <input class="Add-name">
                    </div>
                    <div class="DWS-contents__schedule ui-sortable">
                    <div class="DWS-contents__input ui-sortable-handle ui-resizable">
                    <input class="DWS-contents__input--form">
                    
                    </div>
                    </div>
                    `

    $('.DWS-header').after(dwsLine);

    $(function(){
  
      $('.DWS-contents__schedule').sortable({
        sort: function(event, ui) {
          var offset = ui.helper.offset();
          ui.helper.offset({ top: offset.top + $('.DWS-contents__schedule').scrollTop() });
        }
      });

      $('.DWS-contents__input').resizable({
        maxHeight: 43,
        minHeight: 43,
      });

    });
  })

  $('.Button').on('click',function () {
    var id = $(this).attr("id");
    if(id == 'product'){
      var value = '生産'
    }else if(id == 'buy'){
      var value = '買取'
    }else if(id == 'register'){
      var value = 'レジ'
    }else if(id == 'maintenance'){
      var value = '環境整備'
    }else if(id == 'visit'){
      var value = '出張'
    }else if(id == 'rest'){
      var value = '休憩'
    }else if(id == 'toilet'){
      var value = 'TC'
    }else if(id == 'morning'){
      var value = ''
    }else{
      var value = 'その他'
    }
    var createParts = `<li class="DWS-parts__${id} Parts">${value}
                       <input class="remark"></li>`
    var dwsParts = `<div class="DWS-parts"></div>`
    $('.DWS-parts').append(createParts);
    
    $('.Parts').draggable({
      connectToSortable: '.DWS-contents__schedule',
      opacity: 0.7,
      // snap: '.DWS-contents__schedule',
      // snapMode: 'inner',
    }).resizable({
      maxHeight: 43,
      minHeight: 43,
    });

    $('.Parts').on('dblclick',function() {
      $(this).remove();
    })
  });
  $('.DWS-contents__schedule').sortable({
    sort: function(event, ui) {
      var offset = ui.helper.offset();
      ui.helper.offset({ top: offset.top + $('.DWS-contents__schedule').scrollTop() });
    }
  });
  $('.DWS-contents__input').resizable({
    maxHeight: 43,
    minHeight: 43,
  });

  

});