fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let links = data;

        for (let link_no = 0; link_no <= ((links.length) - 1); link_no++) {

            // console.log(links[link_no]);
            let linkdiv = document.createElement('li');
            linkdiv.innerHTML = 
    `
    
        <div clas="timeline-content">
            <h5 class="date"> ${data[link_no].date} </h5>
            <h1> ${data[link_no].name} </h1>
            <img src="${data[link_no].image}">
            <p> ${data[link_no].info} </p>
            <button id="myBtn">Read More</button>
        </div>
        <div class="modal-content">
        <span class="close">×</span>
        <p>Some text in the Modal..</p>
        </div>
  

    `;
           
            document.getElementById('item').appendChild(linkdiv);            
        }

    });

    // function goFullScreen(){

    //     var elem = document.getElementById(temp);

    //     if(elem.requestFullscreen){
    //         elem.requestFullscreen();
    //     }
    //     else if(elem.mozRequestFullScreen){
    //         elem.mozRequestFullScreen();
    //     }
    //     else if(elem.webkitRequestFullscreen){
    //         elem.webkitRequestFullscreen();
    //     }
    //     else if(elem.msRequestFullscreen){
    //         elem.msRequestFullscreen();
    //     }
    // }

    // open(){
    //     getElementById('dataitem')
    // 
    // 
    // 

    // }


