class ColaGenerator {
    // constructor : class를 통해 instance를 생성할 때
    constructor() {
        this.itemList = document.querySelector('.list-item')
    }

    setUp(){
        this.loadData(
            (json) => {
            this.colaFactory(json);
            }
        )
    }

    async loadData(callback) {
        // Ajax Asynchronous javasscript and xml
        // JSON JavaScript Object Notation
        // const requestObj = new XMLHttpRequest(); // 서버와 통신하기 위해 객체를 생성함
        // requestObj.open('GET', 'src/js/item.json') // 요청 시작
        // requestObj.onreadystatechange = () => { // readyState가 변화하면 트리거
        //     if(requestObj.readyState === 4 && requestObj.status === 200) {
        //         // json 데이터가 안으로 들어옴
        //         callback(JSON.parse(requestObj.responseText))
        //     }
        // }
        // requestObj.send(null)

        const response = await fetch('src/js/item.json')

        if(response.ok) { // http 상태코드가 200 ~ 299 경우
            callback(await response.json()) // 응답 본문을 읽으면서 객체형태로 파싱
        } else {
            alert('통신 에러!' + response.status)
        }
    }

    colaFactory(data) {
        const docFrag = document.createDocumentFragment();
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = `
            <button type="button" class="btn-item" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img src="src/images/${el.img}" alt="" class="img-item">
                <strong class="tit-item">${el.name}</strong>
                <span class="txt-price">${el.cost}원</span>
            </button>
            `;
            item.innerHTML = itemTemplate;
            docFrag.appendChild(item);
        });
        this.itemList.appendChild(docFrag);
    }
}

export default ColaGenerator