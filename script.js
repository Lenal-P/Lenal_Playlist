const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = {
    songs: [
        {
            name: 'ChiuCachNoiMinhThua',
            singer: 'Rhyder',
            path: './assets/music/ChiuCachNoiMinhThua.mp3',
            image: './assets/img/ChiuCachNoiMinhThua.jpg'
        },
        {
            name: 'ChungTaRoiSeHanhPhuc',
            singer: 'J97',
            path: './assets/music/ChungTaRoiSeHanhPhuc.mp3',
            image: './assets/img/ChungTaRoiSeHanhPhuc.jpg'
        },
        {
            name: 'CoAiHenHoCungEmChua',
            singer: 'Quân AP',
            path: './assets/music/CoAiHenHoCungEmChua.mp3',
            image: './assets/img/CoAiHenHoCungEmChua.jpg'
        },
        {
            name: 'DoaHoaVaChangKho',
            singer: 'Thanh Hưng',
            path: './assets/music/DoaHoaVaChangKho.mp3',
            image: './assets/img/DoaHoaVaChangKho.jpg'
        },
        {
            name: 'DungVeTreAcoustic',
            singer: 'MTP',
            path: './assets/music/DungVeTreAcoustic.mp3',
            image: './assets/img/DungVeTreAcoustic.jpg'
        },
        {
            name: 'AnhDaOnHon',
            singer: 'MCK',
            path: './assets/music/AnhDaOnHon.mp3',
            image: './assets/img/AnhDaOnHon.jpg'
        },
        {
            name: 'KhongTheSay',
            singer: 'HIEUTHUHAI',
            path: './assets/music/KhongTheSay.mp3',
            image: './assets/img/KhongTheSay.jpg'
        },
        {
            name: 'DapAnCuoiCung',
            singer: 'Quân AP',
            path: './assets/music/DapAnCuoiCung.mp3',
            image: './assets/img/DapAnCuoiCung.jpg'
        },
        {
            name: 'LoiXinLoiVungVe',
            singer: 'Quân AP',
            path: './assets/music/LoiXinLoiVungVe.mp3',
            image: './assets/img/LoiXinLoiVungVe.jpg'
        },
        {
            name: 'TayTo',
            singer: 'MCK',
            path: './assets/music/TayTo.mp3',
            image: './assets/img/TayTo.jpg'
        }
    ],
    
    render: function() {
        const htmls = this.songs.map(song => {
            return `
                <div class="song">
                    <div class="thumb" 
                        style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
        })
        $('.playlist').innerHTML = htmls.join('')
    },
    start: function() {
        this.render()
    }
}
app.start()