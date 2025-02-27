const accordionBtn=document.querySelectorAll('.accordion-button');
const accordionContent=document.querySelectorAll('.accordion-content');

accordionBtn.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        accordionBtn.forEach((btn, btnIndex) => {
            const content=accordionContent[btnIndex];
            const arrow=btn.querySelector('.arrow');

            if (index === btnIndex) {
              const isActive = btn.classList.contains('active');
              btn.classList.toggle('active', !isActive);
              content.style.maxHeight = isActive ? '0px' : content.scrollHeight + 'px';
              arrow.style.transform = isActive ? 'rotate(0deg)' : 'rotate(180deg)';
            } else {
              btn.classList.remove('active');
              content.style.maxHeight = '0px';
              arrow.style.transform = 'rotate(0deg)';
            }
        })
    })
})