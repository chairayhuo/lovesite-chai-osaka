console.log("connected!");

// const forms = document.forms.messageF;
// forms.addEventListener("submit", getData);


// let name = document.querySelector("#name");
// let email = document.querySelector("#email");
// let message = document.querySelector("#message");

// let xhr = new XMLHttpRequest();

// function getData(event) {

//     event.preventDefault();

//     let req = new XMLHttpRequest();
//     const formData = new FormData(forms);

//     req.onreadystatechange = function (resEvent) {

//         console.log("here");

// 		if (req.readyState === XMLHttpRequest.DONE) {

//             if (req.status === 200) {

//                 let responseJSON = JSON.parse(req.responseText);
                
//                 console.log(req.responseText);
//                 if (responseJSON.success == "true") {
                
//                 document.querySelector("#formMessage").innerHTML = "Thank you!";

//                 }else{
//                     document.querySelector("#formMessage").innerHTML = "OOPS FAILURE";
//                 }
				
// 			} else {
//                 console.log("boom");
// 			}
// 		}
// 	};
// 	req.open("POST", "process-message.php");
//     req.send(formData);
// };

// document.querySelector("#admin").addEventListener("submit", getData2);

// function getData2(event) {

//     event.preventDefault();

//     let req2 = new XMLHttpRequest();
//     let formData2 = new FormData(event.target);

//     req2.onreadystatechange = function () {

//         console.log("here2");

// 		if (req2.readyState === XMLHttpRequest.DONE) {

//                 if (req2.status === 200) {

//                     let responseJSON = JSON.parse(req2.responseText);
                  
//                     console.log(req2.responseText);

//                     if (responseJSON.success == "true") {
                    
//                     console.log("Login successfully!")
//                     loadDashboard();

// 					}else{
//                         console.log("Login failed")
// 					}
				
// 			} else {
//                 console.log("boom");
// 			}
// 		}
// 	};
// 	req2.open("POST", "process-login.php");
//     req2.send(formData2);
// };


// function loadDashboard() {
//     let req = new XMLHttpRequest();
//     req.onreadystatechange = function() {
//         if (req.readyState === XMLHttpRequest.DONE) {
//             console.log(req.responseText);
//             if (req.status === 200) {
//                 let messages = JSON.parse(req.responseText);
//                 displayMessages(messages);
//                 document.querySelector("#admin").style.display = "none"; 
//                 document.querySelector("#dashboard").style.display = "block";
//             }
//         }
//     };

//     req.open("GET", "get-messages.php");
//     req.send();
// }

// function displayMessages(messages) {
//     let tableBody = document.querySelector("#messageTable tbody");
//     tableBody.innerHTML = '';

//     messages.forEach(function(message) {
//         let row = document.createElement("tr");
//         row.setAttribute('data-id', message.id);
//         row.innerHTML = `
//             <td>${message.name}</td>
//             <td>${message.email}</td>
//             <td>${message.message}</td>
//             <td>
//                 <button class="edit-button">Edit</button>
//                 <button class="delete-button">Delete</button>
//             </td>
//         `;
//         tableBody.appendChild(row);
//     });

//     addEditListeners();
//     addDeleteListeners(); 
// }


// function addEditListeners() {
//     document.querySelectorAll('.edit-button').forEach(function(button) {
//         button.addEventListener('click', function() {
//             let row = button.closest('tr');
//             row.querySelectorAll('.text').forEach(el => el.style.display = 'none');
//             row.querySelectorAll('.edit').forEach(el => el.style.display = 'inline');
//             button.style.display = 'none';
//             row.querySelector('.confirm-button').style.display = 'inline';
//         });
//     });

//     document.querySelectorAll('.confirm-button').forEach(function(button) {
//         button.addEventListener('click', function() {
//             let row = button.closest('tr');
//             let id = row.getAttribute('data-id'); 
//             let name = row.querySelector('.edit.name').value;
//             let email = row.querySelector('.edit.email').value;
//             let message = row.querySelector('.edit.message').value;

//             sendUpdateRequest(name, email, message, id);

//             row.querySelectorAll('.text').forEach(el => el.style.display = 'inline');
//             row.querySelectorAll('.edit').forEach(el => el.style.display = 'none');
//             button.style.display = 'none';
//             row.querySelector('.edit-button').style.display = 'inline';
//         });
//     });
// }

// function addDeleteListeners() {
//     document.querySelectorAll('.delete-button').forEach(function(button) {
//         button.addEventListener('click', function() {
//             let row = button.closest('tr');
//             let id = row.getAttribute('data-id');

//             if (confirm("Are you sure you want to delete this message?")) {
//                 deleteMessage(id, row);
//             }
//         });
//     });
// }

// function deleteMessage(id, row) {
//     let req = new XMLHttpRequest();
//     req.onreadystatechange = function() {
//         if (req.readyState === XMLHttpRequest.DONE) {
//             if (req.status === 200) {
//                 row.remove();
//             }
//         }
//     };
//     req.open("POST", "process-delete.php");
//     req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     req.send(`id=${encodeURIComponent(id)}`);
// }


// document.querySelector("#showInsertFormButton").addEventListener("click", function() {
//     document.querySelector("#insertForm").style.display = "block";
//     document.querySelector("#showInsertFormButton").style.display = "none";
// });

// document.querySelector("#confirmInsertButton").addEventListener("click", function() {
//     let name = document.querySelector("#newName").value;
//     let email = document.querySelector("#newEmail").value;
//     let message = document.querySelector("#newMessage").value;

//     insertNewMessage(name, email, message);
// });

// function insertNewMessage(name, email, message) {
//     let req = new XMLHttpRequest();
//     req.onreadystatechange = function() {
//         if (req.readyState === XMLHttpRequest.DONE) {
//             if (req.status === 200) {
//                 let response = JSON.parse(req.responseText);
//                 if (response.success === "true") {

//                     displayNewMessage(response.data);

//                     clearInsertForm();

//                     document.querySelector("#insertForm").style.display = "none";
//                     document.querySelector("#showInsertFormButton").style.display = "block";
//                 } else {

//                     console.error("Error inserting message:", response.error);
//                 }
//             }
//         }
//     };

//     req.open("POST", "process-insert.php");
//     req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     req.send(`name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`);
// }

// function displayNewMessage(message) {
//     let tableBody = document.querySelector("#messageTable tbody");
//     let row = document.createElement("tr");
//     row.setAttribute('data-id', message.id);
//     row.innerHTML = `
//         <td>${message.name}</td>
//         <td>${message.email}</td>
//         <td>${message.message}</td>
//         <td>
//             <button class="edit-button">Edit</button>
//             <button class="delete-button">Delete</button>
//         </td>
//     `;
//     tableBody.appendChild(row);

//     addEditListeners();
//     addDeleteListeners();
// }



// function clearInsertForm() {
//     document.querySelector("#newName").value = '';
//     document.querySelector("#newEmail").value = '';
//     document.querySelector("#newMessage").value = '';
// }


// function clearInsertForm() {
//     document.querySelector("#newName").value = '';
//     document.querySelector("#newEmail").value = '';
//     document.querySelector("#newMessage").value = '';
// }



// document.querySelector("#logoutButton").addEventListener("click", function() {
//     let req = new XMLHttpRequest();
//     req.onreadystatechange = function() {
//         if (req.readyState === XMLHttpRequest.DONE) {
//             if (req.status === 200) {
//                 document.querySelector("#dashboard").style.display = "none";
//                 document.querySelector("#logoutButton").style.display = "none";
//                 document.querySelector("#username").value = '';
//                 document.querySelector("#password").value = '';
//                 document.querySelector("#admin").style.display = "block";
//             }
//         }
//     };

//     req.open("POST", "process-logout.php");
//     req.send();
// });

// function handleLogin() {
//     let username = document.querySelector("#username").value; 
//     let password = document.querySelector("#password").value;

//     let req = new XMLHttpRequest();
//     req.onreadystatechange = function() {
//         if (req.readyState === XMLHttpRequest.DONE) {
//             if (req.status === 200) {
//                 let response = JSON.parse(req.responseText);
//                 if (response.success === "true") {
//                     onLoginSuccess(); 
//                 } else {

//                     console.error("Login failed: ", response.error);
//                 }
//             }
//         }
//     };

//     req.open("POST", "process-login.php");
//     req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     req.send(`username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);
// }


// function onLoginSuccess() {

//     document.querySelector("#dashboard").style.display = "block";


//     document.querySelector("#logoutButton").style.display = "inline"; 
// }

// document.querySelector("#admin").addEventListener("submit", function(event) {
//     event.preventDefault(); 
//     handleLogin();
// });


// function addEditListeners() {
//     document.querySelectorAll('.edit-button').forEach(function(editButton) {
//         editButton.addEventListener('click', function() {
//             let row = editButton.closest('tr');
//             row.querySelectorAll('.text').forEach(el => el.style.display = 'none');
//             row.querySelectorAll('.edit').forEach(el => el.style.display = 'inline');
//             editButton.style.display = 'none';
//             row.querySelector('.confirm-button').style.display = 'inline';
//         });
//     });

//     document.querySelectorAll('.confirm-button').forEach(function(confirmButton) {
//         confirmButton.addEventListener('click', function() {
//             let row = confirmButton.closest('tr');
//             let name = row.querySelector('.edit.name').value;
//             let email = row.querySelector('.edit.email').value;
//             let message = row.querySelector('.edit.message').value;
//             let id = row.getAttribute('data-id');

//             sendUpdateRequest(name, email, message, id);

//             row.querySelectorAll('.text').forEach(el => el.style.display = 'inline');
//             row.querySelectorAll('.edit').forEach(el => el.style.display = 'none');
//             confirmButton.style.display = 'none';
//             editButton.style.display = 'inline';
//         });
//     });
// }

// function addEditListeners() {
//     document.querySelectorAll('.edit-button').forEach(function(editButton) {
//         editButton.addEventListener('click', function() {
//             let row = editButton.closest('tr');
//             row.querySelectorAll('.text').forEach(el => el.style.display = 'none');
//             row.querySelectorAll('.edit').forEach(el => el.style.display = 'inline');
//             editButton.style.display = 'none';
//             row.querySelector('.confirm-button').style.display = 'inline';
//         });
//     });

//     document.querySelectorAll('.confirm-button').forEach(function(confirmButton) {
//         confirmButton.addEventListener('click', function() {
//             let row = confirmButton.closest('tr');
//             let editButton = row.querySelector('.edit-button'); 
//             let name = row.querySelector('.edit.name').value;
//             let email = row.querySelector('.edit.email').value;
//             let message = row.querySelector('.edit.message').value;
//             let id = row.getAttribute('data-id'); 
    
//             sendUpdateRequest(name, email, message, id);
    
//             row.querySelectorAll('.text').forEach(el => el.style.display = 'inline');
//             row.querySelectorAll('.edit').forEach(el => el.style.display = 'none');
//             confirmButton.style.display = 'none';
//             editButton.style.display = 'inline'; 
//         });
//     });
    
// }


// function sendUpdateRequest(name, email, message, id) {
//     let req = new XMLHttpRequest();
//     req.onreadystatechange = function() {
//         if (req.readyState === XMLHttpRequest.DONE) {
//             if (req.status === 200) {
//                 let row = document.querySelector(`tr[data-id='${id}']`);
//                 if (row) {
//                     row.querySelector('.text.name').textContent = name;
//                     row.querySelector('.text.email').textContent = email;
//                     row.querySelector('.text.message').textContent = message;
//                 }
//             }
//         }
//     };
//     req.open("POST", "process-update.php");
//     req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     req.send(`name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}&id=${encodeURIComponent(id)}`);
// }




let settings = {

    scrollWheel: {
 
        enabled: true,
       
        factor: 1
    },


    scrollZones: {
       
        enabled: true,
        
        speed: 15
    },


    excludeSelector: 'input:focus, select:focus, textarea:focus, audio, video, iframe',


    linkScrollSpeed: 1000
};


window.addEventListener('load', function() {
    setTimeout(function() {
        document.body.classList.remove('is-preload');
    }, 100);
});


if (settings.scrollWheel.enabled) {

    let normalizeWheel = function(event) {
        let pixelStep = 10,
            lineHeight = 40,
            pageHeight = 800,
            sX = 0,
            sY = 0,
            pX = 0,
            pY = 0;

        if ('detail' in event)
            sY = event.detail;
        else if ('wheelDelta' in event)
            sY = event.wheelDelta / -120;
        else if ('wheelDeltaY' in event)
            sY = event.wheelDeltaY / -120;

        if ('wheelDeltaX' in event)
            sX = event.wheelDeltaX / -120;

        if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
            sX = sY;
            sY = 0;
        }

        pX = sX * pixelStep;
        pY = sY * pixelStep;

        if ('deltaY' in event)
            pY = event.deltaY;

        if ('deltaX' in event)
            pX = event.deltaX;

        if ((pX || pY) && event.deltaMode) {

            if (event.deltaMode == 1) {
                pX *= lineHeight;
                pY *= lineHeight;
            } else {
                pX *= pageHeight;
                pY *= pageHeight;
            }

        }

        if (pX && !sX)
            sX = (pX < 1) ? -1 : 1;

        if (pY && !sY)
            sY = (pY < 1) ? -1 : 1;

        return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY
        };
    };

    document.body.addEventListener('wheel', function(event) {

        event.preventDefault();
        event.stopPropagation();

        stopScrollAnimation();


        let n = normalizeWheel(event),
            x = (n.pixelX != 0 ? n.pixelX : n.pixelY),
            delta = Math.min(Math.abs(x), 150) * settings.scrollWheel.factor,
            direction = x > 0 ? 1 : -1;


        document.documentElement.scrollLeft += delta * direction;
    });
}


if (settings.scrollZones.enabled) {

    let leftScrollZone = document.createElement('div');
    leftScrollZone.className = 'scrollZone left';
    let rightScrollZone = document.createElement('div');
    rightScrollZone.className = 'scrollZone right';


    document.body.appendChild(leftScrollZone);
    document.body.appendChild(rightScrollZone);

    let paused = false;
    let intervalId = null;
    let direction;


    let activate = function(d) {

        if (paused) return;


        stopScrollAnimation();


        direction = d;


        clearInterval(intervalId);
        intervalId = setInterval(function() {
            document.documentElement.scrollLeft += settings.scrollZones.speed * direction;
        }, 25);
    };


    leftScrollZone.addEventListener('mouseenter', function() { activate(-1); });
    rightScrollZone.addEventListener('mouseenter', function() { activate(1); });


    [leftScrollZone, rightScrollZone].forEach(function(zone) {
        zone.addEventListener('mouseleave', function() { clearInterval(intervalId); });
        zone.addEventListener('mousedown', function() { clearInterval(intervalId); });
    });


    let deactivate = function() {

        paused = false;


        clearInterval(intervalId);
    };


    let wrapper = document.getElementById('wrapper'); 
    wrapper.appendChild(leftScrollZone);
    wrapper.appendChild(rightScrollZone);


    leftScrollZone.style.left = '0';
    rightScrollZone.style.right = '0';

    leftScrollZone.addEventListener('mouseenter', function() { activate(-1); });
    rightScrollZone.addEventListener('mouseenter', function() { activate(1); });


    [leftScrollZone, rightScrollZone].forEach(function(zone) {
        zone.addEventListener('mouseleave', deactivate);
        zone.addEventListener('mousedown', deactivate);
    });


    let pauseScrollZone = function() {

        paused = true;

        setTimeout(function() {
            paused = false;
        }, 500);
    };


    let scrollAnimation;


function stopScrollAnimation() {
    if (scrollAnimation) {
        cancelAnimationFrame(scrollAnimation);
        scrollAnimation = null;
    }
}


document.body.addEventListener('wheel', function(event) {

    event.preventDefault();
    event.stopPropagation();


    stopScrollAnimation();

    let n = normalizeWheel(event);
    let x = (n.pixelX != 0 ? n.pixelX : n.pixelY);
    let delta = Math.min(Math.abs(x), 150) * settings.scrollWheel.factor;
    let direction = x > 0 ? 1 : -1;

    function animateScroll() {
        document.documentElement.scrollLeft += delta * direction;
        if (delta > 0) {
            scrollAnimation = requestAnimationFrame(animateScroll);
        }
    }

    animateScroll();
})
}



let galleries = document.querySelectorAll('.gallery');

galleries.forEach(function(gallery) {
    gallery.addEventListener('click', function(event) {

        let target = event.target;


        if (target.tagName !== 'A') return;


        let modal = gallery.querySelector('.modal');
        let modalImg = modal.querySelector('img');


        let href = target.getAttribute('href');


        if (!href.match(/\.(jpg|gif|png|mp4)$/)) return;


        event.preventDefault();
        event.stopPropagation();


        if (modal._locked) return;


        modal._locked = true;


        modalImg.src = href;


        modal.classList.add('visible');


        modal.focus();


        setTimeout(function() {
            modal._locked = false;
        }, 600);
    });
});


let modals = document.querySelectorAll('.modal');


modals.forEach(function(modal) {
    modal.addEventListener('click', function(event) {

        let modalImg = modal.querySelector('img');


        if (modal._locked || !modal.classList.contains('visible')) return;


        event.stopPropagation();


        modal._locked = true;


        modal.classList.remove('loaded');

        setTimeout(function() {
            modal.classList.remove('visible');

            setTimeout(function() {

                modalImg.src = '';


                modal._locked = false;


                document.body.focus();
            }, 475);
        }, 125);
    });
});


document.addEventListener('keydown', function(event) {
    let modal = document.querySelector('.modal.visible');
    if (!modal) return;


    if (event.keyCode === 27) {

        modal.click();
    }
});


modals.forEach(function(modal) {
    modal.addEventListener('mouseup', function(event) {
        event.stopPropagation();
    });

    modal.addEventListener('mousedown', function(event) {
        event.stopPropagation();
    });

    modal.addEventListener('mousemove', function(event) {
        event.stopPropagation();
    });
});


let modal = document.createElement('div');
modal.className = 'modal';
modal.tabIndex = -1;
modal.innerHTML = '<div class="inner"><img src="" /></div>';
document.body.insertBefore(modal, document.body.firstChild);


let modalImg = modal.querySelector('img');
modalImg.addEventListener('load', function(event) {

    setTimeout(function() {

        if (!modal.classList.contains('visible')) return;


        modal.classList.add('loaded');
    }, 275);
});

document.addEventListener('DOMContentLoaded', function() {

    var galleryImages = document.querySelectorAll('.gallery a');


    if (galleryImages.length > 0) {

        var modal = document.getElementById('myModal');

        if (modal) {
            var modalImg = modal.querySelector('.modal-content');
            let closeSpan = modal.querySelector('.close');


            galleryImages.forEach(function(imgLink) {
                imgLink.addEventListener('click', function(event) {
                    event.preventDefault();

                    modal.style.display = 'block';
                    modalImg.src = this.href;
                });
            });

            closeSpan.addEventListener('click', function() {
                modal.style.display = 'none';
            });
        }
    }
});



