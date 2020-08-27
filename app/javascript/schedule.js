$(function() {

  function buildTask(task) {
    let taskHtml =`
                  <form class="button_to" method="post" action="/schedules/new">
                    <input class="Origin-btn ${task.name}" name="${task.color}" type="submit" value="${task.name}">
                  </form>
                  <a class="Task-delete__btn" name="${task.color}" rel="nofollow" data-method="delete" href="/tasks/${task.id}">
                    <i class="fas fa-times-circle delete-icon"></i>
                  </a>
                  `
    return taskHtml;
  }

  $('.Origin-task__form').on('submit',function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let className = `${data.name}`;
      let taskHtml = buildTask(data);
      console.log(className);
      if( data.name ) {
        $('.Schedule-btn').append(taskHtml);
      }else{
        alert('生成に失敗しました');
      }
      $('form')[0].reset();
      $('.Modal-content__btn--submit').prop('disabled', false);
      $('.Modal-window').fadeOut();
      $('.Parts').css('z-index','30');
      $('.'+className).on('click',function(e) {
        e.preventDefault();
        var value = (this).value;
        var color = (this).name;
        var originalParts = `<li class="DWS-parts__${value} Parts Origin-parts">${value}
                            <input class="remark"></li>`
        var colorClass =`DWS-parts__${value}`
        $('.DWS-parts').append(originalParts);
        $('.'+colorClass).css('background-color', color)

        $('.Parts').draggable({
          connectToSortable: '.DWS-contents__schedule',
          opacity: 0.7,
          snap: '.Quarter',
          snapMode: 'inner',
          stop: function( event, ui ){
            $('.DWS-parts').prepend(this);
            $(this).wrap('<div style="position:absolute;"></div>');
          }
        }).resizable({
          handles: 'e,w',
          grid: [21.7,],
          stop: function(event, ui) {
            $('.DWS-parts__text').html('ダブルクリックで削除');
          }
        });

        $('.DWS-parts__text').html('ドラッグで運ぶ');

        $('.Parts').on('dblclick',function() {
          $(this).remove();
          $('.DWS-parts__text').html('下のボタンをクリック');
        });

      });
    })
    .fail(function() {
      alert('生成に失敗しました');
      $('.Modal-content__btn--submit').prop('disabled', false);
    })
  })

  $('.Modal-open').on('click', function() {
    $('.Modal-window').fadeIn();
    $('.Parts').css('z-index','0');
  });

  $('.Modal-close').on('click', function() {
    $('.Modal-window').fadeOut();
    $('.Parts').css('z-index','30');
  });

  $('.Print-btn').on('click', function(){
    window.print();
  });

  $('.Add-btn').on('click',function(){
    var quarters = `<div class="Quarter"></div>
                    <div class="Quarter"></div>
                    <div class="Quarter"></div>
                    <div class="Quarter"></div>`
    var hours = `<div class="Hour">
                   ${quarters}
                 </div>
                 `
    var hoursGroup = `${hours}${hours}${hours}${hours}${hours}${hours}
                      ${hours}${hours}${hours}${hours}${hours}${hours}`
    var dwsLine = `
                    <div class="DWS-contents">
                      <div class="DWS-contents__name">
                        <input class="Add-name"></div>
                        <div class="DWS-contents__memo">
                          <div class="DWS-contents__input">
                            <input class="DWS-contents__input--form">
                          </div>
                        </div>
                        <div class="DWS-contents__schedule ui-droppable">
                          ${hoursGroup}
                      </div>
                    </div>
                    `

    $('.DWS-header').after(dwsLine);

    $(function(){
  
      $('.DWS-contents__schedule').droppable({
        accept: '.Parts',
        drop: function(event, ui) {
          $('.DWS-parts__text').html('幅の長さを変えられます');
        }
      });

    });
  })

  $('.Origin-btn').on('click',function(e) {
    e.preventDefault();
    var value = (this).value;
    var color = (this).name;
    var originalParts = `<li class="DWS-parts__${value} Parts Origin-parts">${value}
                         <input class="remark"></li>`
    var colorClass =`DWS-parts__${value}`
    $('.DWS-parts').append(originalParts);
    $('.'+colorClass).css('background-color', color)

    $('.Parts').draggable({
      connectToSortable: '.DWS-contents__schedule',
      opacity: 0.7,
      snap: '.Quarter',
      snapMode: 'inner',
      stop: function( event, ui ){
        $('.DWS-parts').prepend(this);
        $(this).wrap('<div style="position:absolute;"></div>');
      }
    }).resizable({
      handles: 'e,w',
      grid: [21.7,],
      stop: function(event, ui) {
        $('.DWS-parts__text').html('ダブルクリックで削除');
      }
    });

    $('.DWS-parts__text').html('ドラッグで運ぶ');

    $('.Parts').on('dblclick',function() {
      $(this).remove();
      $('.DWS-parts__text').html('下のボタンをクリック');
    });

  });

  $('.Button').on('click',function () {
    var id = $(this).attr("id");
    if(id == 'product'){
      var value = '生産'
    }else if(id == 'buy'){
      var value = '買取'
    }else if(id == 'register'){
      var value = 'レジ'
    }else if(id == 'maintenance'){
      var value = 'メンテ'
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

    $('.DWS-parts').append(createParts);
    $('.Parts').draggable({
      connectToSortable: '.DWS-contents__schedule',
      opacity: 0.7,
      snap: '.Quarter',
      snapMode: 'inner',
      stop: function( event, ui ){
        $('.DWS-parts').prepend(this);
        $(this).wrap('<div class="resize-wrapper" style="position:absolute;"></div>');
      }

    }).resizable({
      handles: 'e,w',
      grid: [21.7,],
      stop: function(event, ui) {
        $('.DWS-parts__text').html('ダブルクリックで削除');
      }
    });

    $('.DWS-parts__text').html('ドラッグで運ぶ');

    $('.Parts').on('dblclick',function() {
      $(this).remove();
      $('.DWS-parts__text').html('下のボタンをクリック');
    })
  });

  $('.DWS-contents__schedule').droppable({
    accept: '.Parts',
    drop: function(event, ui) {
      $('.DWS-parts__text').html('幅の長さを変えられます');
    }
  });

});