$('#hear-again').after('<div>(Clicked <span id="hear-again-output">0</span> times)</div>');
$('#hear-again').click(function() {
    $('#hear-again-output').html(function(i, val) { return val*1+1 });
});
