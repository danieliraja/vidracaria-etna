Utils = {
    linkCreator(string){
        const finalLink = string.replace(/\s/g, '-').trim()
        console.log(finalLink.toLowerCase());
    },
    setYear() {
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

Utils.setYear();