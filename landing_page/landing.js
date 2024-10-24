window.onload = function() {
    document.getElementById("popupForm").classList.add("show");
};

function closePopup() {
    document.getElementById("popupForm").classList.remove("show");
    setTimeout(function() {
        document.getElementById("popupForm").style.display = "none";
    }, 500); 
}

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    if (this.checkValidity()) {
        alert("Form submitted successfully!");
        closePopup(); 
    }
});

const anchor1 = document.querySelector('a[href="#targetContainer1"]');
if (anchor1) { 
    anchor1.addEventListener('click', (e) => {
        e.preventDefault(); 
        document.getElementById('targetContainer1').scrollIntoView({
            behavior: 'smooth' 
        });
    });
}

const anchor2 = document.querySelector('a[href="#targetContainer2"]');
if (anchor2) { 
    anchor2.addEventListener('click', (e) => {
        e.preventDefault(); 
        document.getElementById('targetContainer2').scrollIntoView({
            behavior: 'smooth' 
        });
    });
}

