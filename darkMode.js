document.getElementById("dark").addEventListener('click', ()=>{
    if(document.getElementById('dark').classList.contains('dark')){
        document.querySelector('body').style.background = 'var(--lGreyBg)';
        document.querySelector('body').style.color = 'var(--lBlueTex)';
        document.querySelector('.enter').style.color = 'var(--lBlueTex)';
        document.querySelector('.enter').classList.add('your-class');
        document.querySelector('.selected').style.color = 'var(--lBlueTex)';
        document.querySelector('.options-container').style.color = 'var(--lBlueTex)';
        document.querySelector('.country').style.color = 'var(--lBlueTex)';
        document.querySelector('header').style.background = 'var(--dTexlElwhite)';
        document.querySelector('.backk').style.background = 'var(--dTexlElwhite)';
        document.querySelector('.options-container').style.background = 'var(--dTexlElwhite)';
        document.getElementById('dark').classList.toggle('dark');
        document.querySelector('.input').style.background = 'var(--dTexlElwhite)';
        document.querySelector('.enter').style.background = 'var(--dTexlElwhite)';
        document.querySelector('.selected').style.background = 'var(--dTexlElwhite)';
        document.querySelectorAll('.card').forEach((el)=>{
            el.style.background = 'var(--dTexlElwhite)';
            el.style.color = 'var(--lBlueTex)';
            document.querySelectorAll('.pop').forEach((ll)=>{
                ll.style.color = 'var(--lBlueTex)';
            })
        })
        document.querySelectorAll('.neigh').forEach((el)=>{
            el.style.background = 'var(--dTexlElwhite)';
            el.style.color = 'var(--lBlueTex)';
        })
        document.querySelectorAll('small').forEach((el)=>{
            // el.style.background = 'var(--dTexlElwhite)';
            el.style.color = 'var(--lBlueTex)';
        })
        document.querySelectorAll('.country').forEach((el)=>{
            // el.style.background = 'var(--dTexlElwhite)';
            el.style.color = 'var(--lBlueTex)';
        })
        // document.querySelectorAll('h6').forEach((el)=>{
        //     // el.style.background = 'var(--dTexlElwhite)';
        //     el.style.color = 'rgba(0, 0, 0, 0.915)';
        //     document.querySelectorAll('.small').forEach((ll)=>{
        //         ll.style.color = 'rgba(0, 0, 0, 0.615) !important';
        //     })
        // })
        
    }
    else{
        // document.querySelectorAll('h6').forEach((el)=>{
        //     // el.style.background = 'var(--dTexlElwhite)';
        //     el.style.color = 'rgba(255, 255, 255, 0.915)';
        //     document.querySelectorAll('.small').forEach((ll)=>{
        //         ll.style.color = 'rgba(255, 255, 255, 0.615) !important';
        //     })
        // })
        document.querySelectorAll('.neigh').forEach((el)=>{
            el.style.background = 'var(--dBlueEl)';
            el.style.color = 'var(--dTexlElwhite)';
        })
        document.querySelectorAll('small').forEach((el)=>{
            // el.style.background = 'var(--dBlueEl)';
            el.style.color = 'var(--dTexlElwhite)';
        })
        document.querySelectorAll('.country').forEach((el)=>{
            // el.style.background = 'var(--dBlueEl)';
            el.style.color = 'var(--dTexlElwhite)';
        })
        document.querySelector('.enter').classList.remove('your-class');
        document.querySelector('body').style.background = 'var(--dBlueBg)';
        document.querySelector('.selected').style.color = 'var(--dTexlElwhite)';
        document.querySelector('.options-container').style.color = 'var(--dTexlElwhite)';
        document.getElementById('dark').classList.toggle('dark');
        document.querySelector('.input').style.background = 'var(--dBlueEl)';
        document.querySelector('.backk').style.background = 'var(--dBlueEl)';
        document.querySelector('.options-container').style.background = 'var(--dBlueEl)';
        document.querySelector('header').style.background = 'var(--dBlueEl)';
        document.querySelector('.enter').style.background = 'var(--dBlueEl)';
        document.querySelector('.selected').style.background = 'var(--dBlueEl)';
        document.querySelector('body').style.color = 'var(--dTexlElwhite)';
        document.querySelector('.enter').style.color = 'var(--dTexlElwhite)';
        document.querySelectorAll('.card').forEach((el)=>{
            el.style.background = 'var(--dBlueEl)';
            el.style.color = 'var(--dTexlElwhite)';
            document.querySelectorAll('.pop').forEach((ll)=>{
                ll.style.color = 'rgba(255, 255, 255, 0.766)';
            })
        })
    }
})