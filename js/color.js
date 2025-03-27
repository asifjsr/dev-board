
const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
let index = 0;

document.getElementById('colorButton').addEventListener(
    'click', function(){
        console.log('kaj chole')
        document.body.classList.add('max-w-screen-xl');
        document.body.classList.add('mx-auto');
        document.body.classList.add(colors[index]);

        document.body.className = colors[index];
    
        // Move to the next color in the array
        index = (index + 1) % colors.length;
    }
);