//QUESTIONARIO 1

let respostasCorretas = ["A"];

$("#btnConfirmar").on("click", function() {

  let selecionadas = $("input[name='questao']:checked");
  let corretas = 0

  $("input[name='questao']").attr('disabled', 'disabled')

  $.each(selecionadas, function() {
    let resposta = $(this);

    if (respostasCorretas.includes(resposta.val())) {
      resposta.closest('p').addClass('correta');
      corretas++;
    } else {
      resposta.closest('p').addClass('errada');
    }

  });
  let mensagem = "";

  if (corretas == 0)
    mensagem = "Você errou a alternativas"
    
  else if (corretas > 0)
    mensagem = "Você acertou epenas " + corretas + " das alternativas.";

  if (corretas == respostasCorretas.length)
    mensagem = "Parabéns, você acertou a alternativa";
    
  $("#mensagem").html(mensagem);
  $(this).addClass('escondido');
  $("#btnReset").removeClass('escondido');
  $("#mensagem").removeClass('escondido');
});


$("#btnReset").on('click', function() {
  $(this).addClass('escondido');
  $('p').removeClass('correta');
  $('p').removeClass('errada');
  $("input[name='questao']").removeAttr('disabled');
  $("input[name='questao']").prop('checked', false);
  $("#btnConfirmar").removeClass('escondido');
  $("#mensagem").toggleClass('escondido');
});


//QUESTIONARIO 2

let respostasCorretas2 = ["C2"];

$("#btnConfirmar2").on("click", function() {

  let selecionadas2 = $("input[name='questao2']:checked");
  let corretas2 = 0

  $("input[name='questao2']").attr('disabled', 'disabled')

  $.each(selecionadas2, function() {
    let resposta2 = $(this);

    if (respostasCorretas2.includes(resposta2.val())) {
      resposta2.closest('p').addClass('correta2');
      corretas2++;
    } else {
      resposta2.closest('p').addClass('errada2');
    }

  });
  let mensagem2 = "";

  if (corretas2 == 0)
    mensagem2 = "Você errou todas as alternativas"
  else if (corretas2 > 0)
    mensagem2 = "Você acertou epenas " + corretas2 + " das alternativas.";

  if (corretas2 == respostasCorretas2.length)
    mensagem2 = "Parabéns, você acertou todas as alternativas";

  $("#mensagem2").html(mensagem2);
  $(this).addClass('escondido');
  $("#btnReset2").removeClass('escondido2');
  $("#mensagem2").removeClass('escondido2');
});

$("#btnReset2").on('click', function() {
  $(this).addClass('escondido2');
  $('p').removeClass('correta2');
  $('p').removeClass('errada2');
  $("input[name='questao2']").removeAttr('disabled');
  $("input[name='questao2']").prop('checked', false);
  $("#btnConfirmar2").removeClass('escondido2');
  $("#mensagem2").toggleClass('escondido2');
});

//QUESTIONARIO 3 

let respostasCorretas3 = ["D3"];

$("#btnConfirmar3").on("click", function() {

  let selecionadas3 = $("input[name='questao3']:checked");
  let corretas3 = 0

  $("input[name='questao3']").attr('disabled', 'disabled')

  $.each(selecionadas3, function() {
    let resposta3 = $(this);

    if (respostasCorretas3.includes(resposta3.val())) {
      resposta3.closest('p').addClass('correta3');
      corretas3++;
    } else {
      resposta3.closest('p').addClass('errada3');
    }

  });
  let mensagem3 = "";

  if (corretas3 == 0)
    mensagem3 = "Você errou todas as alternativas"
  else if (corretas3 > 0)
    mensagem3 = "Você acertou epenas " + corretas3 + " das alternativas.";

  if (corretas3 == respostasCorretas3.length)
    mensagem3 = "Parabéns, você acertou todas as alternativas";

  $("#mensagem3").html(mensagem3);
  $(this).addClass('escondido');
  $("#btnReset3").removeClass('escondido3');
  $("#mensagem3").removeClass('escondido3');
}); 

$("#btnReset3").on('click', function() {
  $(this).addClass('escondido3');
  $('p').removeClass('correta3');
  $('p').removeClass('errada3');
  $("input[name='questao3']").removeAttr('disabled');
  $("input[name='questao3']").prop('checked', false);
  $("#btnConfirmar3").removeClass('escondido3');
  $("#mensagem3").toggleClass('escondido3');
  

});



//QUESTIONARIO 4 

let respostasCorretas4 = ["B4"];

$("#btnConfirmar4").on("click", function() {

  let selecionadas4 = $("input[name='questao4']:checked");
  let corretas4 = 0

  $("input[name='questao4']").attr('disabled', 'disabled')

  $.each(selecionadas4, function() {
    let resposta4 = $(this);

    if (respostasCorretas4.includes(resposta4.val())) {
      resposta4.closest('p').addClass('correta4');
      corretas4++;
    } else {
      resposta4.closest('p').addClass('errada4');
    }

  });
  let mensagem4 = "";

  if (corretas4 == 0)
    mensagem4 = "Você errou todas as alternativas"
  else if (corretas4 > 0)
    mensagem4 = "Você acertou epenas " + corretas4 + " das alternativas.";

  if (corretas4 == respostasCorretas4.length)
    mensagem4 = "Parabéns, você acertou todas as alternativas";

  $("#mensagem4").html(mensagem4);
  $(this).addClass('escondido');
  $("#btnReset4").removeClass('escondido4');
  $("#mensagem4").removeClass('escondido4');
}); 

$("#btnReset4").on('click', function() {
  $(this).addClass('escondido4');
  $('p').removeClass('correta4');
  $('p').removeClass('errada4');
  $("input[name='questao4']").removeAttr('disabled');
  $("input[name='questao4']").prop('checked', false);
  $("#btnConfirmar4").removeClass('escondido4');
  $("#mensagem4").toggleClass('escondido4');
  

});


//QUESTIONARIO 5 

let respostasCorretas5 = ["A5"];

$("#btnConfirmar5").on("click", function() {

  let selecionadas5 = $("input[name='questao5']:checked");
  let corretas5 = 0

  $("input[name='questao5']").attr('disabled', 'disabled')

  $.each(selecionadas5, function() {
    let resposta5 = $(this);

    if (respostasCorretas5.includes(resposta5.val())) {
      resposta5.closest('p').addClass('correta4');
      corretas5++;
    } else {
      resposta5.closest('p').addClass('errada4');
    }

  });
  let mensagem5 = "";

  if (corretas5 == 0)
    mensagem5 = "Você errou todas as alternativas"
  else if (corretas5 > 0)
    mensagem5 = "Você acertou epenas " + corretas5 + " das alternativas.";

  if (corretas5 == respostasCorretas5.length)
    mensagem5 = "Parabéns, você acertou todas as alternativas";

  $("#mensagem5").html(mensagem5);
  $(this).addClass('escondido');
  $("#btnReset5").removeClass('escondido5');
  $("#mensagem5").removeClass('escondido5');
}); 

$("#btnReset5").on('click', function() {
  $(this).addClass('escondido5');
  $('p').removeClass('correta5');
  $('p').removeClass('errada5');
  $("input[name='questao5']").removeAttr('disabled');
  $("input[name='questao5']").prop('checked', false);
  $("#btnConfirmar5").removeClass('escondido5');
  $("#mensagem5").toggleClass('escondido5');
  

});