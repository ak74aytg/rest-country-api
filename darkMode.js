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


function textDark(){
    document.documentElement.style.setProperty("--dTexlElwhite", 'hsl(200, 15%, 8%)');
    document.documentElement.style.setProperty("--notSoWhite", 'hsla(200, 15%, 8%, 0.566)');
}
function textBright(){
    document.documentElement.style.setProperty("--dTexlElwhite", 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty("--notSoWhite", 'rgba(255, 255, 255, 0.766)');
}




document.getElementById("dark").addEventListener('click', ()=>{
    element();
    hover();
    if(document.getElementById('dark').classList.contains('dark')){
        textDark();
        document.querySelector('body').style.background = 'var(--lGreyBg)';
        document.querySelector('.enter').classList.add('your-class');
        document.getElementById('dark').classList.toggle('dark');
        document.querySelectorAll('.card').forEach((el)=>{
            document.querySelectorAll('.pop').forEach((ll)=>{
            })
        })
        document.querySelectorAll('.neigh').forEach((el)=>{
            el.style.background = 'var(--dTexlElwhite)';
        })
        document.querySelectorAll('small').forEach((el)=>{
        })
        document.querySelectorAll('.country').forEach((el)=>{
        })
    }else{
        textBright();
            document.querySelectorAll('.neigh').forEach((el)=>{
            })
            document.querySelectorAll('small').forEach((el)=>{
            })
            document.querySelectorAll('.country').forEach((el)=>{
            })
            document.querySelector('.enter').classList.remove('your-class');
            document.querySelector('body').style.background = 'var(--dBlueBg)';
            document.getElementById('dark').classList.toggle('dark');
            document.querySelectorAll('.card').forEach((el)=>{
                document.querySelectorAll('.pop').forEach((ll)=>{
                    ll.style.color = 'rgba(255, 255, 255, 0.766)';
                })
            })
        }
    })
