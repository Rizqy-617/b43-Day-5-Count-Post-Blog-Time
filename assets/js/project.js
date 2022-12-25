let data = []

function addData(event) {
    event.preventDefault ()

    // Deklarasi variable sama dom buat nangkap value nya
    let projectName = document.getElementById("project_name").value
    let startDate = document.getElementById("start_date").value
    let endDate = document.getElementById("end_date").value
    let description = document.getElementById("description").value
    let nodeJS = document.getElementById("nodejs")
    let reactJS = document.getElementById("reactjs")
    let nextJS = document.getElementById("nextjs")
    let typeScript = document.getElementById("typescript")
    let uploadImage = document.getElementById("upload_image").files
    let imageURL = URL.createObjectURL(uploadImage[0])

    //Deklarasi variable buat icon technology
    let nodeJSImg = ''
    let reactJSImg = ''
    let nextJSImg = ''
    let typeScriptImg = ''

    //Pengkondisian buat masukin img icon ke variable 
    if (nodeJS.checked == true) {
        nodeJSImg = '/assets/img/node-js-icon.svg'
    }
    if (reactJS.checked == true) {
        reactJSImg = '/assets/img/react-js-icon.svg'
    }
    if (nextJS.checked == true) {
        nextJSImg = '/assets/img/nextjs-icon.svg'
    }
    if (typeScript.checked == true) {
        typeScriptImg = '/assets/img/typescript-icon.svg'
    }

    //Ngedeklare variable project
    let project = {
        projectName : projectName,
        startDate : startDate,
        endDate : endDate,
        description : description,
        imageURL : imageURL,
        nodeJSImg,
        reactJSImg,
        nextJSImg,
        typeScriptImg
    }

    //Ngepush value yang ada di project ke data
    data.push(project)
    renderBlog()
    console.log(data.length)
}

//Mengrender data yang telah kita submit
function renderBlog() {
    document.getElementById('projects').innerHTML = ``
// Loop
for (let index = 0; index < data.length; index++) {
    document.getElementById('projects').innerHTML += `
    <div class="card-project" id="card-${index}">
        <div class="cover_image">
            <img src="${data[index].imageURL}" alt="">
        </div>
        <div class="card-content">
            <div class="project-name">
                <a href="project-detail.html"><h3>${data[index].projectName}</h3></a>
                <h4>Duration: ${countTime(data[index].startDate, data[index].endDate)}</h4>
            </div>
            <div class="card-text">
                <p>${data[index].description}</p>
            </div>
            <div class="tech_icon">
                <img src="${data[index].nodeJSImg}">
                <img src="${data[index].reactJSImg}">
                <img src="${data[index].nextJSImg}">
                <img src="${data[index].typeScriptImg}">
            </div>
            <div class="btn-card">
                <button>Edit</button>
                <button type="button" onclick="document.getElementById('card-${index}').remove()">Delete</button>
            </div>
        </div>
    </div>
    `

}

}

// Fungsi Menambahkan waktu

function countTime(startDate , endDate) {
    let timeStart = new Date(startDate)
    let timeEnd = new Date(endDate)

    let distance = timeEnd - timeStart

    let monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * 1000))
    if (monthDistance != 0) {
        return monthDistance + ' Month'
    } else {
        let weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * 1000))
        if (weekDistance != 0) {
            return weekDistance + ' Week'
        } else {
            let daysDistance = Math.floor(distance / (24 * 60 * 60 * 1000))
            if (daysDistance != 0) {
                return daysDistance + ' Days'
            } else {
                return ' 1 Days'
            }
        }
    }

}