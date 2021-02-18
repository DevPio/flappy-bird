document.addEventListener('DOMContentLoaded' , () => {

    const bird  = document.querySelector('.bird');
    const gameDisplauy = document.querySelector('.game-container')
    const ground = document.querySelector('.ground-moving')

    
    let birdLeft = 220
    let birdBottom = 100
    let gravity = 3
    let isGameOver = false
    let gap = 430



    function startGame(){
        if(birdBottom<0) birdBottom = 100
        console.log(birdBottom)
        birdBottom -= gravity
       
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }

    let gameTimerId = setInterval(startGame,30)

    function jump(){
        if(birdBottom < 500) birdBottom += 50
        bird.style.bottom = birdBottom + 'px'
    }


    function generateObstacle(){

        let obstacleLeft = 500
        let randomHeight = Math.random() * 60
        let obstacleBottom = randomHeight
        const obstacle = document.createElement('div')
        const topObstacle = document.createElement('div')



        gameDisplauy.appendChild(obstacle)
        gameDisplauy.appendChild(topObstacle)
        obstacle.style.left = obstacleLeft + 'px'
        topObstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'
        topObstacle.style.bottom = obstacleBottom + gap + 'px'

        if(!isGameOver){
            obstacle.classList.add('obstacle')
            topObstacle.classList.add('topObstacle')
        }

        function moveObs(){
            obstacleLeft += -2
            obstacle.style.left = obstacleLeft + 'px'
            topObstacle.style.left = obstacleLeft + 'px'

            if(obstacleLeft == 60){
                clearInterval(timerId)
                obstacle.classList.remove('obstacle')
                topObstacle.classList.remove('topObstacle')
            }
        }

       let timerId =  setInterval(moveObs,20)
       if(!isGameOver) setTimeout(generateObstacle,3000)

    }

    generateObstacle()


    document.addEventListener('click',jump)
})
