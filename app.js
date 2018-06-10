
document.querySelector('.input-values').addEventListener('submit',function(e){

    getJokes();

    e.preventDefault();
});

function getJokes(){

    const number = document.querySelector('.number').value;

    
    const xhr= new XMLHttpRequest();

    // open

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function(){
        if(this.status === 200){

            const response = JSON.parse(this.responseText);

            let output = "";
            if(response.type === 'success') {
                response.value.forEach(function(joke){
                  output += `<li>${joke.joke}</li>`;
                });
              } else {
                output += '<li>Something went wrong</li>';
              }

              document.querySelector('.joke').innerHTML = output;

        }
    }

    xhr.send();
};