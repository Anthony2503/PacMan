var pos = 0;
    const pacArray = [
        ['PacMan1.png', 'PacMan2.png'],
        ['PacMan3.png', 'PacMan4.png']
    ];
    var direction = 'right';
    var focus = 0;

    function Run() {
        let img = document.getElementById("PacMan");
        let imgWidth = img.width
        let imgPosition = pos;
        let pageWidth = window.innerWidth;
        
        focus = (focus + 1) % 2;
        direction = checkPageBounds(direction, imgWidth, imgPosition, pageWidth);
        img.src = pacArray[direction === 'right' ? 0 : 1][focus];
        if (direction === 'right') {
            pos += 20;
            img.style.left = pos + "px";
        } else {
            pos -= 20;
            img.style.left = pos + 'px';
        }
    }
    setInterval(Run, 200);

    function checkPageBounds(direction, imgWidth, imgPosition, pageWidth) {
        if (direction === 'right' && imgPosition + imgWidth > pageWidth) {
            direction = 'left';
        }
        else if (direction === 'left' && imgPosition < 0) {
            direction = 'right';
        }

        return direction;
    }