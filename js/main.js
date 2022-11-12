const {createApp} = Vue; 

createApp({
    data(){
        return{
            message: 'ciao a tutti',
            imgSource: 'https://th.bing.com/th/id/OIP.1OkAhOnV7yfNuAdBlfKyGgHaEK?pid=ImgDet&rs=1'
        }
    }


}).mount('#app')