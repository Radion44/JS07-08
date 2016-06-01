$(function() {
$('body').append('<form></form>');
var $wrapper = $('form');
$wrapper.addClass('wrapper');
$wrapper.append('<div></div>');
var $div1 = $('div');
$div1.append('<label>Firstname</label>');
  var $label1 = $('label');
  $label1.addClass('label1');
$div1.append('<input>');
  $("div>input").addClass('input1');
$wrapper.append('<div></div>');
var $div2 = $('div:last-child');
$div2.append('<label>Lastname</label>');
  var $label2 = $('label:last-child');
  $label2.addClass('label1');
$div2.append('<input>');
  $("div>input:last").addClass('input2');
$wrapper.append('<div></div>');
var $div3 = $('div:last-child');
$div3.append('<label>Address</label>');
  var $label3 = $('label:last-child');
  $label3.addClass('label1');
$div3.append('<input>');
  $("div>input:last").addClass('input3');
  var $links1 = $('.tab4');
$wrapper.append('<div></div>');
var $help1 = $('div:last');
$help1.addClass('help1');
$help1.append('Please provide your firstname.');
$wrapper.append('<div></div>');
var $help2 = $('div:last');
$help2.addClass('help2');
$help2.append('Please provide also your lastname.');
$wrapper.append('<div></div>');
var $help3 = $('div:last');
$help3.addClass('help3');
$help3.append('Your home or work address.');
var $links1 = $('.input1');
$links1.on('mouseover', function(e){
  if ('mouseover') {
  $('.help1').css('display', 'block');
  }
})
var $links2 = $('.input1');
$links1.on('mouseout', function(e){
  if ('mouseout') {
  $('.help1').css('display', 'none');
  }
})
var $links3 = $('.input2');
$links3.on('mouseover', function(e){
  if ('mouseover') {
  $('.help2').css('display', 'block');
  }
})
var $links4 = $('.input2');
$links4.on('mouseout', function(e){
  if ('mouseout') {
  $('.help2').css('display', 'none');
  }
})
var $links5 = $('.input3');
$links5.on('mouseover', function(e){
  if ('mouseover') {
  $('.help3').css('display', 'block');
  }
})
var $links6 = $('.input3');
$links6.on('mouseout', function(e){
  if ('mouseout') {
  $('.help3').css('display', 'none');
  }
})
$('body').append('<button></button>');
var $button = $('button');
$button.addClass('button');
$button.append('Show help');
var $links7 = $('.button');
$links7.on('click', function(e){
  if ('click') {
  $('.help1').css('display', 'block');
  $('.help2').css('display', 'block');
  $('.help3').css('display', 'block');
  }
})
});

