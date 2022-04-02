let upLoadBtn = document.getElementById('btn--upload');
let inputVal;
let input = document.getElementById('image');
upLoadBtn.addEventListener('click', (e) => {
    inputVal =  input.value;
    e.preventDefault();
    if(!inputVal){
        console.log('Please upload an image');
    }else{
        console.log("here is the file", input.files[0]);
        let formInfo = new FormData();
        formInfo.append('picture', input.files[0]);
        fetch('http://localhost:3000/fileupload', {
            method: 'POST',
            body: formInfo
        }).then(res => res.json())
        .then(jsonRes => {
            console.log("this is the response", jsonRes);
            document.querySelector('form').reset();
            let linkDiv = document.querySelector(".imageLink");
            let imageLink = document.createElement('a'); 
            let imageLinkText = document.createTextNode(`http://localhost:3000/uploadedImages/${jsonRes.fileName}`)
            imageLink.href = 'http://localhost:3000/uploadedImages/' + jsonRes.fileName;
            imageLink.appendChild(imageLinkText);
            linkDiv.appendChild(imageLink);
        })
        .catch(err => console.log(err))
    }
    console.log("We are making http post request");
});

 