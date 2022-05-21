function buscaDog() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };
            fetch('https://dog.ceo/api/breeds/image/random', options)
                .then(response => {
                    return response.json()
                }).then(json => {
                    console.log(json);
                    display_image(json.message,
                                 220, 
                                 110, 
                                 'JavaScriptImage');
                    })
                    
    
                }

                function display_image(src, width, height, alt) {
                    var a = document.createElement("img");
                    a.src = src;
                    a.width = width;
                    a.height = height;
                    a.alt = alt;
                    document.body.appendChild(a);
                }
        