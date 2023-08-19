let clrOptions = [];
clrOptions.push(["rgb(240, 201, 180)" , "rgb(133, 94, 66)"] , ["#5F4B8BFF" , "#E69A8DFF"] ,["#949398FF" , "#F4DF4EFF"],["#00203FFF" , "#ADEFD1FF"]  )
var selectElement = document.getElementById("theme-select");
var theme = 0 ;
selectElement.addEventListener("change", function() {
    theme = selectElement.value;
    coloring()
});

// Inserting the Images
function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText === 'Wpyada' || image.innerText === 'Bpyada') {
                image.innerHTML = `${image.innerText} <img class='allimg allpyada' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'

            }
            else {

                image.innerHTML = `${image.innerText} <img class='allimg' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()



//Coloring

function coloring() {
    const color = document.querySelectorAll('.box')
    console.log(color);
    color.forEach(color => {
        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup
        if (a % 2 === 0) {
            color.style.backgroundColor = clrOptions[theme][0];
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = clrOptions[theme][1];
        }

    })
}
coloring()




//function to not remove the same team element

function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor === 'red') {

            document.querySelectorAll('.box').forEach(i2 => {

                if (i2.style.backgroundColor === 'green' && i2.innerText.length !== 0) {


                    greenText = i2.innerText

                    pinkText = i1.innerText

                    pinkColor = ((Array.from(pinkText)).shift()).toString()
                    greenColor = ((Array.from(greenText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup
            
                    if (a % 2 === 0 && pinkColor === greenColor) {
                        i2.style.backgroundColor = 'rgb(240, 201, 180)'
                    }
                    if (a % 2 !== 0 && pinkColor === greenColor) {
                        i2.style.backgroundColor = 'rgb(100, 75, 43)'
                    }

                    // if (pinkColor == greenColor) {
                    //     i2.style.backgroundColor = 'rgb(253, 60, 60)'
                    // }
                }
            })
        }
    })
}


tog = 1

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', function () {
        // To delete the opposite element
        if (item.style.backgroundColor === 'green' && item.innerText.length === 0) {
            tog = tog + 1
        }
        else if (item.style.backgroundColor === 'green' && item.innerText.length !== 0) {
            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor === 'pink') {
                    pinkId = i.id
                    pinkText = i.innerText
                    document.getElementById(pinkId).innerText = ''
                    item.innerText = pinkText
                    coloring()
                    insertImage()
                    tog = tog + 1
                }
            })
        }
        getId = item.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        arr.push('0')
        aup = eval(arr.join(''))
        a = aside + aup
        // Function to display the available paths for all pieces
        function whosTurn(toggle) {
            // Pyada
            if (item.innerText === `${toggle}pyada`) {
                item.style.backgroundColor = 'pink'
                if (tog % 2 !== 0 && aup < 800) {
                    if (document.getElementById(`b${a + 100}`).innerText.length === 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                    }
                    if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0 && document.getElementById(`b${a + 100 + 1}`).innerText !== `${toggle}pyada` ) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                    }
                    if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0 && document.getElementById(`b${a + 100 - 1}`).innerText !== `${toggle}pyada`) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                    }
                }
                if (tog % 2 === 0 && aup > 100) {
                    if (document.getElementById(`b${a - 100}`).innerText.length === 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                    }
                    if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0 && document.getElementById(`b${a - 100 + 1}`).innerText !== `${toggle}pyada`) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                    }
                    if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0 && document.getElementById(`b${a - 100 - 1}`).innerText !== `${toggle}pyada`) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                    }
                }
            }

            // raja

            if (item.innerText === `${toggle}raja`) {
                if (aside < 8) {
                    if(!document.getElementById(`b${a + 1}`).innerText.startsWith(`${toggle}`)) {
                        document.getElementById(`b${a + 1}`).style.backgroundColor = 'green'
                    }
                }
                if (aside > 1) {
                    if(!document.getElementById(`b${a - 1}`).innerText.startsWith(`${toggle}`)) {
                        document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
                    }
                }
                if (aup < 800) {
                    if(!document.getElementById(`b${a + 100}`).innerText.startsWith(`${toggle}`)) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                    }
                }
                if (aup > 100) {
                    if(!document.getElementById(`b${a - 100}`).innerText.startsWith(`${toggle}`)) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                    }
                }
                if (aup > 100 && aside < 8) {
                    if(!document.getElementById(`b${a - 100 + 1}`).innerText.startsWith(`${toggle}`)) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                    }
                }
                if (aup > 100 && aside > 1) {
                    if(!document.getElementById(`b${a - 100 - 1}`).innerText.startsWith(`${toggle}`)) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                    }
                }
                if (aup < 800 && aside < 8) {
                    if(!document.getElementById(`b${a + 100 + 1}`).innerText.startsWith(`${toggle}`)) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                    }
                }
                if (aup < 800 && aside > 1) {
                    if(!document.getElementById(`b${a + 100 - 1}`).innerText.startsWith(`${toggle}`)) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                    }
                }
                item.style.backgroundColor = 'pink'
            }


            // hathi

            if (item.innerText === `${toggle}hathi`) {
                for (let i = 1; i < 9; i++) {
                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText === "" ) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                    }
                    else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        if(!document.getElementById(`b${a + i * 100}`).innerText.startsWith(`${toggle}`)){
                            document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                        }
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i * 100) > 100 && !document.getElementById(`b${a - i * 100}`).innerText === "") {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                    }
                    else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        if(!document.getElementById(`b${a - i * 100}`).innerText.startsWith(`${toggle}`)) {
                            document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                        }
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText === "") {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                    }
                    else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        if(!document.getElementById(`b${a + i}`).innerText.startsWith(`${toggle}`)){
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        }
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText === "") {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                    }
                    else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        if(!document.getElementById(`b${a - i}`).innerText.startsWith(`${toggle}`)){
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        }
                        break
                    }
                }

                item.style.backgroundColor = 'pink'
            }



            // unnt

            if (item.innerText === `${toggle}unnt`) {


                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length === 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        if(!document.getElementById(`b${a + i * 100 + i}`).innerText.startsWith(`${toggle}`)){
                            document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                        }
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length === 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        if(!document.getElementById(`b${a - i * 100 + i}`).innerText.startsWith(`${toggle}`)){
                            document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                        }
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length === 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        if(!document.getElementById(`b${a + i * 100 - i}`).innerText.startsWith(`${toggle}`)){
                            document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                        }
                        break
                    }

                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length === 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        if(!document.getElementById(`b${a - i * 100 - i}`).innerText.startsWith(`${toggle}`)){
                            document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                        }
                        break
                    }
                }



                item.style.backgroundColor = 'pink'

            }



            // wazir

            if (item.innerText === `${toggle}wazir`) {


                for (let i = 1; i < 9; i++) {
                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText === "") {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                    }
                    else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== "") {
                        if(!document.getElementById(`b${a + i * 100}`).innerText.startsWith(`${toggle}`)){
                            document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                        }
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {
                    if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText === "") {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                    }
                    else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== "") {
                        if(!document.getElementById(`b${a - i * 100}`).innerText.startsWith(`${toggle}`)){
                            document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                        }
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {
                    if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText === "") {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                    }
                    else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== "") {
                        if(!document.getElementById(`b${a + i}`).innerText.startsWith(`${toggle}`)){
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        }
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText === "") {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                    }
                    else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== "") {
                        if(!document.getElementById(`b${a - i}`).innerText.startsWith(`${toggle}`)){
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        }
                        break
                    }
                }



                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText === "") {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        if(!document.getElementById(`b${a + i * 100 + i}`).innerText.startsWith(`${toggle}`)){
                            document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'}
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText === "") {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        if(!document.getElementById(`b${a - i * 100 + i}`).innerText.startsWith(`${toggle}`)){
                            document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                        }
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText === "") {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        if(!document.getElementById(`b${a + i * 100 - i}`).innerText.startsWith(`${toggle}`)){
                            document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                        }
                        break
                    }

                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText === "") {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        if(!document.getElementById(`b${a - i * 100 - i}`).innerText.startsWith(`${toggle}`)){
                            document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                        }
                        break
                    }
                }



                item.style.backgroundColor = 'pink'

            }

            // ghoda

            if (item.innerText === `${toggle}ghoda`) {

                if (aside < 7 && aup < 800) {
                    if(!document.getElementById(`b${a + 100 + 2}`).innerText.startsWith(`${toggle}`)){
                        document.getElementById(`b${a + 100 + 2}`).style.backgroundColor = 'green'
                    }
                }
                if (aside < 7 && aup > 200) {
                    if(!document.getElementById(`b${a - 100 + 2}`).innerText.startsWith(`${toggle}`)){
                        document.getElementById(`b${a +- 100 + 2}`).style.backgroundColor = 'green'
                    }
                }
                if (aside < 8 && aup < 700) {
                    if(!document.getElementById(`b${a + 200 + 1}`).innerText.startsWith(`${toggle}`)){
                        document.getElementById(`b${a + 200 + 1}`).style.backgroundColor = 'green'
                    }
                }
                if (aside >1 && aup < 700) {
                    if(!document.getElementById(`b${a + 200 - 1}`).innerText.startsWith(`${toggle}`)){
                        document.getElementById(`b${a + 200 - 1 }`).style.backgroundColor = 'green'
                    }
                }
                if (aside >2 && aup < 800) {
                    if(!document.getElementById(`b${a -2 + 100}`).innerText.startsWith(`${toggle}`)){
                        document.getElementById(`b${a -2 + 100 }`).style.backgroundColor = 'green'
                    }
                }
                if (aside >2 && aup >100) {
                    if(!document.getElementById(`b${a - 2 - 100}`).innerText.startsWith(`${toggle}`)){
                        document.getElementById(`b${a - 2 - 100}`).style.backgroundColor = 'green'
                    }
                }
                if (aside < 8 && aup > 200) {
                    if(!document.getElementById(`b${a - 200 + 1}`).innerText.startsWith(`${toggle}`)){
                        document.getElementById(`b${a - 200 + 1}`).style.backgroundColor = 'green'
                    }
                }
                if (aside > 1 && aup > 200) {
                    if(!document.getElementById(`b${a - 200 - 1}`).innerText.startsWith(`${toggle}`)){
                        document.getElementById(`b${a - 200 - 1}`).style.backgroundColor = 'green'
                    }
                }
                item.style.backgroundColor = 'pink'

            }
        }


        // Toggling the turn

        if (tog % 2 !== 0) {
            document.getElementById('tog').innerText = "White's Turn"
            whosTurn('W')
        }
        if (tog % 2 === 0) {
            document.getElementById('tog').innerText = "Black's Turn"
            whosTurn('B')
        }

        reddish()



        // winning()

        numOfRaja = 0


        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText === 'Wking' || win.innerText === 'Bking') {
                numOfRaja += 1
            }

        })

        if (numOfRaja === 1) {
            setTimeout(() => {
                // console.log(`${toggle}`) 
                if (tog % 2 === 0) {
                    alert('White Wins !!')
                    location.reload()
                }
                else if (tog % 2 !== 0) {
                    alert('Black Wins !!')
                    location.reload()
                }
            }, 100)
        }



    })

})





// Moving the element
document.querySelectorAll('.box').forEach(hathiTest => {
    hathiTest.addEventListener('click', function () {
        // console.log(hathiTest);
        if (hathiTest.style.backgroundColor === 'pink') {
            pinkId = hathiTest.id
            pinkText = hathiTest.innerText
            document.querySelectorAll('.box').forEach(hathiTest2 => {
                hathiTest2.addEventListener('click', function () {
                    // console.log(hathiTest2);
                    if (hathiTest2.style.backgroundColor === 'green' && hathiTest2.innerText.length === 0) {
                        document.getElementById(pinkId).innerText = ''
                        hathiTest2.innerText = pinkText
                        coloring()
                        insertImage()
                    }
                })
            })
        }
    })
})

// Prvents from selecting multiple elements
z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 === 0 && ee.style.backgroundColor !== 'green') {
            coloring()
        }
    })
})