function element(){
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    if(rs.getPropertyValue('--dBlueEl') === 'hsl(209, 23%, 22%)'){
        r.style.setProperty('--dBlueEl', 'hsl(0, 0%, 100%)');
    }
    else if(rs.getPropertyValue('--dBlueEl') === 'hsl(0, 0%, 100%)'){
        r.style.setProperty('--dBlueEl', 'hsl(209, 23%, 22%)');
    }
}

function hover(){
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    if(rs.getPropertyValue('--dBlueElHover') === 'hsl(209, 23%, 2%)'){
        r.style.setProperty('--dBlueElHover', 'hsl(0, 0%, 80%)');
    }else if(rs.getPropertyValue('--dBlueElHover') === 'hsl(0, 0%, 80%)'){
        r.style.setProperty('--dBlueElHover', 'hsl(209, 23%, 2%)');
    }
}


// function text(){
//     var r = document.querySelector(':root');
//     var rs = getComputedStyle(r);
//     if(rs.getPropertyValue('--dBlueElHover') === 'hsl(209, 23%, 2%)'){
//         r.style.setProperty('--dBlueElHover', 'hsl(0, 0%, 80%)');
//     }else if(rs.getPropertyValue('--dBlueElHover') === 'hsl(0, 0%, 80%)'){
//         r.style.setProperty('--dBlueElHover', 'hsl(209, 23%, 2%)');
//     }
// }




document.getElementById("dark").addEventListener('click', ()=>{
    element();
    hover();
    if(document.getElementById('dark').classList.contains('dark')){
        document.querySelector('body').style.background = 'var(--lGreyBg)';
        document.querySelector('body').style.color = 'var(--lBlueTex)';
        document.querySelector('.enter').style.color = 'var(--lBlueTex)';
        document.querySelector('.enter').classList.add('your-class');
        document.querySelector('.selected').style.color = 'var(--lBlueTex)';
        document.querySelector('.options-container').style.color = 'var(--lBlueTex)';
        document.querySelector('.country').style.color = 'var(--lBlueTex)';
        document.getElementById('dark').classList.toggle('dark');
        document.querySelectorAll('.card').forEach((el)=>{
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
            el.style.color = 'var(--lBlueTex)';
        })
    }else{
            document.querySelectorAll('.neigh').forEach((el)=>{
                el.style.color = 'var(--dTexlElwhite)';
            })
            document.querySelectorAll('small').forEach((el)=>{
                el.style.color = 'var(--dTexlElwhite)';
            })
            document.querySelectorAll('.country').forEach((el)=>{
                el.style.color = 'var(--dTexlElwhite)';
            })
            document.querySelector('.enter').classList.remove('your-class');
            document.querySelector('body').style.background = 'var(--dBlueBg)';
            document.querySelector('.selected').style.color = 'var(--dTexlElwhite)';
            document.querySelector('.options-container').style.color = 'var(--dTexlElwhite)';
            document.getElementById('dark').classList.toggle('dark');
            document.querySelector('body').style.color = 'var(--dTexlElwhite)';
            document.querySelector('.enter').style.color = 'var(--dTexlElwhite)';
            document.querySelectorAll('.card').forEach((el)=>{
                el.style.color = 'var(--dTexlElwhite)';
                document.querySelectorAll('.pop').forEach((ll)=>{
                    ll.style.color = 'rgba(255, 255, 255, 0.766)';
                })
            })
        }
    })
