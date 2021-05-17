Animation = {
    animateSVG(){

        const animate =  (svg) => {
            const svgPath = document.querySelector('.forma-pagamento');            
            if(window.scrollY > svgPath.getBoundingClientRect().top){
                svgPath.classList.add('active')
            }            
        }
        window.addEventListener('scroll', animate);

    }
}


Utils = {
    linkCreator(string){
        const finalLink = string.replace(/\s/g, '-').trim()
        console.log(finalLink.toLowerCase());
    },
    getYear() {
        let date = new Date();
        date = date.getFullYear();
        let year = document.querySelector(".ano");
        year.innerHTML = date;
    },

    noAttr(tag, atribute) {
        let href = document.querySelectorAll(tag);
        return href.forEach((item) => {
            item.getAttribute(atribute) === null ?
                item.classList.add("noAttrHere") :
                null;
        });
    },
};

Utils.getYear();
Animation.animateSVG();