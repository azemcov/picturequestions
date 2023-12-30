function start() {
    document.getElementById('start').style.zIndex = -1;
    document.getElementById('final').style.zIndex = 1;
}

document.getElementById('e').onclick = () => {
    document.getElementById('final').style.zIndex = -1;
    document.getElementById('qst_sect').style.zIndex = 2;
    document.getElementById('qst_box').style.backgroundImage = 'url(em.png)'
    document.addEventListener('keydown',(z)=>{
        if (z.code == 'KeyA') {
            document.getElementById('qst_box').style.backgroundImage = 'url(eunm.png)'
        }else if(z.code == 'Digit1'){
            document.getElementById('qst_sect').style.zIndex = -1;
            document.getElementById('final').style.zIndex = 1;
        }
    })
};

document.getElementById('1').onclick = () => {
    document.getElementById('final').style.zIndex = -1;
    document.getElementById('qst_sect').style.zIndex = 2;
    document.getElementById('qst_box').style.backgroundImage = 'url(1m.png)'
    document.addEventListener('keydown',(z)=>{
        if (z.code == 'KeyA') {
            document.getElementById('qst_box').style.backgroundImage = 'url(1unm.png)'
        }else if(z.code == 'Digit1'){
            document.getElementById('qst_sect').style.zIndex = -1;
            document.getElementById('final').style.zIndex = 1;
        }
    })
};

document.getElementById('2').onclick = () => {
    document.getElementById('final').style.zIndex = -1;
    document.getElementById('qst_sect').style.zIndex = 2;
    document.getElementById('qst_box').style.backgroundImage = 'url(2m.png)'
    document.addEventListener('keydown',(z)=>{
        if (z.code == 'KeyA') {
            document.getElementById('qst_box').style.backgroundImage = 'url(2unm.png)'
        }else if(z.code == 'Digit1'){
            document.getElementById('qst_sect').style.zIndex = -1;
            document.getElementById('final').style.zIndex = 1;
        }
    })
};

document.getElementById('3').onclick = () => {
    document.getElementById('final').style.zIndex = -1;
    document.getElementById('qst_sect').style.zIndex = 2;
    document.getElementById('qst_box').style.backgroundImage = 'url(3m.png)'
    document.addEventListener('keydown',(z)=>{
        if (z.code == 'KeyA') {
            document.getElementById('qst_box').style.backgroundImage = 'url(3unm.png)'
        }else if(z.code == 'Digit1'){
            document.getElementById('qst_sect').style.zIndex = -1;
            document.getElementById('final').style.zIndex = 1;
        }
    })
};

document.getElementById('4').onclick = () => {
    document.getElementById('final').style.zIndex = -1;
    document.getElementById('qst_sect').style.zIndex = 2;
    document.getElementById('qst_box').style.backgroundImage = 'url(4m.png)'
    document.addEventListener('keydown',(z)=>{
        if (z.code == 'KeyA') {
            document.getElementById('qst_box').style.backgroundImage = 'url(4unm.png)'
        }else if(z.code == 'Digit1'){
            document.getElementById('qst_sect').style.zIndex = -1;
            document.getElementById('final').style.zIndex = 1;
        }
    })
};

document.getElementById('5').onclick = () => {
    document.getElementById('final').style.zIndex = -1;
    document.getElementById('qst_sect').style.zIndex = 2;
    document.getElementById('qst_box').style.backgroundImage = 'url(5m.png)'
    document.addEventListener('keydown',(z)=>{
        if (z.code == 'KeyA') {
            document.getElementById('qst_box').style.backgroundImage = 'url(5unm.png)'
        }else if(z.code == 'Digit1'){
            document.getElementById('qst_sect').style.zIndex = -1;
            document.getElementById('final').style.zIndex = 1;
        }
    })
};
