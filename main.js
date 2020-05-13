$(function(){

    function prizeResult(i){
        const prizeContent =[{
            title: 'First Prize: Taipei to Tokyo Flight Ticket',
            bodyChange: 'body-first'
        },
        {
            title: 'Second Prize: 90 inch TV',
            bodyChange: 'noChange'
        },
        {
            title: 'Third Prize: Free Cinema Ticket.',
            bodyChange: 'noChange'
        },
        {
            title: 'No Prize, thank you.',
            bodyChange: 'body-none'
        }];
        //return prizeContent[i]
        const container = $('body'); 
        const div = $('<div></div>');
        div.html('<div class="app_prize">'+ prizeContent[i].title +'</div>');
        div.addClass('app'); 
        container.append(div);
        
        /*不使用jQuery的寫法
        const container = document.querySelector('body');
        const div = document.createElement('div');
        div.innerHTML = '<div class="app_prize">'+ prizeContent[i].title +'</div>';
        div.classList.add('app');
        container.appendChild(div);
        */
    }

    function whichPrize(prize){
        switch (prize){
            case 'FIRST':
                console.log(prizeResult(0));
                break;
            case 'SECOND':
                console.log(prizeResult(1));
                break;
            case 'THIRD':
                console.log(prizeResult(2));
                break;
            case 'NONE':
                console.log(prizeResult(3));
                break;
            default:
                alert('System Erro. Please Try Again.');
        }
    }

    $.ajax({
        type: "GET",
        url: "https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery",
        dataType: "json",
        success: function(result){
            whichPrize(result.prize);
        },
        error: function(jqXHR){
            alert("Error: " +jqXHR.status);
        }
    });
/*
    const container = $('body'); //const container = document.querySelector('body');
    const div = $.create('div'); //const div = document.createElement('div');
    container.classList.add(prizeContent[i].bodyChange);
    div.classList.add('app');
   */
});