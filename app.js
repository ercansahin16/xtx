 const formm=document.querySelector("#formto")

 const RunEvent=()=>{
formm.addEventListener("submit",degis)
 }

const degis=(x)=>{
    x.preventDefault();
 // Tüm seçicilerin kullanımını örneklendiriyoruz
 
    // 1. ID Seçici
    const mainTitle = document.getElementById('main-title');
    mainTitle.style.color = 'blue';

    // 2. Class Seçici
    const paragraphs = document.getElementsByClassName('text');
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.add('sariYap');
    }

    // 3. Tag (Etiket) Seçici
    const listItems = document.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.fontWeight = 'bold';
    }

    // 4. querySelector (CSS Seçici) - İlk eşleşen öğe
    const firstParagraph = document.querySelector('.text');
    firstParagraph.style.fontSize = '20px';

    // 5. querySelectorAll (CSS Seçici) - Tüm eşleşen öğeler
    const allItems = document.querySelectorAll('.item');
    //allItems.forEach(item => item.style.color = 'red');
  allItems.forEach(x=>x.style.backgroundColor="green")
  allItems.forEach(x=>x.style.color="white")

    // 6. name Seçici
    const usernameInput = document.getElementsByName('username')[0];
    usernameInput.value = 'Seçici Test';

    // 7. Çocuk Seçici
    const containerDiv = document.querySelector('.container');
    const childParagraphs = containerDiv.querySelectorAll('p');
    childParagraphs.forEach(p => p.style.border = '1px solid black');

    // 8. Ebeveyn Seçici
    const uniqueElement = document.getElementById('unique-element');
    const parentDiv = uniqueElement.parentNode;
    parentDiv.style.backgroundColor = '#f0f0f0';
}
const pasiff=document.getElementById("run-jss")
 const pasif=()=>{
pasiff.classList.add=("pasif")
 }
 pasiff.addEventListener("click", pasif);
 pasif();
RunEvent();
