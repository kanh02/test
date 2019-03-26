

   function imprimir(){
            document.getElementById("triangulo").innerHTML = "";
       
            var rows = document.getElementById("input").value;
            var strip = triangular(+rows);
       
            for(var i=0;i<strip.length;i++){
                var div = document.createElement('div');
                div.className ="divblock";
                
                for(var j=0; j<strip[i].length; j++){
                    var span = document.createElement('span');
                    span.innerHTML=strip[i][j];
                    span.className ="block";
                    div.appendChild(span);
                }
                document.getElementById("triangulo").appendChild(div);
            }
        }


        function triangular(array){
            var box = [];
            var vacio;
            for(var i=0 ;i< array; i++){
                box[i]=[];
                for(var j=0; j<=i; j++){
                    if(j==i){
                        box[i].push(1);
                    }else{
                        vacio = (!!box[i-1][j-1]?box[i-1][j-1]:0)+(!!box[i-1][j]?box[i-1][j]:0);
                        box[i].push(vacio);
                    }
                }
            }
            return box;
        }