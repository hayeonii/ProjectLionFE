class ViewManager {
    constructor(textManager, options){
        // 예외처리 (두가지를 확실하게 받았는지 안 받았는지를 check)
        if (textManager.constructor !== TextManager) {
            // throw Error : 사용자 정의 에러. 프로그램을 종료합니다.
            throw Error('textManager 객체를 전달해야합니다!')
        }

        if (!options.ViewerEl || !options.btnEl || !options.inpTxt) {
            throw Error('필요한 요소 중에 빈값이 존재합니다.')
        }

        this.inpTxt = options.inpTxt;
        this.ViewerEl = options.ViewerEl;
        this.textManager = textManager;

        options.btnEl.addEventListener('click', () => {
            this.changeValue();
        })
    }

    changeValue(){
        // 값을 변경시켜줌
        this.textManager.setValue({data: this.inpTxt.value})
        this.updateView()
    }

    updateView() {
        // 사용자 화면 변경시켜줌
        this.ViewerEl.textContent = this.textManager.getValue();
    }
}