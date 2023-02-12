let button=document.getElementById('btn');

button.addEventListener('click',function(){
        const inp = parseInt(document.getElementById('inp').value);
        const type = document.getElementById('type').value;

        switch(type){
            case 'kglb':
                convertKgLb(inp);
                break
            case 'lbkg':
                convertLbkg(inp);
                break
            default:
                return console.log("Error");
        }
        var LB;
        var KG;

        function convertKgLb(inp){
            let rate = 2.2046;
            LB= inp*rate;
            document.getElementById('ans').innerText= LB + ' Pounds';
        }

        function convertLbkg(inp){
            let rate = 0.4536;
            KG= inp*rate;
            document.getElementById('ans').innerText= KG +' KG';
        }
})
