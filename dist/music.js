const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "Never Gonna Give You Up",
        artist: 'Rick Astley',
        url: '/images/yt1s.com - Rick Astley  Never Gonna Give You Up Official Music Video.mp3',
        cover: '/images/never_gonna_give_you_up.jpg'
      }
    ]
});