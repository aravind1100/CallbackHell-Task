// Callbackhell or Pain of callback
const div = document.getElementById("container")
// "click" event can be used if the content has to be displayed after clicking the div.
document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        div.innerText="10"
        setTimeout(()=>{
            div.innerText="9"
            setTimeout(()=>{
                div.innerText="8"
                setTimeout(()=>{
                    div.innerText="7"
                    setTimeout(()=>{
                        div.innerText="6"
                        setTimeout(()=>{
                            div.innerText="5"
                            setTimeout(()=>{
                                div.innerText="4"
                                setTimeout(()=>{
                                    div.innerText="3"
                                    setTimeout(()=>{
                                        div.innerText="2"
                                        setTimeout(()=>{
                                            div.innerText="1"
                                            setTimeout(()=>{
                                                div.innerText="Happy Independence Day"
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
})