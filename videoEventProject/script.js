const vod = document.querySelector('#media')


vod.addEventListener('pause', () =>{
    const p = document.querySelector('#demo')
    p.textContent = 'pause clicked'
})
vod.addEventListener('seeking', () =>{
    const p = document.querySelector('#demo')
    p.textContent = 'seeking'
})
vod.addEventListener('volumechange', () =>{
    const p = document.querySelector('#demo')
    p.textContent = 'Volume Changed'
})
vod.addEventListener('play', () =>{
    const p = document.querySelector('#demo')
    p.textContent = 'play clicked'
})
vod.addEventListener('ended', () =>{
    const p = document.querySelector('#demo')
    p.textContent = 'video ended'
})
vod.addEventListener('timeupdate', () =>{
    const p = document.querySelector('#demo1')
    p.textContent = 'my video'+ vod.currentTime
})
vod.addEventListener('loadedmetadata', () =>{
    alert('metadata loaded')
    alert('video duration: '+vod.duration)

    
})
vod.addEventListener('seeked', () =>{
    const p = document.querySelector('#demo2')
    p.textContent = 'my video seeked : '+ vod.currentTime
})

