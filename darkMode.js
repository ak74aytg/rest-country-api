document.getElementById("dark").addEventListener('click', ()=>{
    document.querySelector('body').classList.toggle('dark');
    
    element();
    background();

    hover();


    text();
    // if(rs.getPropertyValue('--dBlueEl') === 'hsl(209, 23%, 22%)'){
    //     r.style.setProperty('--dBlueEl', 'hsl(0, 0%, 100%)');
    // }else{
    //     r.style.setProperty('--dBlueEl', 'hsl(209, 23%, 22%)');
    // }

    
    // if(rs.getPropertyValue('--dBlueBg') !== 'hsl(207, 26%, 17%)'){
    //     r.style.setProperty('--dBlueBg', 'hsl(0, 0%, 90%)');
    // }else{
    //     r.style.setProperty('--dBlueBg', 'hsl(207, 26%, 17%)');
    // }

    
    // if(rs.getPropertyValue('--dTexlElwhite') !== 'hsl(0, 0%, 100%)'){
    //     r.style.setProperty('--dTexlElwhite', 'hsl(200, 15%, 8%)');
    // }else{
    //     r.style.setProperty('--dTexlElwhite', 'hsl(0, 0%, 100%)');
    // }
})



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


function text(){
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    if(rs.getPropertyValue('--dTexlElwhite') == 'hsl(0, 0%, 100%)'){
        r.style.setProperty('--dTexlElwhite', 'hsl(200, 15%, 8%)');
    }
    else if(rs.getPropertyValue('--dTexlElwhite') === 'hsl(200, 15%, 8%)'){
        r.style.setProperty('--dTexlElwhite', 'hsl(0, 0%, 100%)');
    }
}

function background(){
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    if(rs.getPropertyValue('--dBlueBg') !== 'hsl(207, 26%, 17%)'){
        r.style.setProperty('--dBlueBg', 'hsl(0, 0%, 90%)');
        console.log('nice')
    }else if(rs.getPropertyValue('--dBlueBg') === 'hsl(0, 0%, 90%)'){
        r.style.setProperty('--dBlueBg', 'hsl(207, 26%, 17%)');
    }
}
// window.addEventListener('click', ()=>{
//     if(document.querySelector('body').classList.contains('dark')){
//         document.querySelector('body').style.background = 'var(--lGreyBg)';
//         document.querySelector('body').style.color = 'var(--lBlueTex)';
//         document.querySelector('.enter').style.color = 'var(--lBlueTex)';
//         document.querySelector('.enter').classList.add('your-class');
//         document.querySelector('.selected').style.color = 'var(--lBlueTex)';
//         document.querySelector('.options-container').style.color = 'var(--lBlueTex)';
//         document.querySelector('.country').style.color = 'var(--lBlueTex)';
//         document.querySelector('header').style.background = 'var(--dTexlElwhite)';
//         document.querySelector('.backk').style.background = 'var(--dTexlElwhite)';
//         document.querySelector('.options-container').style.background = 'var(--dTexlElwhite)';
//         document.getElementById('dark').classList.toggle('dark');
//         document.querySelector('.input').style.background = 'var(--dTexlElwhite)';
//         document.querySelector('.enter').style.background = 'var(--dTexlElwhite)';
//         document.querySelector('.selected').style.background = 'var(--dTexlElwhite)';
//         document.querySelectorAll('.card').forEach((el)=>{
//             el.style.background = 'var(--dTexlElwhite)';
//             el.style.color = 'var(--lBlueTex)';
//             document.querySelectorAll('.pop').forEach((ll)=>{
//                 ll.style.color = 'var(--lBlueTex)';
//             })
//         })
//         document.querySelectorAll('.neigh').forEach((el)=>{
//             el.style.background = 'var(--dTexlElwhite)';
//             el.style.color = 'var(--lBlueTex)';
//         })
//         document.querySelectorAll('small').forEach((el)=>{
//             el.style.color = 'var(--lBlueTex)';
//         })
//         document.querySelectorAll('.country').forEach((el)=>{
//             el.style.color = 'var(--lBlueTex)';
//         })
        
//     }
//     else{
//         document.querySelectorAll('.neigh').forEach((el)=>{
//             el.style.background = 'var(--dBlueEl)';
//             el.style.color = 'var(--dTexlElwhite)';
//         })
//         document.querySelectorAll('small').forEach((el)=>{
//             el.style.color = 'var(--dTexlElwhite)';
//         })
//         document.querySelectorAll('.country').forEach((el)=>{
//             el.style.color = 'var(--dTexlElwhite)';
//         })
//         document.querySelector('.enter').classList.remove('your-class');
//         document.querySelector('body').style.background = 'var(--dBlueBg)';
//         document.querySelector('.selected').style.color = 'var(--dTexlElwhite)';
//         document.querySelector('.options-container').style.color = 'var(--dTexlElwhite)';
//         document.getElementById('dark').classList.toggle('dark');
//         document.querySelector('.input').style.background = 'var(--dBlueEl)';
//         document.querySelector('.backk').style.background = 'var(--dBlueEl)';
//         document.querySelector('.options-container').style.background = 'var(--dBlueEl)';
//         document.querySelector('header').style.background = 'var(--dBlueEl)';
//         document.querySelector('.enter').style.background = 'var(--dBlueEl)';
//         document.querySelector('.selected').style.background = 'var(--dBlueEl)';
//         document.querySelector('body').style.color = 'var(--dTexlElwhite)';
//         document.querySelector('.enter').style.color = 'var(--dTexlElwhite)';
//         document.querySelectorAll('.card').forEach((el)=>{
//             el.style.background = 'var(--dBlueEl)';
//             el.style.color = 'var(--dTexlElwhite)';
//             document.querySelectorAll('.pop').forEach((ll)=>{
//                 ll.style.color = 'rgba(255, 255, 255, 0.766)';
//             })
//         })
//     }
// })


