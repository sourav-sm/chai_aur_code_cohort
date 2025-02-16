// function changeBackground(){
//     document.body.style.backgroundColor="black"
// }

// function changebgtowhite(){
//     document.body.style.backgroundColor="White"
// }

function changeBackground(color){
    document.body.style.background=color
}

/******************WITH THE HELP OF EVENT LISTNER */

const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', () => {
    const currColor = document.body.style.backgroundColor;  // Corrected 'window.body' to 'document.body'
    
    if (!currColor || currColor === 'white') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
});
