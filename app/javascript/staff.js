$(function() {

  $('.Staffs-index__btn--delete').on('click', function deleteAlert() {
    if (!confirm('スタッフ情報を削除します。よろしいですか？')) {
      return false;
    } else {

    }
  });

  function buildName(staff) {
    let nameHtml =`<p class="Staffs-index__text">${staff.name}</p>`
    return nameHtml;
  }
  function buildRank(staff) {
    let rankHtml = `<div class="Staffs-index__right">
                      <p class="Staffs-index__rank">${staff.rank_name}</p>
                      <div class="Staffs-index__btn">
                        <a class="Staffs-index__btn--edit" href="/staffs/${staff.id}/edit"><i class="fas fa-pencil-alt"></i>
                        </a>
                        <a class="Staffs-index__btn--delete" rel="nofollow" data-method="delete" href="/staffs/${staff.id}"><i class="fas fa-times-circle"></i>
                        </a>
                      </div>
                    </div>`
    return rankHtml;
  }

  $('.Staff-regist__form').on('submit',function(e){
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
    .done(function(data) {
      let nameHtml = buildName(data);
      let rankHtml = buildRank(data);
      $('.Add-staff__name').append(nameHtml);
      $('.Add-staff__rank').append(rankHtml);
      $('form')[0].reset();
      $('.Staff-regist__btn').prop('disabled', false);
      $('.Staffs-index__btn--delete').on('click', function deleteAlert() {
        if (!confirm('スタッフ情報を削除します。よろしいですか？')) {
          return false;
        } else {
          return;
        }
      });
    })
    .fail(function() {
      alert('登録に失敗しました');
      $('.Staff-regist__btn').prop('disabled', false);
    })
  });
})