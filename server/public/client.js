console.log('js');

$(document).ready(readyNow);

function readyNow (){
    console.log('JQ');
    $.ajax({
        url: '/quotes',
        method: 'GET',
    }).then(function(response){
        console.log(response);
        function outputResponse(){
            for (let i = 0; i < response.length; i++) {
                let quoteList = response[i].quote;
                console.log(quoteList);
                $('ul').append(`<li>${quoteList}</li>`);
            }
        }
        outputResponse();
        
        $('li').css('color', 'purple');
        $('li').css('padding', '10px');
        $('li').css('text-align', 'center');
    });
}