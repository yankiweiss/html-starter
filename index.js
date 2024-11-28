const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    for(item of formData){
        console.log(item[0], item[1])
    }

    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formData,
    })

    .then(res => res.json())
    .then(res => console.log(res))
   
})

 